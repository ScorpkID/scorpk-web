import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/** Refresca la sesión de Supabase en cada request (patrón estándar de
 * @supabase/ssr) — sin esto, las cookies de sesión se vencen sin avisar. */
export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          for (const { name, value } of cookiesToSet) {
            request.cookies.set(name, value);
          }
          response = NextResponse.next({ request });
          for (const { name, value, options } of cookiesToSet) {
            response.cookies.set(name, value, options);
          }
        },
      },
    },
  );

  await supabase.auth.getUser();

  return response;
}

export const config = {
  matcher: [
    // Se excluyen los archivos que consulta la app Android (assetlinks, latest.json) y su API de IA,
    // que se autentica con Bearer: no necesitan refrescar cookies de sesión.
    "/((?!_next/static|_next/image|favicon.ico|\\.well-known|android/|api/ai/|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
