import { MapPin, Phone, Clock } from "lucide-react";
import sjc from "@/assets/unit-sjc.jpg";
import caragua from "@/assets/unit-caragua.jpg";
import jacarei from "@/assets/unit-jacarei.jpg";
import { units } from "@/config/site";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const images: Record<string, string> = { sjc, caragua, jacarei };

export function Units() {
  return (
    <section id="unidades" className="py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Unidades</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-7 font-display text-4xl leading-[1.1] font-light sm:text-5xl">
              Três endereços, a mesma excelência.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {units.map((unit, i) => (
            <Reveal key={unit.id} delay={i * 0.08}>
              <article className="group flex h-full flex-col border border-border bg-card/40 transition-colors duration-500 hover:border-gold/30">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={images[unit.id]}
                    alt={`Fachada e ambiente da unidade ${unit.city}`}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 veil opacity-80" />
                  <h3 className="absolute bottom-5 left-6 font-display text-2xl font-light">
                    {unit.city}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col gap-5 p-7">
                  <p className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                    {unit.address}
                  </p>
                  <a
                    href={`tel:${unit.phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-gold"
                  >
                    <Phone className="size-4 shrink-0 text-gold" />
                    {unit.phone}
                  </a>
                  <div className="flex gap-3 text-sm text-muted-foreground">
                    <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
                    <ul className="space-y-1">
                      {unit.hours.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row">
                    <a
                      href={unit.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-xs border border-border px-5 py-3 text-center text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-gold/50 hover:text-gold"
                    >
                      Como chegar
                    </a>
                    <a
                      href={unit.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-xs bg-crimson px-5 py-3 text-center text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-crimson-foreground transition-all duration-300 hover:brightness-110"
                    >
                      Fazer pedido
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
