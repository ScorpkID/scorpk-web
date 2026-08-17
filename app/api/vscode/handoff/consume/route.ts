import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: NextRequest) {
  const { code } = await request.json().catch(() => ({ code: null }));
  if (!code || typeof code !== "string") {
    return NextResponse.json({ error: "Falta el código." }, { status: 400 });
  }

  const admin = createAdminClient();
  const { data, error } = await admin
    .from("auth_handoffs")
    .delete()
    .eq("code", code)
    .gt("expires_at", new Date().toISOString())
    .select("access_token, refresh_token")
    .maybeSingle();

  if (error || !data) {
    return NextResponse.json({ error: "Código inválido o vencido." }, { status: 404 });
  }

  return NextResponse.json({ access_token: data.access_token, refresh_token: data.refresh_token });
}
