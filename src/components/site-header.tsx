"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

// Hysteresis: collapse and expand at different scroll depths (with a dead
// zone between) so the shrink/grow transition can't re-trigger itself.
const COLLAPSE_AT = 72;
const EXPAND_AT = 16;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const evaluate = () => {
      ticking = false;
      const y = window.scrollY;
      setScrolled((prev) => {
        if (!prev && y > COLLAPSE_AT) return true;
        if (prev && y < EXPAND_AT) return false;
        return prev;
      });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(evaluate);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{ overflowAnchor: "none" }}
      className={`sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur transition-[height] duration-300 ${
        scrolled ? "h-16" : "h-32"
      }`}
    >
      <div
        className="navbar-glow-line absolute inset-x-0 bottom-0 h-0.5"
        aria-hidden="true"
      />

      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/verskod-wordmark-accent.png"
            alt="Verskod"
            width={1200}
            height={172}
            priority
            className={`w-auto transition-[height] duration-300 ${
              scrolled ? "h-6" : "h-7 sm:h-10"
            }`}
          />
        </Link>

        <div className="flex items-center gap-8">
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
      </div>
    </header>
  );
}
