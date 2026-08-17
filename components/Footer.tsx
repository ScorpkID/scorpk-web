export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
        <span>Scorpk — programá con agentes de IA, sin salir de tu editor.</span>
        <a href="https://github.com/ScorpkID" className="hover:text-muted transition-colors">
          github.com/ScorpkID
        </a>
      </div>
    </footer>
  );
}
