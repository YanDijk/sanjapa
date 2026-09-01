import { Compass } from "lucide-react";
import tourImg from "@/assets/tour.jpg";
import { links } from "@/config/site";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Tour() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <img
        src={tourImg}
        alt="Vista panorâmica do salão e sushi bar do Sanjapa"
        width={1920}
        height={912}
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/85 to-ink/40" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-xl glass-card p-9 sm:p-12">
          <Reveal>
            <SectionLabel>Tour virtual</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-7 font-display text-4xl leading-[1.1] font-light sm:text-5xl">
              Conheça o Sanjapa antes mesmo de chegar.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Percorra nosso salão, o sushi bar e os ambientes reservados. Uma prévia da
              atmosfera que criamos para receber você.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={links.tourVirtual}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-xs border border-gold/45 px-9 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/10"
            >
              <Compass className="size-4" />
              Iniciar tour virtual
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
