import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { SignOutButton } from "@/components/SignOutButton";
import { PortalButton } from "@/components/PortalButton";

export const metadata: Metadata = { title: "Mi cuenta" };

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("plan, status, current_period_end")
    .eq("user_id", user.id)
    .maybeSingle();

  const plan = subscription?.plan ?? "free";
  const isPro = plan === "pro" && subscription?.status === "active";

  return (
    <section className="mx-auto w-full max-w-lg flex-1 px-6 py-16">
      <h1 className="mb-1 text-2xl font-semibold">Mi cuenta</h1>
      <p className="mb-10 text-sm text-muted">{user.email}</p>

      <div className="rounded-xl border border-border p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[13px] uppercase tracking-wide text-muted">Plan actual</p>
            <p className="mt-1 text-xl font-semibold">
              {isPro ? <span className="text-accent">Pro</span> : "Free"}
            </p>
          </div>
          {isPro && subscription?.current_period_end && (
            <p className="text-right text-sm text-faint">
              Renueva el{" "}
              {new Date(subscription.current_period_end).toLocaleDateString("es", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {isPro ? (
            <PortalButton />
          ) : (
            <a
              href="/pricing"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink hover:opacity-90 transition-opacity"
            >
              Pasarme a Pro
            </a>
          )}
        </div>
      </div>

      <div className="mt-8">
        <SignOutButton />
      </div>
    </section>
  );
}
