import Link from "next/link";

const FEATURES = [
  {
    title: "Elegí tu proveedor",
    body: "OpenAI, Anthropic, Groq, Cerebras, DeepSeek, OpenRouter, Gemini, o iniciá sesión con Hugging Face o tu Copilot — sin pegar ninguna key para empezar.",
  },
  {
    title: "Acceso real al editor",
    body: "Lee, escribe y edita archivos puntuales, busca en el repo, corre comandos, y va a definición de un símbolo — todo con vista previa antes de aplicar nada.",
  },
  {
    title: "Modo equipo",
    body: "Varios agentes especializados (planner, coder, reviewer, tester) trabajando en cadena sobre la misma tarea, o hablale directo a uno puntual.",
  },
  {
    title: "Vos decidís cuánto control cede",
    body: "Manual, auto-editar, plan, o automático — y revertí cualquier mensaje a como estaban los archivos antes, con un click.",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pt-20 pb-16 sm:pt-28">
        <p className="font-mono text-[13px] tracking-wide text-accent uppercase">Extensión de VS Code</p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
          Un agente de IA que de verdad trabaja en tu proyecto.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          Scorpk vive en VS Code y hace lo que vos harías: lee tu código, lo edita, corre comandos,
          y te muestra cada cambio antes de aplicarlo. Con el proveedor de IA que ya usás, o sin
          pegar ninguna key para arrancar.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=ScorpkDev.scorpk-agent"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink hover:opacity-90 transition-opacity"
          >
            Instalar en VS Code
          </a>
          <Link
            href="/pricing"
            className="rounded-full border border-border-strong px-6 py-3 text-sm font-medium hover:bg-surface-2 transition-colors"
          >
            Ver planes
          </Link>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-5xl gap-px overflow-hidden rounded-none bg-border px-0 py-0 sm:grid-cols-2">
          {FEATURES.map((f) => (
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
          El chat individual con tu propio proveedor es gratis para siempre. Modo equipo y MCP son parte de Pro.
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
