# scorpk-web

Sitio y cuentas de [Scorpk](https://github.com/ScorpkID/scorpk) — landing,
precios, login (mismo Supabase que la extensión de VS Code) y cobros con
Stripe (Checkout + Billing Portal).

## Stack

- Next.js 16 (App Router) + React 19 + Tailwind CSS v4
- Supabase (`@supabase/ssr`) — misma base que usa la extensión, cuenta única
- Stripe — Checkout alojado, Billing Portal, y un webhook que sincroniza el
  plan en la tabla `subscriptions`

## Desarrollo local

```bash
npm install
npm run dev
```

Copiá `.env.local.example` a `.env.local` y completá:

- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — mismos
  valores que `src/auth/supabaseConfig.ts` en el repo de la extensión.
- `SUPABASE_SERVICE_ROLE_KEY` — del dashboard de Supabase, solo se usa del
  lado del servidor (`lib/supabase/admin.ts`), nunca se expone al cliente.
- `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` / `NEXT_PUBLIC_STRIPE_PRICE_ID`
  — del dashboard de Stripe (modo prueba mientras no haya lanzamiento). El
  sitio compila y corre igual sin estas, pero los endpoints de `/api/stripe/*`
  devuelven error hasta que estén.
- `NEXT_PUBLIC_SITE_URL` — `http://localhost:3000` en desarrollo.

## Tabla `subscriptions`

Se crea a mano en el SQL Editor de Supabase (no vive en este repo). Solo el
webhook de Stripe, usando la service_role key, puede escribir en ella — ni
el usuario ni la extensión pueden otorgarse Pro llamando al cliente
directo.

## Estructura

- `app/` — páginas y route handlers (App Router)
- `app/api/stripe/` — checkout, billing portal, webhook
- `lib/supabase/` — clientes de browser, server component y admin
  (service_role)
- `lib/stripe.ts` — SDK de Stripe, instanciado recién al primer uso para no
  romper el build mientras falten las claves
- `proxy.ts` — refresca la sesión de Supabase en cada request
