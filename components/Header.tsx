import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-mono text-[15px] font-semibold tracking-tight">
          <Image src="/logo.png" alt="" width={24} height={24} className="rounded-full" priority />
          Scorpk
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/pricing" className="text-muted hover:text-foreground transition-colors">
            Precios
          </Link>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=ScorpkDev.scorpk-agent"
            className="text-muted hover:text-foreground transition-colors"
          >
            Instalar
          </a>
          {user ? (
            <Link
              href="/account"
              className="rounded-full bg-accent px-4 py-1.5 font-medium text-accent-ink hover:opacity-90 transition-opacity"
            >
              Mi cuenta
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-accent px-4 py-1.5 font-medium text-accent-ink hover:opacity-90 transition-opacity"
            >
              Ingresar
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
