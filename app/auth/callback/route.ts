import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createHandoff } from "@/lib/vscodeHandoff";
import { LOGIN_TARGET_COOKIE, isAllowedLocalCallback } from "@/lib/loginTarget";
import { VSCODE_AUTH_CALLBACK } from "@/lib/vscodeAuthCallback";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // El destino viaja por cookie, no por el redirectTo de signInWithOAuth: si
  // se lo agregamos como query string ahí, deja de matchear exacto contra
  // la lista de Redirect URLs de Supabase y el login se rompe.
  const target = request.cookies.get(LOGIN_TARGET_COOKIE)?.value;

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error && data.session) {
      if (target === VSCODE_AUTH_CALLBACK) {
        const handoff = await createHandoff(data.session.access_token, data.session.refresh_token);
        const res = NextResponse.redirect(`${origin}/auth/vscode-done?handoff=${handoff}`);
        res.cookies.delete(LOGIN_TARGET_COOKIE);
        return res;
      }
      // Nunca confiamos ciegamente en la cookie para un redirect con el
      // código sensible adentro — se revalida el origen acá también, no
      // solo cuando se generó en /login.
      if (target && isAllowedLocalCallback(target)) {
        const handoff = await createHandoff(data.session.access_token, data.session.refresh_token);
        const res = NextResponse.redirect(`${target}?handoff=${handoff}`);
        res.cookies.delete(LOGIN_TARGET_COOKIE);
        return res;
      }
      return NextResponse.redirect(`${origin}/account`);
    }
  }

  return NextResponse.redirect(`${origin}/login`);
}
