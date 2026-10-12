import type { Metadata } from "next";
import Link from "next/link";
import androidLatest from "@/public/android/latest.json";
import windowsLatest from "@/public/windows/latest.json";

export const metadata: Metadata = {
  title: "Descargas oficiales · Scorpk",
  description:
    "Descarga Scorpk para Windows, Android, Visual Studio Code y Terminal CLI. Instaladores y paquetes oficiales con verificación de integridad.",
};

function formatSize(bytes: number): string {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("es", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function DownloadsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      {/* Encabezado */}
      <div className="max-w-2xl">
        <p className="font-mono text-xs tracking-wider text-accent uppercase">Centro de descargas</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Instala Scorpk en tus dispositivos.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Obtén las versiones oficiales y verificadas para tu sistema operativo y entorno de desarrollo. Todas las descargas son directas y seguras.
        </p>
      </div>

      {/* Grid de Descargas */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {/* Windows */}
        <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider">Escritorio</span>
                <h2 className="mt-0.5 text-xl font-semibold">Scorpk para Windows</h2>
              </div>
              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full border border-border bg-surface-2 text-muted">
                v{windowsLatest.version}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              Asistente de IA con atajo global (Ctrl+Alt+Espacio), control multimedia, soporte completo para herramientas MCP, automatización del PC y control de TV Samsung.
            </p>

            <dl className="mt-6 space-y-2 rounded-xl border border-border/60 bg-surface-2/60 p-4 text-xs">
              <div className="flex justify-between text-muted">
                <dt>Plataforma:</dt>
                <dd className="font-medium text-foreground">Windows 10 / 11 (x64)</dd>
              </div>
              <div className="flex justify-between text-muted">
                <dt>Tamaño:</dt>
                <dd className="font-medium text-foreground">{formatSize(windowsLatest.sizeBytes)}</dd>
              </div>
              <div className="flex justify-between text-muted">
                <dt>Fecha de publicación:</dt>
                <dd className="font-medium text-foreground">{formatDate(windowsLatest.releasedAt)}</dd>
              </div>
              <div className="pt-2 border-t border-border/40">
                <dt className="mb-1 font-mono text-[10px] text-muted">SHA-256 Checksum:</dt>
                <dd className="font-mono text-[11px] break-all text-muted bg-background/60 p-2 rounded border border-border/40">
                  {windowsLatest.sha256}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-8">
            <a
              href={windowsLatest.downloadUrl}
              className="flex w-full items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-ink hover:opacity-90 transition-opacity"
            >
              Descargar instalador (.exe)
            </a>
          </div>
        </div>

        {/* Android */}
        <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider">Móvil</span>
                <h2 className="mt-0.5 text-xl font-semibold">Scorpk para Android</h2>
              </div>
              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full border border-border bg-surface-2 text-muted">
                v{androidLatest.versionName}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              Asistente de voz con «Oye Scorpk», tarjeta flotante interactiva sobre cualquier aplicación, conectores de servicios (Spotify, Calendar, Gmail) y automatización.
            </p>

            <dl className="mt-6 space-y-2 rounded-xl border border-border/60 bg-surface-2/60 p-4 text-xs">
              <div className="flex justify-between text-muted">
                <dt>Plataforma:</dt>
                <dd className="font-medium text-foreground">Android 8.0 o superior</dd>
              </div>
              <div className="flex justify-between text-muted">
                <dt>Tamaño:</dt>
                <dd className="font-medium text-foreground">{formatSize(androidLatest.sizeBytes)}</dd>
              </div>
              <div className="flex justify-between text-muted">
                <dt>Fecha de publicación:</dt>
                <dd className="font-medium text-foreground">{formatDate(androidLatest.releasedAt)}</dd>
              </div>
              <div className="pt-2 border-t border-border/40">
                <dt className="mb-1 font-mono text-[10px] text-muted">SHA-256 Checksum:</dt>
                <dd className="font-mono text-[11px] break-all text-muted bg-background/60 p-2 rounded border border-border/40">
                  {androidLatest.sha256}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-8">
            <a
              href={androidLatest.apkUrl}
              className="flex w-full items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-ink hover:opacity-90 transition-opacity"
            >
              Descargar APK oficial
            </a>
          </div>
        </div>

        {/* VS Code Extension */}
        <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider">Editor de código</span>
                <h2 className="mt-0.5 text-xl font-semibold">Extensión de VS Code</h2>
              </div>
              <span className="font-mono text-xs text-muted">Marketplace oficial</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              Agente integrado directamente en tu editor: panel de chat inteligente, vista previa en vivo de diffs, edición en múltiples archivos y modo equipo.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=ScorpkDev.scorpk-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-xl border border-border-strong bg-surface-2 px-5 py-3 text-sm font-semibold hover:border-accent hover:text-white transition-colors"
            >
              Instalar en Visual Studio Code
            </a>
          </div>
        </div>

        {/* CLI Terminal */}
        <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider">Terminal</span>
                <h2 className="mt-0.5 text-xl font-semibold">Scorpk CLI</h2>
              </div>
              <span className="font-mono text-xs text-muted">NPM Package</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              Ejecuta el agente desde cualquier terminal. Comandos interactivos de desarrollo y automatización de proyectos por línea de comandos.
            </p>

            <div className="mt-6 rounded-xl border border-border/60 bg-background/80 p-3 font-mono text-xs text-zinc-300">
              <code>npm install -g scorpk</code>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/cli"
              className="flex w-full items-center justify-center rounded-xl border border-border-strong bg-surface-2 px-5 py-3 text-sm font-semibold hover:border-accent hover:text-white transition-colors"
            >
              Ver guía y comandos CLI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
