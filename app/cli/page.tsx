import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = { title: "CLI" };

const COMMANDS: [string, string][] = [
  ["scorpk config set-key <proveedor> <key>", "guardar tu API key, elegís el modelo de una lista real"],
  ["scorpk run \"<tarea>\"", "correr una tarea puntual sobre la carpeta actual"],
  ["scorpk chat", "sesión interactiva, con comandos / adentro (/model, /provider, /mode...)"],
  ["scorpk models [proveedor]", "ver los modelos disponibles de un proveedor ya configurado"],
  ["scorpk auth login", "conectar tu cuenta de scorpk.tech (misma que la extensión)"],
];

function TerminalLine({ children, prompt = true }: { children: ReactNode; prompt?: boolean }) {
  return (
    <div className="flex gap-2">
      {prompt && <span className="text-faint">$</span>}
      <span className={prompt ? "" : "text-faint"}>{children}</span>
    </div>
  );
}

export default function CliPage() {
  return (
    <>
      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pt-20 pb-12 sm:pt-28">
        <p className="font-mono text-[13px] tracking-wide text-accent uppercase">CLI</p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
          Scorpk, directo en tu terminal.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          El mismo agente que la extensión — mismas tools de archivos, git y terminal, mismos
          proveedores — sin abrir un editor. Una sesión de chat con banner de sesión, selección de
          modelo en vivo, y comandos con <code className="font-mono text-foreground">/</code> para
          moverte rápido.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/pricing"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink hover:opacity-90 transition-opacity"
          >
            Ver planes
          </Link>
          <a
            href="https://github.com/ScorpkID/scorpk-cli"
            className="rounded-full border border-border-strong px-6 py-3 text-sm font-medium hover:bg-surface-2 transition-colors"
          >
            Ver el código
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="overflow-x-auto rounded-xl border border-border-strong bg-[#0a0a0c] p-5 font-mono text-[13px] leading-relaxed text-[#f5f5f6] shadow-sm">
          <TerminalLine>npm install -g scorpk</TerminalLine>
          <TerminalLine>scorpk config set-key anthropic sk-ant-...</TerminalLine>
          <TerminalLine prompt={false}>✓ Anthropic (Claude) configurado con el modelo claude-sonnet-4-5.</TerminalLine>
          <TerminalLine>scorpk chat</TerminalLine>
          <TerminalLine prompt={false}>Scorpk — Anthropic (Claude) (claude-sonnet-4-5).</TerminalLine>
          <TerminalLine prompt={false}>{"> agregá un endpoint /health que devuelva 200"}</TerminalLine>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="mb-6 font-mono text-[13px] uppercase tracking-wide text-muted">Comandos principales</h2>
          <div className="flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border">
            {COMMANDS.map(([cmd, desc]) => (
              <div key={cmd} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:gap-6">
                <code className="w-full shrink-0 font-mono text-[13px] text-foreground sm:w-[340px]">{cmd}</code>
                <span className="text-sm text-muted">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="mb-2 text-sm text-faint">Requiere Node.js 22 o más nuevo.</p>
        <h2 className="mb-3 text-2xl font-semibold text-balance">Chat gratis para siempre, con tu propia key.</h2>
        <p className="mx-auto mb-8 max-w-md text-muted">
          Modo equipo y servidores MCP en el CLI están en camino, gateados por el mismo plan Pro que
          ya usa la extensión.
        </p>
        <Link
          href="/pricing"
          className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink hover:opacity-90 transition-opacity"
        >
          Ver precios
        </Link>
      </section>
    </>
  );
}
