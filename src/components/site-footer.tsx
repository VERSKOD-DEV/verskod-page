import { contactPhones, nav, services, site, social } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contacto" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-4">
          <div>
            <p className="font-mono text-sm font-medium tracking-widest uppercase">
              {site.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {site.tagline}
            </p>
            <div className="mt-6 flex gap-4">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs tracking-widest text-muted uppercase transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-muted-2 uppercase">
              Navegación
            </p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-muted-2 uppercase">
              Servicios
            </p>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.tag} className="text-sm text-muted">
                  {s.tag}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-muted-2 uppercase">
              Contacto
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {site.email}
                </a>
              </li>
              {contactPhones.map((phone) => (
                <li key={phone.country} className="text-sm text-muted">
                  <a
                    href={phone.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {phone.country}: {phone.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-6">
          <p className="font-mono text-xs text-muted-2">
            © {year} {site.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
