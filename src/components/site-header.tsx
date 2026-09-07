import Link from "next/link";
import { nav, site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-widest uppercase"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs tracking-widest text-muted uppercase transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="font-mono text-xs tracking-widest text-accent-foreground uppercase bg-accent px-4 py-2 transition-colors hover:bg-accent-hover"
        >
          Hablemos
        </a>
      </div>
    </header>
  );
}
