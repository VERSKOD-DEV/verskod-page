import { Reveal } from "@/components/reveal";
import { presence, site } from "@/lib/content";

export function Hero() {
  return (
    <section className="glow relative mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28">
      <Reveal>
        <h1 className="max-w-3xl text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl">
          <span className="block text-foreground">Desarrollo de software</span>
          <span className="block text-muted">
            y capacitación en IA para tu empresa.
          </span>
        </h1>
      </Reveal>

      <Reveal delay={100}>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted/80">
          {site.description}
        </p>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-9 flex flex-wrap items-center gap-6">
          <a
            href="#contacto"
            className="bg-accent px-6 py-3 text-xs font-semibold tracking-widest text-accent-foreground uppercase transition-colors hover:bg-accent-hover"
          >
            Contáctanos
          </a>
          <a
            href="#servicios"
            className="text-xs font-semibold tracking-widest text-muted-2 uppercase transition-colors hover:text-foreground"
          >
            Ver servicios →
          </a>
        </div>
      </Reveal>

      <Reveal delay={300}>
        <div className="mt-20 border-t border-border pt-6">
          <p className="text-xs font-semibold tracking-widest text-muted-2 uppercase">
            Presencia en {presence.join(" · ")}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
