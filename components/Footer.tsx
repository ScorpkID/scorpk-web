export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
        <span>Scorpk — agentes de IA para programar, en tu editor y en tu terminal.</span>
        <div className="flex items-center gap-4">
          <a href="https://github.com/ScorpkID/scorpk" className="hover:text-muted transition-colors">
            extensión
          </a>
          <a href="https://github.com/ScorpkID/scorpk-cli" className="hover:text-muted transition-colors">
            cli
          </a>
        </div>
      </div>
    </footer>
  );
}
