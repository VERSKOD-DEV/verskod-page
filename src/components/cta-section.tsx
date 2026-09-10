import { Reveal } from "@/components/reveal";
import { site } from "@/lib/content";

export function CtaSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <h2 className="max-w-xl font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            ¡Dile hola al futuro con Verskod!
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted/80">
            Escríbenos y construyamos mejores caminos.
          </p>
          <a
            href={`mailto:${site.email}?subject=%C2%A1Hola%20Verskod!&body=Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20ustedes...`}
            className="mt-8 inline-block bg-accent px-6 py-3 font-mono text-xs tracking-widest text-accent-foreground uppercase transition-colors hover:bg-accent-hover"
          >
            Escríbenos →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
