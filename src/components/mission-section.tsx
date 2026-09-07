import { SectionLabel } from "@/components/section-label";
import { pillars } from "@/lib/content";

export function MissionSection() {
  return (
    <section id="proposito" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionLabel index="02" title="Propósito" />
        <h2 className="mt-4 max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
          Nuestra misión
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Transformar tu equipo combinando formación de vanguardia y
          aplicaciones prácticas de tecnologías emergentes, para que trabajen
          en proyectos disruptivos, alcancen niveles de eficiencia superiores
          y disfruten de un equilibrio real entre rendimiento y bienestar.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="border-t border-border-strong pt-6">
              <p className="font-mono text-sm text-accent">{pillar.number}</p>
              <h3 className="mt-3 text-lg font-medium text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
