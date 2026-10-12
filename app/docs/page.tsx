import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentación oficial del ecosistema · Scorpk",
  description:
    "Documentación técnica de todo el ecosistema de Scorpk Org: Asistente para Windows, Asistente Android, Extensión para VS Code, CLI de terminal y Plataforma Web.",
};

interface ServiceDoc {
  name: string;
  repo: string;
  description: string;
  category: string;
  features: string[];
  links: { label: string; href: string; external?: boolean }[];
}

const SERVICES: ServiceDoc[] = [
  {
    name: "Scorpk para Windows",
    repo: "scorpk-windows",
    category: "Aplicación de Escritorio",
    description:
      "Aplicación nativa construida sobre Tauri y Rust con ventana flotante transparente (Ctrl+Alt+Espacio), control multimedia del sistema, cliente y servidor MCP bidireccional y control de red local.",
    features: [
      "Atajo global y superposición sobre cualquier juego o programa",
      "Cliente MCP con soporte nativo de canalización para herramientas externas (Filesystem, SQLite, etc.)",
      "Servidor MCP local (HTTP/SSE y stdio) para alimentar a Claude, Cursor y Gemini Spark",
      "Control de televisores Samsung Tizen (Wake-on-LAN, volumen, apps y YouTube por DIAL)",
      "Chat interactivo con soporte de Markdown, tablas y resaltado de bloques de código",
      "Actualizador nativo en la app con verificación de integridad SHA-256",
    ],
    links: [
      { label: "Descargar instalador", href: "/downloads" },
      { label: "Repositorio en GitHub", href: "https://github.com/ScorpkID/scorpk-windows", external: true },
    ],
  },
  {
    name: "Scorpk Asistente para Android",
    repo: "scorpk-assistant",
    category: "Aplicación Móvil",
    description:
      "Asistente nativo para Android en Kotlin con detección continua de voz («Oye Scorpk»), tarjeta flotante con efecto edge-glow, visión multimodal y automatización por accesibilidad.",
    features: [
      "Wake-word offline en segundo plano para invocar al asistente sin tocar la pantalla",
      "Tarjeta flotante interactiva superpuesta sobre cualquier aplicación activa",
      "Conectores de servicios reales: Spotify, Google Calendar, Google Drive, Gmail, WhatsApp y GitHub",
      "Automatización con AccessibilityService: lectura de pantalla, pulsación de nodos y gestos",
      "IA multimodal: análisis de capturas de pantalla y fotos tomadas con la cámara",
      "Actualizador in-app directo con chequeo de APKs firmadas",
    ],
    links: [
      { label: "Descargar APK oficial", href: "/downloads" },
      { label: "Detalles del Asistente", href: "/assistant" },
      { label: "Repositorio en GitHub", href: "https://github.com/ScorpkID/scorpk-assistant", external: true },
    ],
  },
  {
    name: "Scorpk Extensión para VS Code",
    repo: "scorpk",
    category: "Entorno de Desarrollo",
    description:
      "Agente de codificación de ciclo completo integrado directamente en Visual Studio Code. Analiza repositorios, propone ediciones con previsualización diff en vivo y ejecuta flujos de equipo.",
    features: [
      "Integración directa en el editor sin interrumpir el flujo de trabajo",
      "Vista previa en vivo de cada cambio con aprobación granular por archivo",
      "Modo Equipo: colaboración entre agentes especializados (Planner, Coder, Reviewer, Tester)",
      "Sistema de puntos de restauración (checkpoints) para revertir cambios al instante",
      "Soporte para múltiples proveedores de IA (OpenAI, Anthropic, Groq, Cerebras, DeepSeek, Gemini)",
    ],
    links: [
      { label: "Instalar en VS Code Marketplace", href: "https://marketplace.visualstudio.com/items?itemName=ScorpkDev.scorpk-agent", external: true },
      { label: "Repositorio en GitHub", href: "https://github.com/ScorpkID/scorpk", external: true },
    ],
  },
  {
    name: "Scorpk CLI",
    repo: "scorpk-cli",
    category: "Herramienta de Terminal",
    description:
      "Línea de comandos universal para ejecutar agentes de IA directamente en cualquier terminal de desarrollo, servidores CI/CD o entornos sin interfaz gráfica.",
    features: [
      "Comando interactivo «scorpk chat» para sesiones continuas de programación",
      "Comando autónomo «scorpk run» para resolución de tareas específicas en lote",
      "Inspección del árbol del proyecto, búsqueda de símbolos y ejecución de tests",
      "Misma cuenta y mismos modelos sincronizados con la extensión y la app de escritorio",
    ],
    links: [
      { label: "Guía de instalación CLI", href: "/cli" },
      { label: "Repositorio en GitHub", href: "https://github.com/ScorpkID/scorpk-cli", external: true },
    ],
  },
  {
    name: "Scorpk Web & Plataforma Cloud",
    repo: "scorpk-web",
    category: "Servicios Cloud y Web",
    description:
      "Portal central de cuentas, autenticación con Supabase, pasarela de suscripciones Stripe, proxy de inferencia de IA y distribución de actualizaciones.",
    features: [
      "Gestión de cuentas y sincronización de sesiones entre todos los productos",
      "Pasarela de pago y portal de facturación Stripe Customer Portal",
      "Proxy seguro de IA en scorpk.tech/api/ai/chat con protección de rate-limits",
      "Distribución de binarios oficiales y manifiestos de versiones en tiempo real (/windows/latest.json y /android/latest.json)",
      "Centro de descargas verificado con sumas de verificación SHA-256",
    ],
    links: [
      { label: "Ver planes y precios", href: "/pricing" },
      { label: "Repositorio en GitHub", href: "https://github.com/ScorpkID/scorpk-web", external: true },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      {/* Cabecera */}
      <div className="max-w-3xl">
        <p className="font-mono text-xs tracking-wider text-accent uppercase">Documentación del Ecosistema Scorpk</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Arquitectura, herramientas y servicios.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Scorpk es una suite unificada de herramientas y agentes de inteligencia artificial diseñada para acompañarte en tu editor de código, tu terminal, tu equipo de escritorio y tu dispositivo móvil.
        </p>
      </div>

      {/* Servicios del Ecosistema */}
      <div className="mt-14 space-y-10">
        {SERVICES.map((s) => (
          <div key={s.repo} className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/80 pb-4">
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-wider">{s.category}</span>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight">{s.name}</h2>
              </div>
              <a
                href={`https://github.com/ScorpkID/${s.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted hover:text-foreground transition-colors"
              >
                ScorpkID/{s.repo} ↗
              </a>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">{s.description}</p>

            <div className="mt-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted">Capacidades técnicas destacadas:</h3>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2 text-xs text-foreground/90">
                {s.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t border-border/40">
              {s.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="rounded-lg border border-border bg-surface-2 px-3.5 py-1.5 text-xs font-medium text-foreground hover:border-accent/60 hover:text-accent transition-colors"
                >
                  {link.label} {link.external ? "↗" : "→"}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
