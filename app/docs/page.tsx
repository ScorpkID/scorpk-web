import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentación oficial · Scorpk",
  description:
    "Guías de instalación, referencia de comandos, arquitectura de agentes y configuración del ecosistema Scorpk.",
};

const SECTIONS = [
  {
    title: "Primeros Pasos",
    items: [
      {
        name: "Instalación Rápida",
        desc: "Descarga los instaladores para Windows y Android, o añade Scorpk a tu entorno de desarrollo.",
        href: "/downloads",
      },
      {
        name: "Planes y Suscripción",
        desc: "Comandos locales gratuitos de por vida. Funciones Pro con modelos avanzados de IA.",
        href: "/pricing",
      },
    ],
  },
  {
    title: "Productos y Plataformas",
    items: [
      {
        name: "Scorpk Asistente (Windows & Android)",
        desc: "Atajo global en PC, voz continua 'Oye Scorpk', control de televisores Samsung y automatización.",
        href: "/assistant",
      },
      {
        name: "Extensión para Visual Studio Code",
        desc: "Panel de chat interactivo, vista previa en vivo de cambios de código y modo equipo con múltiples agentes.",
        href: "https://marketplace.visualstudio.com/items?itemName=ScorpkDev.scorpk-agent",
        external: true,
      },
      {
        name: "Herramienta CLI de Terminal",
        desc: "Ejecuta tareas y agentes de IA directamente en tu terminal con 'scorpk run' y 'scorpk chat'.",
        href: "/cli",
      },
    ],
  },
  {
    title: "Protocolos e Integraciones",
    items: [
      {
        name: "Model Context Protocol (MCP)",
        desc: "Conecta servidores MCP locales (Filesystem, GitHub, SQLite) para expandir las herramientas del asistente.",
        href: "/downloads",
      },
      {
        name: "Control de Televisores Samsung",
        desc: "Protocolo nativo WebSocket y DIAL en red local para control multimedia y reproducción directa en TV.",
        href: "/assistant",
      },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="max-w-2xl">
        <p className="font-mono text-xs tracking-wider text-accent uppercase">Documentación y Guías</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Todo lo que necesitas para dominar Scorpk.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Aprende a configurar tu entorno, conectar herramientas externas y automatizar tareas en tu equipo, editor y celular.
        </p>
      </div>

      <div className="mt-14 space-y-12">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted border-b border-border pb-3">
              {section.title}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-5 hover:border-accent/60 transition-colors"
                >
                  <div>
                    <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{item.desc}</p>
                  </div>
                  <div className="mt-4 pt-2">
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-accent hover:underline"
                      >
                        Abrir documentación externa →
                      </a>
                    ) : (
                      <Link href={item.href} className="text-xs font-medium text-accent hover:underline">
                        Ver guía detallada →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
