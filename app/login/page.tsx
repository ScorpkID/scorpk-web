"use client";

import { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Mode = "signin" | "signup";

function LoginForm() {
  const router = useRouter();
  const supabase = createClient();
  const searchParams = useSearchParams();
  const fromVscode = searchParams.get("from") === "vscode";
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  async function afterSignedIn() {
    if (fromVscode) {
      const res = await fetch("/api/vscode/handoff", { method: "POST" });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "No se pudo completar el login.");
        setBusy(false);
        return;
      }
      router.push(`/auth/vscode-done?handoff=${data.code}`);
      return;
    }
    router.push("/account");
    router.refresh();
  }

  async function oauth(provider: "github" | "google") {
    setBusy(true);
    setError(null);
    const redirectTo = `${window.location.origin}/auth/callback${fromVscode ? "?from=vscode" : ""}`;
    await supabase.auth.signInWithOAuth({ provider, options: { redirectTo } });
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim() || !password) return;
    setBusy(true);
    setError(null);
    setInfo(null);

    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
      if (error) {
        setError(translateError(error.message));
        setBusy(false);
        return;
      }
      await afterSignedIn();
    } else {
      const { data, error } = await supabase.auth.signUp({ email: email.trim(), password });
      if (error) {
        setError(translateError(error.message));
        setBusy(false);
        return;
      }
      if (!data.session) {
        setInfo("Te enviamos un correo para confirmar tu cuenta.");
        setBusy(false);
        return;
      }
      await afterSignedIn();
    }
  }

  return (
    <section className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-6 py-16">
      <h1 className="mb-1 text-2xl font-semibold">{mode === "signin" ? "Iniciá sesión" : "Creá tu cuenta"}</h1>
      <p className="mb-8 text-sm text-muted">
        {fromVscode ? "Iniciá sesión para volver a la extensión de VS Code." : "Misma cuenta que usás en la extensión de VS Code."}
      </p>

      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={() => oauth("github")}
          disabled={busy}
          className="rounded-lg border border-border-strong px-4 py-2.5 text-left text-sm font-medium hover:bg-surface-2 transition-colors disabled:opacity-60"
        >
          Continuar con GitHub
        </button>
        <button
          type="button"
          onClick={() => oauth("google")}
          disabled={busy}
          className="rounded-lg border border-border-strong px-4 py-2.5 text-left text-sm font-medium hover:bg-surface-2 transition-colors disabled:opacity-60"
        >
          Continuar con Google
        </button>
      </div>

      <div className="my-6 flex items-center gap-3 text-xs text-faint">
        <span className="h-px flex-1 bg-border" />
        o con tu correo
        <span className="h-px flex-1 bg-border" />
      </div>

      <form onSubmit={submit} className="flex flex-col gap-3">
        <label className="flex flex-col gap-1 text-sm">
          Correo
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="vos@ejemplo.com"
            className="rounded-lg border border-border-strong bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Contraseña
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="rounded-lg border border-border-strong bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </label>

        {error && <p className="text-sm text-red-500">{error}</p>}
        {info && <p className="text-sm text-good">{info}</p>}

        <button
          type="submit"
          disabled={busy}
          className="mt-1 rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-accent-ink hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {busy ? "Un momento…" : mode === "signin" ? "Iniciar sesión" : "Crear cuenta"}
        </button>
      </form>

      <button
        type="button"
        onClick={() => {
          setMode((m) => (m === "signin" ? "signup" : "signin"));
          setError(null);
          setInfo(null);
        }}
        className="mt-5 text-sm text-muted hover:text-foreground transition-colors"
      >
        {mode === "signin" ? "¿No tenés cuenta? Creá una" : "¿Ya tenés cuenta? Iniciá sesión"}
      </button>
    </section>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}

function translateError(message: string): string {
  if (message.includes("Invalid login credentials")) return "Correo o contraseña incorrectos.";
  if (message.includes("User already registered")) return "Ya existe una cuenta con ese correo.";
  if (message.includes("Password should be at least")) return "La contraseña es demasiado corta.";
  return message;
}
