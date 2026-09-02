import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import sushi from "@/assets/cat-sushi.jpg";
import combos from "@/assets/cat-combos.jpg";
import sashimi from "@/assets/cat-sashimi.jpg";
import quentes from "@/assets/cat-quentes.jpg";
import bebidas from "@/assets/cat-bebidas.jpg";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const categories = [
  { name: "Sushis", jp: "寿司", img: sushi, wide: false },
  { name: "Combos", jp: "盛り合わせ", img: combos, wide: true },
  { name: "Sashimis", jp: "刺身", img: sashimi, wide: false },
  { name: "Pratos Quentes", jp: "温菜", img: quentes, wide: false },
  { name: "Bebidas", jp: "飲み物", img: bebidas, wide: false },
];

export function MenuSection() {
  return (
    <section id="cardapio" className="py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Nosso cardápio</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-7 font-display text-4xl leading-[1.1] font-light sm:text-5xl">
              Sabores que conquistam.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Uma seleção especial preparada para transformar cada momento em uma experiência
              única.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal
              key={cat.name}
              delay={i * 0.06}
              className={cat.wide ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
            >
              <Link
                to="/cardapio"
                className={`group relative block h-full overflow-hidden border border-border ${
                  cat.wide ? "min-h-[22rem] lg:min-h-full" : "min-h-[19rem]"
                }`}
              >
                <img
                  src={cat.img}
                  alt={`Categoria ${cat.name}`}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 veil transition-opacity duration-500 group-hover:opacity-85" />
                <div className="relative flex h-full flex-col justify-end p-7">
                  <span className="text-[0.62rem] tracking-[0.4em] text-gold">{cat.jp}</span>
                  <div className="mt-2 flex items-center justify-between">
                    <h3 className="font-display text-2xl font-light">{cat.name}</h3>
                    <ArrowUpRight className="size-5 -translate-x-2 text-gold opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                  <span className="mt-4 h-px w-0 bg-gold/70 transition-all duration-700 group-hover:w-16" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 text-center">
            <Link
              to="/cardapio"
              className="inline-block rounded-xs border border-gold/45 px-12 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/10"
            >
              Ver cardápio completo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
