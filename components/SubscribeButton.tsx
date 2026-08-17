"use client";

import { useState } from "react";

export function SubscribeButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function subscribe() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/stripe/checkout", { method: "POST" });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "No se pudo iniciar el pago.");
        setLoading(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setError("No se pudo conectar con el servidor.");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={subscribe}
        disabled={loading}
        className="w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {loading ? "Un momento…" : "Empezar con Pro"}
      </button>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
