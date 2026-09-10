import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <section id="servicios" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <SectionLabel index="01" title="Servicios" />
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
            Construye tu presencia digital y potencia tu equipo con IA.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted/80">
            Te acompañamos de cero a cien en el desarrollo de software,
            entendiendo tu modelo de negocio y escalabilidad.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {services.map((service, index) => (
            <Reveal
              key={service.tag}
              delay={index * 100}
              className="border-t border-border-strong pt-6"
            >
              <p className="text-xs font-semibold tracking-widest text-accent uppercase">
                {service.tag}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted/80">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
