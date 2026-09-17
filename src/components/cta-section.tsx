import { Reveal } from "@/components/reveal";

const FORM_URL =
  "https://n8n.srv1251167.hstgr.cloud/form/c45416e6-edf6-4f1c-ab92-b6d21cf77273";

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
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 max-w-2xl overflow-hidden rounded-lg border border-border-strong bg-[#fbfcfe] shadow-lg">
            <iframe
              src={FORM_URL}
              title="Formulario de contacto"
              className="h-[1050px] w-full"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
