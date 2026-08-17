"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { VSCODE_AUTH_CALLBACK } from "@/lib/vscodeAuthCallback";

function VscodeDone() {
  const params = useSearchParams();
  const handoff = params.get("handoff");
  const [autoTried, setAutoTried] = useState(false);
  const vscodeUrl = handoff ? `${VSCODE_AUTH_CALLBACK}?handoff=${handoff}` : null;

  useEffect(() => {
    // Algunos navegadores permiten disparar el esquema vscode:// sin un
    // click directo del usuario, pero Chrome/Edge suelen bloquearlo en
    // silencio si no viene de un gesto — por eso este intento es solo
    // "mejor esfuerzo" y el botón de abajo es el camino confiable.
    if (vscodeUrl) {
      window.location.href = vscodeUrl;
      setAutoTried(true);
    }
  }, [vscodeUrl]);

  if (!handoff) {
    return (
      <section className="mx-auto flex w-full max-w-sm flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="mb-2 text-xl font-semibold">Falta el código de acceso</h1>
        <p className="text-sm text-muted">Volvé a intentar el login desde la extensión.</p>
      </section>
    );
  }

  return (
    <section className="mx-auto flex w-full max-w-sm flex-1 flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="mb-2 text-xl font-semibold">Iniciaste sesión</h1>
      <p className="mb-6 text-sm text-muted">
        {autoTried
          ? "Si VS Code no se abrió solo, tocá el botón para completarlo:"
          : "Tocá el botón para volver a VS Code:"}
      </p>
      <a
        href={vscodeUrl ?? undefined}
        className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink hover:opacity-90 transition-opacity"
      >
        Abrir Scorpk en VS Code
      </a>
      <p className="mt-6 text-xs text-faint">
        Si no pasa nada, comprobá que tengas la extensión Scorpk instalada.
      </p>
    </section>
  );
}

export default function VscodeDonePage() {
  return (
    <Suspense>
      <VscodeDone />
    </Suspense>
  );
}
