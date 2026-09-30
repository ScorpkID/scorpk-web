import type { ReactNode } from "react";
import Link from "next/link";
import { CONTACT_EMAIL, LEGAL_UPDATED, SUPPORT_URL } from "@/lib/legal";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

/** Estilo del cuerpo: los documentos se escriben con <p>, <ul>, <h3>, <strong>, <a> y <code> planos. */
const PROSE = [
  "break-words",
  "[&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:text-muted [&_p+p]:mt-3 [&_ul+p]:mt-4 [&_dl+p]:mt-4",
  "[&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-[15px] [&_ul]:text-muted",
  "[&_li]:leading-relaxed [&_li::marker]:text-faint",
  "[&_strong]:font-medium [&_strong]:text-foreground",
  "[&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-border-strong hover:[&_a]:decoration-foreground",
  "[&_code]:font-mono [&_code]:text-[13px] [&_code]:text-foreground",
  "[&_h3]:mb-2 [&_h3]:mt-7 [&_h3]:font-mono [&_h3]:text-[13px] [&_h3]:uppercase [&_h3]:tracking-wide [&_h3]:text-foreground",
].join(" ");

export function LegalDocument({
  title,
  intro,
  sections,
  other,
}: {
  title: string;
  intro: ReactNode;
  sections: LegalSection[];
  /** Enlace al otro documento legal, al final de la página. */
  other: { href: string; label: string };
}) {
  return (
    <article className="mx-auto w-full max-w-3xl flex-1 px-6 pt-16 pb-20 sm:pt-24">
      <p className="font-mono text-[13px] uppercase tracking-wide text-accent">Legal</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h1>
      <p className="mt-3 font-mono text-xs text-faint">Última actualización: {LEGAL_UPDATED}</p>

      <div className={`mt-8 ${PROSE}`}>{intro}</div>

      <nav aria-label="Contenido" className="mt-10 rounded-xl border border-border bg-surface p-5">
        <p className="mb-3 font-mono text-[13px] uppercase tracking-wide text-muted">Contenido</p>
        <ol className="grid gap-x-8 gap-y-1.5 text-sm sm:grid-cols-2">
          {sections.map((section, index) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="text-muted transition-colors hover:text-foreground">
                <span className="mr-2 font-mono text-faint">{String(index + 1).padStart(2, "0")}</span>
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 flex flex-col gap-12">
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="mb-4 flex items-baseline gap-3 text-xl font-semibold tracking-tight">
              <span className="font-mono text-[13px] font-normal text-faint">{String(index + 1).padStart(2, "0")}</span>
              {section.title}
            </h2>
            <div className={PROSE}>{section.content}</div>
          </section>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <Link href={other.href} className="text-muted transition-colors hover:text-foreground">
          {other.label} →
        </Link>
        <Link href="/" className="text-faint transition-colors hover:text-muted">
          Volver al inicio
        </Link>
      </div>
    </article>
  );
}

/** Canales de contacto, mostrados igual en ambos documentos. */
export function ContactChannels() {
  return (
    <>
      <p>
        Para consultas, solicitudes sobre sus datos o reportes de seguridad
        {CONTACT_EMAIL ? (
          <>
            {" "}
            escriba a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> o
          </>
        ) : null}{" "}
        abra un tema en <a href={SUPPORT_URL}>el repositorio público de soporte de Scorpk</a>.
      </p>
      <p>
        Si su mensaje incluye datos personales, no los publique: indique en el tema que necesita un medio privado de
        contacto y se lo proporcionaremos.
      </p>
    </>
  );
}
