import { Instagram, Facebook } from "lucide-react";
import { brand, links, nav, units } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-4">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl tracking-[0.18em]">
              {brand.name.toUpperCase()}
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.32em] text-gold">
              {brand.suffix}
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Gastronomia japonesa autêntica, ingredientes selecionados e uma experiência pensada
            em cada detalhe.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-xs border border-border p-3 text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-xs border border-border p-3 text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
            >
              <Facebook className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[0.66rem] uppercase tracking-[0.3em] text-gold">Navegação</h3>
          <ul className="mt-6 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.66rem] uppercase tracking-[0.3em] text-gold">Contato</h3>
          <ul className="mt-6 space-y-3">
            {units.map((unit) => (
              <li key={unit.id} className="text-sm text-muted-foreground">
                <span className="block text-foreground">{unit.city}</span>
                <a
                  href={`tel:${unit.phone.replace(/\D/g, "")}`}
                  className="transition-colors hover:text-gold"
                >
                  {unit.phone}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${brand.email}`}
                className="text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {brand.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[0.66rem] uppercase tracking-[0.3em] text-gold">Pedidos</h3>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Atendimento para delivery e retirada em todas as unidades.
          </p>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-xs bg-crimson px-7 py-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-crimson-foreground transition-all duration-300 hover:brightness-110"
          >
            Pedir agora
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="h-px hairline" />
        <p className="py-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {brand.name} {brand.suffix}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
