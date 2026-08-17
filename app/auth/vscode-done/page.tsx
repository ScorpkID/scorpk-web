"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { VSCODE_AUTH_CALLBACK } from "@/lib/vscodeHandoff";

function VscodeDone() {
  const params = useSearchParams();
  const handoff = params.get("handoff");

  useEffect(() => {
    if (handoff) {
      window.location.href = `${VSCODE_AUTH_CALLBACK}?handoff=${handoff}`;
    }
  }, [handoff]);

  return (
    <section className="mx-auto flex w-full max-w-sm flex-1 flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="mb-2 text-xl font-semibold">Iniciaste sesión</h1>
      <p className="text-sm text-muted">
        Ya podés volver a VS Code. Si no pasó nada automáticamente, comprobá que tengas Scorpk
        instalado y volvé a intentar el login desde la extensión.
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
