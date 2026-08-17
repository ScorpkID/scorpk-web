import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Cliente con la service_role key — se salta Row Level Security, así que
 * SOLO se usa del lado del servidor para el webhook de Stripe (la única
 * pieza que tiene permiso de escribir el plan de un usuario). Nunca se
 * importa desde un componente de cliente ni desde código que corra en el
 * browser.
 */
export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } },
  );
}
