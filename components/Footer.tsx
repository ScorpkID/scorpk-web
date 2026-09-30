import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
        <span>Scorpk — agentes de IA en tu editor, tu terminal y tu celular.</span>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <a href="https://github.com/ScorpkID/scorpk" className="hover:text-muted transition-colors">
            extensión
          </a>
          <a href="https://github.com/ScorpkID/scorpk-cli" className="hover:text-muted transition-colors">
            cli
          </a>
          <Link href="/assistant" className="hover:text-muted transition-colors">
            asistente
          </Link>
          <Link href="/privacy" className="hover:text-muted transition-colors">
            privacidad
          </Link>
          <Link href="/terms" className="hover:text-muted transition-colors">
            términos
          </Link>
        </div>
      </div>
    </footer>
  );
}
