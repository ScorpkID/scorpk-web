import Link from "next/link";

const CAPABILITIES = [
  {
    title: "Elegí tu proveedor",
    body: "OpenAI, Anthropic, Groq, Cerebras, DeepSeek, OpenRouter, Gemini, o iniciá sesión con Hugging Face o tu Copilot — sin pegar ninguna key para empezar.",
  },
  {
    title: "Acceso real al proyecto",
    body: "Lee, escribe y edita archivos puntuales, busca en el repo, corre comandos y git — todo con vista previa antes de aplicar nada.",
  },
  {
    title: "Modo equipo (Pro)",
    body: "Varios agentes especializados (planner, coder, reviewer, tester) trabajando en cadena sobre la misma tarea, o hablale directo a uno puntual.",
  },
  {
    title: "Vos decidís cuánto control cede",
    body: "Aprobás cada cambio uno por uno o dejás que corra automático — y revertís cualquier mensaje a como estaban los archivos antes, con un click.",
  },
  {
    title: "Asistente de voz en Android",
    body: "Decí «Oye Scorpk» desde cualquier pantalla: abre apps, ajusta el volumen, programa alarmas, lee lo que hay en pantalla y te responde con voz natural.",
  },
  {
    title: "Conectado a tus servicios",
    body: "Spotify, Google Calendar, Drive, Gmail, GitHub, WhatsApp, Maps y YouTube: conectalos una vez y pedí lo que necesites por voz o por chat.",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pt-20 pb-16 sm:pt-28">
        <p className="font-mono text-[13px] tracking-wide text-accent uppercase">Agentes de IA</p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
          IA que de verdad hace cosas: en tu código y en tu celular.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          Scorpk lee y edita tu proyecto en VS Code o en la terminal, mostrándote cada cambio antes de aplicarlo. Y en
          Android es un asistente de voz que abre apps, agenda, revisa tu correo y controla tu música. Con el
          proveedor de IA que ya usás, o sin pegar ninguna key para arrancar.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=ScorpkDev.scorpk-agent"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink hover:opacity-90 transition-opacity"
          >
            Instalar en VS Code
          </a>
          <Link
            href="/assistant"
            className="rounded-full border border-border-strong px-6 py-3 text-sm font-medium hover:bg-surface-2 transition-colors"
          >
            Descargar para Android
          </Link>
        </div>
        <p className="pt-1 font-mono text-xs text-faint">
          Disponible en{" "}
          <a href="https://marketplace.visualstudio.com/items?itemName=ScorpkDev.scorpk-agent" className="text-muted hover:text-foreground transition-colors">
            VS Code
          </a>
          , en{" "}
          <Link href="/cli" className="text-muted hover:text-foreground transition-colors">
            la terminal
          </Link>{" "}
          y en{" "}
          <Link href="/assistant" className="text-muted hover:text-foreground transition-colors">
            Android
          </Link>
          , misma cuenta y mismo plan.
        </p>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
          <h2 className="mb-8 font-mono text-[13px] uppercase tracking-wide text-muted">Tres productos, una cuenta</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col rounded-xl border border-border p-6">
              <h3 className="mb-1 text-lg font-semibold">Extensión de VS Code</h3>
              <p className="mb-6 flex-1 text-[15px] leading-relaxed text-muted">
                Vive en tu editor: panel de chat, vista previa en vivo de cada cambio, checkpoints
                para revertir, y Modo equipo para tareas grandes.
              </p>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=ScorpkDev.scorpk-agent"
                className="text-sm font-medium text-accent hover:opacity-80 transition-opacity"
              >
                Instalar en VS Code →
              </a>
            </div>
            <div className="flex flex-col rounded-xl border border-border p-6">
              <h3 className="mb-1 text-lg font-semibold">CLI</h3>
              <p className="mb-6 flex-1 text-[15px] leading-relaxed text-muted">
                Mismo agente, sin editor de por medio: <code className="font-mono text-foreground">scorpk chat</code> para
                una sesión interactiva o <code className="font-mono text-foreground">scorpk run</code> para una tarea puntual,
                donde ya estés trabajando.
              </p>
              <Link href="/cli" className="text-sm font-medium text-accent hover:opacity-80 transition-opacity">
                Ver el CLI →
              </Link>
            </div>
            <div className="flex flex-col rounded-xl border border-border p-6">
              <h3 className="mb-1 text-lg font-semibold">Scorpk Asistente</h3>
              <p className="mb-6 flex-1 text-[15px] leading-relaxed text-muted">
                Tu asistente de voz en Android: «Oye Scorpk» desde cualquier pantalla, conectado a tu música,
                agenda, correo y más. La app es gratis; la IA es parte de Pro.
              </p>
              <Link href="/assistant" className="text-sm font-medium text-accent hover:opacity-80 transition-opacity">
                Descargar para Android →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-5xl gap-px overflow-hidden bg-border sm:grid-cols-2">
          {CAPABILITIES.map((f) => (
            <div key={f.title} className="bg-surface px-6 py-10 sm:px-10">
              <h2 className="mb-2 font-mono text-[15px] font-semibold">{f.title}</h2>
              <p className="text-[15px] leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="mb-3 text-2xl font-semibold text-balance">Empezá gratis, sin tarjeta.</h2>
        <p className="mx-auto mb-8 max-w-md text-muted">
          El chat individual con tu propio proveedor es gratis para siempre, en la extensión y en el
          CLI, y la app Android con comandos por voz también. Modo equipo, MCP y la IA del asistente son parte de Pro.
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
