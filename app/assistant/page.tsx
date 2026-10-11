import type { Metadata } from "next";
import Link from "next/link";
import androidLatest from "@/public/android/latest.json";
import windowsLatest from "@/public/windows/latest.json";

export const metadata: Metadata = {
  title: "Scorpk Asistente para Windows y Android",
  description:
    "El asistente de IA de Scorpk para tu PC y tu celular: háblale con «Oye Scorpk», controla programas, música, televisión Samsung y servicios. Descarga el instalador oficial.",
};

const WINDOWS_FEATURES = [
  {
    title: "Atajo global y ventana flotante",
    body: "Pulsa Ctrl+Alt+Espacio desde cualquier juego o programa para abrir el asistente transparente sin interrumpir lo que haces.",
  },
  {
    title: "Control de TV Samsung (Tizen)",
    body: "Enciende la tele por Wake-on-LAN, cambia a HDMI, abre Netflix o YouTube, y ajusta el volumen directamente con tu voz.",
  },
  {
    title: "Voz sin conexión (Vosk)",
    body: "Detección offline de «Oye Scorpk» procesada completamente en tu equipo para máxima velocidad y total privacidad.",
  },
  {
    title: "Control total del PC",
    body: "Abre programas instalados, ajusta el volumen maestro, controla Spotify y reproducción multimedia, y programa temporizadores.",
  },
];

const ANDROID_FEATURES = [
  {
    title: "«Oye Scorpk», desde cualquier pantalla",
    body: "Una tarjeta flotante con luz en los bordes aparece sobre lo que estés haciendo: háblale, escríbele o muéstrale la pantalla.",
  },
  {
    title: "Conectores reales",
    body: "Spotify, Google Calendar, Drive, Gmail, GitHub, WhatsApp, Maps y YouTube. Conéctalos una vez y pide lo que necesites.",
  },
  {
    title: "Controla tu teléfono",
    body: "Abre apps, ajusta el volumen, activa la linterna, programa alarmas y lee la pantalla con el servicio de accesibilidad.",
  },
  {
    title: "IA multimodal con modelos Pro",
    body: "Conversa con lenguaje natural y cambia entre modelos de IA desde el chat, con visión para fotos y capturas.",
  },
];

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

