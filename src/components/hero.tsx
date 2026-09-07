import { presence, site } from "@/lib/content";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28">
      <h1 className="max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
        <span className="block text-foreground">Desarrollo de software</span>
        <span className="block text-muted">
          y capacitación en IA para tu empresa.
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
        {site.description}
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-6">
        <a
          href="#contacto"
          className="bg-accent px-6 py-3 font-mono text-xs tracking-widest text-accent-foreground uppercase transition-colors hover:bg-accent-hover"
        >
          Contáctanos
        </a>
        <a
          href="#servicios"
          className="font-mono text-xs tracking-widest text-muted uppercase transition-colors hover:text-foreground"
        >
          Ver servicios →
        </a>
      </div>

      <div className="mt-20 border-t border-border pt-6">
        <p className="font-mono text-xs tracking-widest text-muted-2 uppercase">
          Presencia en {presence.join(" · ")}
        </p>
      </div>
    </section>
  );
}
