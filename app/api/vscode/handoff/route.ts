import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createHandoff } from "@/lib/vscodeHandoff";

export async function POST() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.json({ error: "No hay sesión activa." }, { status: 401 });
  }

  const code = await createHandoff(session.access_token, session.refresh_token);
  return NextResponse.json({ code });
}
