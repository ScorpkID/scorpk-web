import type { Metadata } from "next";
import { SubscribeButton } from "@/components/SubscribeButton";

export const metadata: Metadata = { title: "Precios" };

const ROWS: [string, boolean | string, boolean | string][] = [
  ["Chat con un agente, cualquier proveedor propio (BYOK)", true, true],
  ["Login sin key (Hugging Face, Copilot)", true, true],
  ["Archivos, búsqueda, git, terminal, diagnósticos", true, true],
  ["Historial y checkpoints locales", true, true],
  ["Modo equipo (varios agentes en pipeline)", false, true],
  ["Servidores MCP", false, true],
  ["Agentes y comandos rápidos personalizados", "Hasta 3", "Ilimitados"],
  ["Sincronización entre dispositivos", false, true],
  ["Acceso anticipado a herramientas nuevas", false, true],
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <span className="text-good font-medium">✓</span>;
  if (value === false) return <span className="text-faint">—</span>;
  return <span>{value}</span>;
}

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-3xl font-semibold text-balance sm:text-4xl">Precios</h1>
        <p className="mx-auto max-w-md text-muted">
          Todo lo que no le cuesta nada a Scorpk queda gratis para siempre. Lo Pro es lo que
          organiza un flujo de trabajo serio.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[520px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-2">
              <th className="px-5 py-4 text-left font-normal text-muted">&nbsp;</th>
              <th className="px-5 py-4 text-left font-mono text-[15px] font-semibold">Free</th>
              <th className="px-5 py-4 text-left font-mono text-[15px] font-semibold text-accent">Pro</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(([label, free, pro]) => (
              <tr key={label} className="border-b border-border last:border-none">
                <th scope="row" className="px-5 py-3.5 text-left font-normal text-muted">
                  {label}
                </th>
                <td className="px-5 py-3.5">
                  <Cell value={free} />
                </td>
                <td className="px-5 py-3.5">
                  <Cell value={pro} />
                </td>
              </tr>
            ))}
            <tr className="bg-surface-2">
              <th scope="row" className="px-5 py-5 text-left font-mono text-[13px] font-semibold uppercase tracking-wide text-muted">
                Precio
              </th>
              <td className="px-5 py-5 font-mono text-lg font-semibold">$0</td>
              <td className="px-5 py-5 font-mono text-lg font-semibold text-accent">$9/mes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mx-auto mt-10 max-w-xs">
        <SubscribeButton />
      </div>
    </section>
  );
}
