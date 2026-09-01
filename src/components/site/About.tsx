import { Fish, Leaf, Sparkles, HandPlatter } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const perks = [
  { icon: Leaf, title: "Ingredientes selecionados", text: "Peixes e insumos escolhidos diariamente." },
  { icon: Fish, title: "Gastronomia autêntica", text: "Técnicas tradicionais em cada corte." },
  { icon: Sparkles, title: "Experiência premium", text: "Ambiente pensado nos mínimos detalhes." },
  { icon: HandPlatter, title: "Atendimento de excelência", text: "Hospitalidade em cada visita." },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-3 border border-gold/20" aria-hidden />
            <img
              src={aboutImg}
              alt="Salão íntimo e elegante do Sanjapa Prime Sushi"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative aspect-4/5 w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel>Sanjapa Prime Sushi</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-7 font-display text-4xl leading-[1.1] font-light sm:text-5xl">
              Uma experiência além do sabor.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-7 max-w-lg leading-relaxed text-muted-foreground">
              Nascemos do desejo de levar a autêntica culinária japonesa a cada mesa. Trabalhamos
              com ingredientes frescos, preparo cuidadoso e uma cozinha que respeita a tradição
              — sempre com o olhar atento de quem entende que uma refeição é também memória.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
              Do primeiro corte ao último detalhe do atendimento, cada visita é construída para
              ser exclusiva.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden border border-border sm:grid-cols-2">
            {perks.map((perk, i) => (
              <Reveal key={perk.title} delay={0.1 + i * 0.07}>
                <div className="group h-full border-border bg-card/40 p-6 transition-colors duration-500 hover:bg-card">
                  <perk.icon className="size-5 text-gold transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="mt-4 text-sm font-semibold tracking-wide text-foreground">
                    {perk.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{perk.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