export default function AssistantPage() {
  return (
    <>
      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pt-20 pb-12 sm:pt-28">
        <p className="font-mono text-[13px] tracking-wide text-accent uppercase">Scorpk Asistente · Windows & Android</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
          Tu asistente de IA, en tu PC y en tu celular.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          Háblale con <span className="text-foreground">«Oye Scorpk»</span> para abrir programas, controlar tu música,
          manejar tu televisor Samsung, revisar tu agenda o consultar con los mejores modelos de IA.
        </p>

        {/* Botones de Descarga */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href={windowsLatest.downloadUrl}
            className="flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink hover:opacity-90 transition-opacity shadow-lg shadow-accent/20"
          >
            <span>🪟</span>
            <span>Descargar para Windows · v{windowsLatest.version} ({formatSize(windowsLatest.sizeBytes)})</span>
          </a>

          <a
            href={androidLatest.apkUrl}
            className="flex items-center gap-2.5 rounded-full border border-border-strong bg-surface px-6 py-3.5 text-sm font-semibold hover:bg-surface-2 transition-colors"
          >
            <span>📱</span>
            <span>Descargar APK Android · v{androidLatest.versionName} ({formatSize(androidLatest.sizeBytes)})</span>
          </a>

          <Link
            href="/pricing"
            className="rounded-full border border-border px-5 py-3 text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            Ver planes
          </Link>
        </div>

        <p className="pt-1 font-mono text-xs text-faint">
          Gratis: comandos locales, atajos, control de TV Samsung y conectores. Pro: conversación fluida con IA multimodal. Actualizaciones automáticas incluidas.
        </p>
      </section>

      {/* Características Windows */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 pt-12 pb-4">
          <p className="font-mono text-xs text-accent uppercase tracking-wider">Scorpk para Windows</p>
          <h2 className="text-2xl font-semibold tracking-tight mt-1">Productividad y control desde tu escritorio</h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-px overflow-hidden bg-border sm:grid-cols-2 mt-4">
          {WINDOWS_FEATURES.map((f) => (
            <div key={f.title} className="bg-surface px-6 py-8 sm:px-10">
              <h3 className="mb-2 font-mono text-[15px] font-semibold">{f.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Características Android */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 pt-12 pb-4">
          <p className="font-mono text-xs text-accent uppercase tracking-wider">Scorpk para Android</p>
          <h2 className="text-2xl font-semibold tracking-tight mt-1">El asistente siempre a tu lado</h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-px overflow-hidden bg-border sm:grid-cols-2 mt-4">
          {ANDROID_FEATURES.map((f) => (
            <div key={f.title} className="bg-surface px-6 py-8 sm:px-10">
              <h3 className="mb-2 font-mono text-[15px] font-semibold">{f.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ficha técnica de versiones */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="mb-6 font-mono text-[13px] uppercase tracking-wide text-muted">Últimas versiones publicadas</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Tarjeta Windows */}
            <div className="rounded-xl border border-border bg-surface-2 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <span className="font-semibold flex items-center gap-2">🪟 Windows (x64)</span>
                  <span className="font-mono text-xs text-accent">v{windowsLatest.version}</span>
                </div>
                <dl className="mt-4 space-y-2 text-xs">
                  <div className="flex justify-between text-muted">
                    <dt>Publicada:</dt>
                    <dd>{formatDate(windowsLatest.releasedAt)}</dd>
                  </div>
                  <div className="flex justify-between text-muted">
                    <dt>Tamaño:</dt>
                    <dd>{formatSize(windowsLatest.sizeBytes)}</dd>
                  </div>
                  <div className="pt-2 text-muted">
                    <dt className="mb-1 font-mono text-[10px]">SHA-256:</dt>
                    <dd className="font-mono text-[11px] break-all bg-background/50 p-2 rounded">{windowsLatest.sha256}</dd>
                  </div>
                </dl>
              </div>
              <a
                href={windowsLatest.downloadUrl}
                className="mt-6 block text-center rounded-lg bg-foreground text-background py-2 text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                Descargar instalador .exe
              </a>
            </div>

            {/* Tarjeta Android */}
            <div className="rounded-xl border border-border bg-surface-2 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <span className="font-semibold flex items-center gap-2">📱 Android (APK)</span>
                  <span className="font-mono text-xs text-accent">v{androidLatest.versionName}</span>
                </div>
                <dl className="mt-4 space-y-2 text-xs">
                  <div className="flex justify-between text-muted">
                    <dt>Publicada:</dt>
                    <dd>{formatDate(androidLatest.releasedAt)}</dd>
                  </div>
                  <div className="flex justify-between text-muted">
                    <dt>Tamaño:</dt>
                    <dd>{formatSize(androidLatest.sizeBytes)}</dd>
                  </div>
                  <div className="pt-2 text-muted">
                    <dt className="mb-1 font-mono text-[10px]">SHA-256:</dt>
                    <dd className="font-mono text-[11px] break-all bg-background/50 p-2 rounded">{androidLatest.sha256}</dd>
                  </div>
                </dl>
              </div>
              <a
                href={androidLatest.apkUrl}
                className="mt-6 block text-center rounded-lg bg-foreground text-background py-2 text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                Descargar APK
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <p className="text-sm text-faint">
          Al instalar y usar Scorpk Asistente aceptas los <Link href="/terms" className="text-muted underline underline-offset-4 hover:text-foreground">términos</Link> y la{" "}
          <Link href="/privacy" className="text-muted underline underline-offset-4 hover:text-foreground">política de privacidad</Link>.
        </p>
      </section>
    </>
  );
}
