import { randomBytes } from "crypto";
import { createAdminClient } from "./supabase/admin";

const HANDOFF_TTL_MS = 120_000;

/** Crea un código de un solo uso que la extensión canjea por la sesión.
 * Nunca se pasan tokens crudos por la URI vscode:// — solo este código,
 * de vida corta y borrado al primer consumo. */
export async function createHandoff(accessToken: string, refreshToken: string): Promise<string> {
  const code = randomBytes(32).toString("hex");
  const admin = createAdminClient();
  const { error } = await admin.from("auth_handoffs").insert({
    code,
    access_token: accessToken,
    refresh_token: refreshToken,
    expires_at: new Date(Date.now() + HANDOFF_TTL_MS).toISOString(),
  });
  if (error) throw new Error(error.message);
  return code;
}
