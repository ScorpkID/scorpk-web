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
];

export default function Home() {
  return (
    <>
      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pt-20 pb-16 sm:pt-28">
        <p className="font-mono text-[13px] tracking-wide text-accent uppercase">Agentes de IA para programar</p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
          Un agente de IA que de verdad trabaja en tu proyecto.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          Scorpk hace lo que vos harías: lee tu código, lo edita, corre comandos, y te muestra cada
          cambio antes de aplicarlo. Con el proveedor de IA que ya usás, o sin pegar ninguna key para
          arrancar — en VS Code o directo en tu terminal.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=ScorpkDev.scorpk-agent"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink hover:opacity-90 transition-opacity"
          >
            Instalar en VS Code
          </a>
          <Link
            href="/cli"
            className="rounded-full border border-border-strong px-6 py-3 text-sm font-medium hover:bg-surface-2 transition-colors"
          >
            Usar desde la terminal
          </Link>
        </div>
        <p className="pt-1 font-mono text-xs text-faint">
          Disponible en{" "}
          <a href="https://marketplace.visualstudio.com/items?itemName=ScorpkDev.scorpk-agent" className="text-muted hover:text-foreground transition-colors">
            VS Code
          </a>{" "}
          y en{" "}
          <Link href="/cli" className="text-muted hover:text-foreground transition-colors">
            la terminal
          </Link>
          , misma cuenta y mismo plan.
        </p>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
          <h2 className="mb-8 font-mono text-[13px] uppercase tracking-wide text-muted">Dos productos, una cuenta</h2>
          <div className="grid gap-6 sm:grid-cols-2">
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
          CLI. Modo equipo y MCP son parte de Pro.
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
