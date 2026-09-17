import { ContactFormModal } from "@/components/contact-form-modal";
import { Reveal } from "@/components/reveal";

export function CtaSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <h2 className="max-w-xl text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
            ¡Dile hola al futuro con Verskod!
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted/80">
            Escríbenos y construyamos mejores caminos.
          </p>
          <ContactFormModal />
        </Reveal>
      </div>
    </section>
  );
}
