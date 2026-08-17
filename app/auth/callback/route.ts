import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createHandoff } from "@/lib/vscodeHandoff";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // El flag viaja por cookie, no por el redirectTo de signInWithOAuth: si
  // se lo agregamos como query string ahí, deja de matchear exacto contra
  // la lista de Redirect URLs de Supabase y el login se rompe.
  const fromVscode = request.cookies.get("scorpk_vscode_login")?.value === "1";

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      if (fromVscode && data.session) {
        const handoff = await createHandoff(data.session.access_token, data.session.refresh_token);
        const res = NextResponse.redirect(`${origin}/auth/vscode-done?handoff=${handoff}`);
        res.cookies.delete("scorpk_vscode_login");
        return res;
      }
      return NextResponse.redirect(`${origin}/account`);
    }
  }

  return NextResponse.redirect(`${origin}/login`);
}
