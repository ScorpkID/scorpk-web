import { NextRequest, NextResponse } from "next/server";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { createAdminClient } from "@/lib/supabase/admin";
import { allowRequest } from "@/lib/rateLimit";

/**
 * Servidor intermedio de IA para la app Android de Scorpk.
 *
 * La app publicada no lleva ninguna API key: envía la petición aquí con el token de sesión del
 * usuario, y este endpoint la reenvía a Fireworks AI con la clave guardada en el servidor
 * (variable FIREWORKS_API_KEY). Así el APK público no puede filtrar la clave.
 *
 * No se registra ni se guarda el contenido de las peticiones ni de las respuestas.
 */

const FIREWORKS_URL = "https://api.fireworks.ai/inference/v1/chat/completions";

/** Solo estos modelos pueden usarse; la lista debe coincidir con AiModel.kt en la app. */
const ALLOWED_MODELS = new Set([
  "accounts/fireworks/models/gpt-oss-120b",
  "accounts/fireworks/models/deepseek-v4p1-flash",
  "accounts/fireworks/models/glm-5p3-flash",
  "accounts/fireworks/models/glm-5p3",
]);

const MAX_TOKENS_CAP = 3000;
const MAX_MESSAGES = 30;
/** Las imágenes viajan en base64: se permite un cuerpo grande, pero acotado. */
const MAX_BODY_CHARS = 8_000_000;
const RATE_LIMIT_PER_MINUTE = 30;
const UPSTREAM_TIMEOUT_MS = 70_000;

/** Correos con acceso Pro sin suscripción (AI_PRO_EMAILS="a@x.com,b@y.com"), para el equipo y pruebas. */
function isProEmail(email: string | undefined): boolean {
  if (!email) return false;
  const allowed = (process.env.AI_PRO_EMAILS ?? "")
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
  return allowed.includes(email.toLowerCase());
}

function json(body: unknown, status: number) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.FIREWORKS_API_KEY;
  if (!apiKey) {
    return json({ error: { message: "La IA no está configurada en el servidor." } }, 503);
  }

  // 1) Sesión: solo usuarios con cuenta de Scorpk.
  const token = request.headers.get("authorization")?.match(/^Bearer\s+(.+)$/i)?.[1];
  if (!token) {
    return json({ error: { message: "Falta la sesión." } }, 401);
  }
  const supabase = createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } },
  );
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser(token);
  if (authError || !user) {
    return json({ error: { message: "Sesión inválida o vencida." } }, 401);
  }

  // 2) Plan: la IA es parte de Pro. Pasan los suscriptores activos y los correos de AI_PRO_EMAILS
  //    (equipo y pruebas). AI_REQUIRE_PRO=false desactiva la restricción por completo.
  if (process.env.AI_REQUIRE_PRO !== "false" && !isProEmail(user.email)) {
    const { data: subscription } = await createAdminClient()
      .from("subscriptions")
      .select("plan, status")
      .eq("user_id", user.id)
      .maybeSingle();
    const isPro = subscription?.plan === "pro" && ["active", "trialing"].includes(subscription.status ?? "");
    if (!isPro) {
      return json({ error: { message: "La IA de Scorpk requiere el plan Pro." } }, 402);
    }
  }

  // 3) Frenos básicos de abuso.
  if (!allowRequest(`ai:${user.id}`, RATE_LIMIT_PER_MINUTE, 60_000)) {
    return json({ error: { message: "Demasiadas peticiones. Espera un momento." } }, 429);
  }

  // 4) Validación del cuerpo: solo se reenvían los campos permitidos.
  const raw = await request.text();
  if (raw.length > MAX_BODY_CHARS) {
    return json({ error: { message: "La petición es demasiado grande." } }, 413);
  }
  let payload: {
    model?: unknown;
    messages?: unknown;
    response_format?: unknown;
    temperature?: unknown;
    max_tokens?: unknown;
  };
  try {
    payload = JSON.parse(raw);
  } catch {
    return json({ error: { message: "JSON inválido." } }, 400);
  }
  if (typeof payload.model !== "string" || !ALLOWED_MODELS.has(payload.model)) {
    return json({ error: { message: "Modelo no permitido." } }, 400);
  }
  if (!Array.isArray(payload.messages) || payload.messages.length === 0 || payload.messages.length > MAX_MESSAGES) {
    return json({ error: { message: "Mensajes inválidos." } }, 400);
  }

  const upstreamBody = {
    model: payload.model,
    messages: payload.messages,
    response_format: payload.response_format ?? { type: "json_object" },
    temperature: typeof payload.temperature === "number" ? Math.min(Math.max(payload.temperature, 0), 1.5) : 0.1,
    max_tokens: Math.min(typeof payload.max_tokens === "number" ? payload.max_tokens : 600, MAX_TOKENS_CAP),
  };

  // 5) Reenvío a Fireworks con la clave del servidor.
  let upstream: Response;
  try {
    upstream = await fetch(FIREWORKS_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(upstreamBody),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
  } catch {
    return json({ error: { message: "No se pudo contactar al servicio de IA." } }, 504);
  }

  // Un 401/403 de Fireworks es problema de la clave del servidor, no de la sesión del usuario:
  // se responde 502 para que la app no lo confunda con «sesión vencida».
  if (upstream.status === 401 || upstream.status === 403) {
    return json({ error: { message: "El servicio de IA no está disponible." } }, 502);
  }

  const text = await upstream.text();
  return new NextResponse(text, {
    status: upstream.status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
