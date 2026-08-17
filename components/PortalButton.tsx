"use client";

import { useState } from "react";

export function PortalButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function openPortal() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/stripe/portal", { method: "POST" });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "No se pudo abrir el portal.");
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
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={openPortal}
        disabled={loading}
        className="rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium hover:bg-surface-2 transition-colors disabled:opacity-60"
      >
        {loading ? "Un momento…" : "Administrar suscripción"}
      </button>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
