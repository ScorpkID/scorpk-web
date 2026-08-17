import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createHandoff } from "@/lib/vscodeHandoff";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const fromVscode = searchParams.get("from") === "vscode";

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      if (fromVscode && data.session) {
        const handoff = await createHandoff(data.session.access_token, data.session.refresh_token);
        return NextResponse.redirect(`${origin}/auth/vscode-done?handoff=${handoff}`);
      }
      return NextResponse.redirect(`${origin}/account`);
    }
  }

  return NextResponse.redirect(`${origin}/login`);
}
