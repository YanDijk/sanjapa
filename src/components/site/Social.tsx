import { Instagram, Facebook } from "lucide-react";
import sushi from "@/assets/cat-sushi.jpg";
import temaki from "@/assets/gal-temaki.jpg";
import especial from "@/assets/gal-especial.jpg";
import combos from "@/assets/cat-combos.jpg";
import flambe from "@/assets/gal-flambe.jpg";
import bebidas from "@/assets/cat-bebidas.jpg";
import { links, units } from "@/config/site";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const posts = [
  { src: sushi, alt: "Publicação: nigiri premium" },
  { src: temaki, alt: "Publicação: temaki de salmão" },
  { src: especial, alt: "Publicação: prato especial" },
  { src: combos, alt: "Publicação: combo Sanjapa" },
  { src: flambe, alt: "Publicação: uramaki flambado" },
  { src: bebidas, alt: "Publicação: drinks do bar" },
];

export function Social() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <SectionLabel>Redes sociais</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-7 font-display text-4xl leading-[1.1] font-light sm:text-5xl">
                Acompanhe o Sanjapa.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="flex gap-3">
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-xs border border-border p-3.5 text-foreground transition-colors hover:border-gold/50 hover:text-gold"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href={links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-xs border border-border p-3.5 text-foreground transition-colors hover:border-gold/50 hover:text-gold"
              >
                <Facebook className="size-5" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map((post, i) => (
            <Reveal key={post.alt} delay={(i % 6) * 0.05}>
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden border border-border"
              >
                <img
                  src={post.src}
                  alt={post.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Instagram className="size-6 text-gold" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {units.map((unit) => (
              <a
                key={unit.id}
                href={unit.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xs border border-border px-6 py-3 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
              >
                {unit.instagram.handle}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
