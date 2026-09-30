import type { Metadata } from "next";
import Link from "next/link";
import latest from "@/public/android/latest.json";

export const metadata: Metadata = {
  title: "Scorpk Asistente para Android",
  description:
    "El asistente de IA de Scorpk para tu celular: háblale con «Oye Scorpk», controla tu música, agenda, correo y apps. Descarga el APK oficial.",
};

const FEATURES = [
  {
    title: "«Oye Scorpk», desde cualquier pantalla",
    body: "Una tarjeta flotante con luz en los bordes aparece sobre lo que estés haciendo: hablale, escribile, o mostrale la pantalla o la cámara. La detección de la frase ocurre en tu teléfono.",
  },
  {
    title: "Conectores reales",
    body: "Spotify, Google Calendar, Drive, Gmail, GitHub, WhatsApp, Maps y YouTube. Conectalos una vez y pedí cosas como «¿qué tengo mañana?» o «poné algo de lo-fi».",
  },
  {
    title: "Controla tu teléfono",
    body: "Abre apps, ajusta el volumen, activa la linterna, programa alarmas, lee lo que hay en pantalla y pulsa botones por vos, con el servicio de accesibilidad que vos activás.",
  },
  {
    title: "Voz natural",
    body: "Responde en español con la mejor voz disponible en tu dispositivo, sin leer símbolos ni enlaces en voz alta.",
  },
  {
    title: "IA con modelos a elegir (Pro)",
    body: "Con Pro, hablale con lenguaje natural y cambiá entre modelos de IA desde el chat, con visión para analizar capturas de pantalla, fotos y archivos.",
  },
  {
    title: "Se actualiza sola",
    body: "Cuando hay una versión nueva, la app te avisa y la descarga e instala sin salir de ella ni pasar por el navegador.",
  },
];

const STEPS = [
  "Descargá el APK con el botón de arriba.",
  "Abrilo. Si Android pregunta, permití instalar apps desde esta fuente (el navegador o el gestor de archivos).",
  "Iniciá sesión con tu cuenta de Scorpk, la misma de la extensión y el CLI. Con Pro se activa la IA.",
  "En Configuración activá «Oye Scorpk» y conectá los servicios que quieras.",
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
        <p className="font-mono text-[13px] tracking-wide text-accent uppercase">Scorpk Asistente · Android</p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
          Tu asistente de IA, en tu celular.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          Hablale con <span className="text-foreground">«Oye Scorpk»</span> y pedile que abra apps, ponga tu música,
          agende un evento, revise tu correo o te cuente qué hay en pantalla. La app es gratis; la IA es parte de Scorpk Pro.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={latest.apkUrl}
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink hover:opacity-90 transition-opacity"
          >
            Descargar APK · v{latest.versionName} · {formatSize(latest.sizeBytes)}
          </a>
          <Link
            href="/pricing"
            className="rounded-full border border-border-strong px-6 py-3 text-sm font-medium hover:bg-surface-2 transition-colors"
          >
            Ver planes
          </Link>
        </div>
        <p className="pt-1 font-mono text-xs text-faint">
          Gratis: comandos por voz y texto, «Oye Scorpk» y conectores. Pro: IA con lenguaje natural, chat con modelos y
          visión de pantalla y cámara. Requiere Android 8.1 o superior.
        </p>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-5xl gap-px overflow-hidden bg-border sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-surface px-6 py-10 sm:px-10">
              <h2 className="mb-2 font-mono text-[15px] font-semibold">{f.title}</h2>
              <p className="text-[15px] leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-6 font-mono text-[13px] uppercase tracking-wide text-muted">Cómo instalarla</h2>
        <ol className="flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border">
          {STEPS.map((step, index) => (
            <li key={step} className="flex gap-4 px-5 py-4 text-[15px] leading-relaxed">
              <span className="font-mono text-faint">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-muted">{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-faint">
          Si tu celular bloquea la instalación, casi siempre es Google Play Protect (o el Bloqueador automático en
          Samsung): desactívalo un momento en Ajustes → Seguridad, instalá la app y volvelo a activar. Las versiones
          siguientes se descargan e instalan desde la propia app.
        </p>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="mb-6 font-mono text-[13px] uppercase tracking-wide text-muted">Esta versión</h2>
          <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border text-sm sm:grid-cols-[180px_1fr]">
            <dt className="bg-surface px-5 py-3 text-muted">Versión</dt>
            <dd className="bg-surface px-5 py-3">
              {latest.versionName} ({latest.versionCode})
            </dd>
            <dt className="bg-surface px-5 py-3 text-muted">Publicada</dt>
            <dd className="bg-surface px-5 py-3">{formatDate(latest.releasedAt)}</dd>
            <dt className="bg-surface px-5 py-3 text-muted">Tamaño</dt>
            <dd className="bg-surface px-5 py-3">{formatSize(latest.sizeBytes)}</dd>
            <dt className="bg-surface px-5 py-3 text-muted">SHA-256</dt>
            <dd className="bg-surface px-5 py-3 font-mono text-[12px] break-all">{latest.sha256}</dd>
          </dl>
          <p className="mt-4 text-sm text-faint">
            El SHA-256 permite comprobar que el archivo descargado es el oficial y no fue alterado.
          </p>
          {latest.notes.length > 0 && (
            <>
              <h3 className="mt-10 mb-3 font-mono text-[13px] uppercase tracking-wide text-muted">Novedades</h3>
              <ul className="list-disc space-y-2 pl-5 text-[15px] text-muted marker:text-faint">
                {latest.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <p className="text-sm text-faint">
          Al instalar y usar Scorpk Asistente aceptás los <Link href="/terms" className="text-muted underline underline-offset-4 hover:text-foreground">términos</Link> y la{" "}
          <Link href="/privacy" className="text-muted underline underline-offset-4 hover:text-foreground">política de privacidad</Link>.
        </p>
      </section>
    </>
  );
}
