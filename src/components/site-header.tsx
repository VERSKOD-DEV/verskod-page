import Image from "next/image";
import Link from "next/link";
import { nav } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/verskod-wordmark-accent.png"
            alt="Verskod"
            width={1200}
            height={172}
            priority
            className="h-6 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold tracking-widest text-muted-2 uppercase transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="bg-accent px-4 py-2 text-xs font-semibold tracking-widest text-accent-foreground uppercase transition-colors hover:bg-accent-hover"
        >
          Hablemos
        </a>
      </div>
    </header>
  );
}
