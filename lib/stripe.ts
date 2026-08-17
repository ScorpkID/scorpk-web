import Stripe from "stripe";

let stripeClient: Stripe | null = null;

/** Se instancia recién al primer uso (dentro de un route handler) para que
 * el build no falle mientras STRIPE_SECRET_KEY todavía no está seteada. */
export function getStripe(): Stripe {
  if (!stripeClient) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error("Falta STRIPE_SECRET_KEY.");
    }
    stripeClient = new Stripe(key, { apiVersion: "2026-07-29.dahlia" });
  }
  return stripeClient;
}
