import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ChevronDown, Sparkles, Utensils } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { links } from "@/config/site";
import {
  especialidades,
  horarios,
  jhous,
  premiumExtras,
  premiumGroups,
  rodizioPremium,
  rodizioTradicional,
  sobremesas,
  tradicional,
  valoresPremium,
  valoresTradicional,
} from "@/config/menu";
import menuHero from "@/assets/menu-hero.jpg";
import omakaseImg from "@/assets/omakase.jpg";
import galTemaki from "@/assets/gal-temaki.jpg";
import galFlambe from "@/assets/gal-flambe.jpg";
import catSashimi from "@/assets/cat-sashimi.jpg";
import catSushi from "@/assets/cat-sushi.jpg";

function Head({
  label,
  title,
  subtitle,
  center,
}: {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <SectionLabel>{label}</SectionLabel>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-6 font-display text-4xl leading-[1.08] font-light sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p className="mt-5 leading-relaxed text-muted-foreground">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}

export function MenuHero() {
  return (
    <section className="relative flex min-h-[68svh] items-end overflow-hidden">
      <img
        src={menuHero}
        alt="Seleção de nigiris premium do Sanjapa Prime Sushi"
        width={1920}
        height={1080}
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 veil" />
      <div className="absolute inset-0 bg-ink/40" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-36 pb-16 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[0.68rem] uppercase tracking-[0.5em] text-gold"
        >
          お品書き · Menu
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-[2.9rem] leading-[1.02] font-light sm:text-6xl lg:text-7xl"
        >
          Nosso <em className="text-gold-gradient not-italic">Cardápio</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl leading-relaxed text-muted-foreground"
        >
          Uma experiência gastronômica cuidadosamente preparada para surpreender todos os
          sentidos.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-12 flex items-center gap-3 text-[0.58rem] uppercase tracking-[0.4em] text-muted-foreground"
        >
          <span className="h-px w-10 bg-gold/60" />
          Role para explorar
          <ChevronDown className="size-4 animate-bounce text-gold" />
        </motion.div>
      </div>
    </section>
  );
}

function ItemCard({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="group h-full border border-border bg-card/40 px-6 py-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-card/70">
        {children}
      </div>
    </Reveal>
  );
}

function Band({ img, alt, caption }: { img: string; alt: string; caption: string }) {
  return (
    <section className="relative h-[16rem] overflow-hidden sm:h-[22rem]">
      <img
        src={img}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
      />
      <div className="absolute inset-0 bg-ink/65" />
      <div className="relative flex h-full items-center justify-center px-6">
        <Reveal>
          <p className="text-center font-display text-2xl font-light tracking-wide sm:text-3xl">
            {caption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Tradicional() {
  return (
    <section id="tradicional" className="scroll-mt-32 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Head
          label="Seleção clássica"
          title="Tradicional"
          subtitle="Sabores clássicos preparados com ingredientes selecionados."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <div className="relative h-full min-h-[18rem] overflow-hidden border border-border">
              <img
                src={catSushi}
                alt="Sushi tradicional"
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] hover:scale-110"
              />
              <div className="absolute inset-0 veil" />
              <div className="relative flex h-full flex-col justify-end p-7">
                <span className="text-[0.6rem] tracking-[0.4em] text-gold">伝統</span>
                <p className="mt-2 font-display text-2xl font-light">Clássicos da casa</p>
              </div>
            </div>
          </Reveal>
          {tradicional.map((item, i) => (
            <ItemCard key={item} delay={i * 0.03}>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-px w-5 shrink-0 bg-gold/60 transition-all duration-500 group-hover:w-8" />
                <p className="font-display text-xl font-light">{item}</p>
              </div>
            </ItemCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Premium() {
  return (
    <>
      <Band img={galTemaki} alt="Temaki artesanal" caption="Feito à mão, peça por peça." />
      <section id="premium" className="scroll-mt-32 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Head
            label="Alta gastronomia"
            title="Premium"
            subtitle="Uma seleção exclusiva para uma experiência ainda mais especial."
          />

          <Reveal delay={0.08}>
            <div className="relative mt-14 overflow-hidden border border-gold/25 bg-card/40">
              <div className="grid lg:grid-cols-[1.1fr_1fr]">
                <div className="p-8 sm:p-12">
                  <span className="text-[0.6rem] uppercase tracking-[0.4em] text-gold">
                    Assinatura
                  </span>
                  <h3 className="mt-4 font-display text-4xl font-light">Jhous</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Combinações autorais criadas pela cozinha Sanjapa, com ingredientes e
                    finalizações exclusivas.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {jhous.map((item) => (
                      <span
                        key={item}
                        className="rounded-xs border border-gold/30 px-4 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-gold-soft transition-colors duration-300 hover:bg-gold/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative min-h-[16rem]">
                  <img
                    src={galFlambe}
                    alt="Jhou flambado"
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-ink/35" />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {premiumGroups.map((group, i) => (
              <ItemCard key={group.name} delay={i * 0.05}>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl font-light">{group.name}</h3>
                  <span className="text-[0.6rem] tracking-[0.3em] text-gold">{group.jp}</span>
                </div>
                <span className="mt-4 block h-px w-10 bg-gold/40 transition-all duration-500 group-hover:w-20" />
                <ul className="mt-5 space-y-2">
                  {group.items.map((it) => (
                    <li key={it} className="text-sm text-muted-foreground">
                      {it}
                    </li>
                  ))}
                </ul>
              </ItemCard>
            ))}
          </div>

          <Reveal delay={0.1}>
            <h3 className="mt-16 text-[0.66rem] uppercase tracking-[0.34em] text-gold">
              Outros itens premium
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {premiumExtras.map((item, i) => (
              <ItemCard key={item} delay={i * 0.04}>
                <p className="font-display text-xl font-light">{item}</p>
              </ItemCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function Omakase() {
  return (
    <section className="relative overflow-hidden border-y border-gold/20">
      <img
        src={omakaseImg}
        alt="Chef finalizando um omakasê"
        loading="lazy"
        width={1600}
        height={1200}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="relative mx-auto max-w-3xl px-5 py-28 text-center sm:px-8 sm:py-36">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-xs border border-gold/40 px-5 py-2 text-[0.58rem] uppercase tracking-[0.34em] text-gold">
            <Sparkles className="size-3" /> Experiência exclusiva
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-8 font-display text-5xl font-light sm:text-7xl">
            Omakas<em className="text-gold-gradient not-italic">ê</em>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Uma experiência exclusiva guiada pela criatividade e escolha do chef.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 text-[0.66rem] uppercase tracking-[0.34em] text-gold">
            Escolha do chef
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Especialidades() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Head
          label="Da nossa cozinha"
          title="Especialidades da Casa"
          subtitle="Pratos que traduzem a assinatura do Sanjapa Prime Sushi."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {especialidades.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden border border-border bg-card/40 p-9 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40">
                <Utensils className="size-5 text-gold/70" />
                <h3 className="mt-6 font-display text-2xl font-light">{item.name}</h3>
                {item.badge && (
                  <span className="mt-5 inline-block rounded-xs border border-crimson/50 bg-crimson/10 px-3.5 py-1.5 text-[0.62rem] uppercase tracking-[0.18em] text-gold-soft">
                    {item.badge}
                  </span>
                )}
                <span className="mt-6 block h-px w-0 bg-gold/60 transition-all duration-700 group-hover:w-20" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Sobremesas() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Head
          label="Para finalizar"
          title="Sobremesas"
          subtitle="O encerramento doce de uma experiência completa."
          center
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {sobremesas.map((item, i) => (
            <Reveal key={`${item.name}-${i}`} delay={i * 0.07}>
              <div className="group flex h-full min-h-[15rem] flex-col justify-end border border-gold/20 bg-gradient-to-b from-card/20 to-crimson/10 p-9 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50">
                <span className="text-[0.58rem] uppercase tracking-[0.4em] text-gold">甘味</span>
                <h3 className="mt-3 font-display text-3xl font-light">{item.name}</h3>
                {item.note && (
                  <p className="mt-3 text-sm text-muted-foreground">{item.note}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RodizioTradicional() {
  return (
    <>
      <Band img={catSashimi} alt="Sashimis frescos" caption="Cortes frescos, todos os dias." />
      <section id="rodizio-tradicional" className="scroll-mt-32 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Head
            label="Experiência completa"
            title="Rodízio Tradicional"
            subtitle="Uma experiência completa com os sabores mais tradicionais da gastronomia japonesa."
          />
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {rodizioTradicional.map((item, i) => (
              <Reveal key={item} delay={i * 0.03}>
                <div className="group flex items-center gap-3 border border-border bg-card/30 px-5 py-4 transition-all duration-400 hover:border-gold/40 hover:bg-card/60">
                  <span className="size-1.5 shrink-0 rotate-45 bg-crimson transition-colors duration-300 group-hover:bg-gold" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-10 border-l-2 border-gold/50 py-2 pl-5 text-sm italic text-muted-foreground">
              Consulte disponibilidade e condições diretamente com o restaurante.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function RodizioPremium() {
  return (
    <section
      id="rodizio-premium"
      className="scroll-mt-32 border-y border-gold/20 bg-ink py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Head
          label="Seleção exclusiva"
          title="Rodízio Premium"
          subtitle="Uma seleção especial para uma experiência gastronômica ainda mais completa."
        />
        <Reveal delay={0.08}>
          <div className="mt-12 flex flex-wrap items-center gap-4 border border-gold/30 bg-gold/5 px-7 py-5">
            <span className="text-[0.62rem] uppercase tracking-[0.26em] text-gold">
              Inclui todos os itens do Rodízio Tradicional
            </span>
            <span className="inline-flex items-center gap-2 rounded-xs bg-gradient-to-r from-crimson to-crimson/70 px-4 py-2 text-[0.58rem] uppercase tracking-[0.24em] text-crimson-foreground">
              <Sparkles className="size-3" /> Premium Experience
            </span>
          </div>
        </Reveal>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rodizioPremium.map((item, i) => (
            <ItemCard key={item} delay={i * 0.04}>
              <div className="flex items-start gap-3">
                <span className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-gold" />
                <p className="font-display text-xl font-light">{item}</p>
              </div>
            </ItemCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function PriceCard({
  title,
  price,
  notes,
  premium,
  delay,
}: {
  title: string;
  price: string;
  notes: string[];
  premium?: boolean;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div
        className={`flex h-full flex-col border p-9 transition-all duration-500 hover:-translate-y-1 ${
          premium
            ? "border-gold/35 bg-gradient-to-b from-gold/8 to-transparent hover:border-gold/60"
            : "border-border bg-card/40 hover:border-gold/35"
        }`}
      >
        <h3 className="font-display text-2xl leading-snug font-light">{title}</h3>
        <p
          className={`mt-6 font-display text-4xl ${premium ? "text-gold-gradient" : "text-gold"}`}
        >
          {price}
        </p>
        <ul className="mt-5 space-y-1.5">
          {notes.map((n) => (
            <li key={n} className="text-sm text-muted-foreground">
              {n}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function Valores() {
  return (
    <section id="valores" className="scroll-mt-32 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Head
          label="Escolha sua experiência"
          title="Experiências e Valores"
          subtitle="Escolha a experiência ideal para você."
          center
        />

        <Reveal delay={0.08}>
          <h3 className="mt-16 text-[0.66rem] uppercase tracking-[0.34em] text-gold">
            Rodízio Tradicional
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {valoresTradicional.map((v, i) => (
            <PriceCard key={v.title} {...v} delay={i * 0.05} />
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-16 flex flex-wrap items-center gap-4">
            <h3 className="text-[0.66rem] uppercase tracking-[0.34em] text-gold">
              Rodízio Premium
            </h3>
            <span className="rounded-xs border border-gold/40 px-3.5 py-1.5 text-[0.56rem] uppercase tracking-[0.26em] text-gold">
              Experiência Premium
            </span>
          </div>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {valoresPremium.map((v, i) => (
            <PriceCard key={v.title} {...v} premium delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Horarios() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Head label="Funcionamento" title="Horários" center />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {horarios.map((h, i) => (
            <ItemCard key={h.title} delay={i * 0.05}>
              <h3 className="text-[0.64rem] uppercase tracking-[0.28em] text-gold">{h.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.detail}</p>
            </ItemCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConsultarGarcom() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-light sm:text-4xl">Experiências Especiais</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Alguns itens e experiências especiais podem estar sujeitos à disponibilidade. Consulte
            nosso garçom para conhecer todas as opções.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block rounded-xs border border-gold/45 px-10 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/10"
          >
            Consultar restaurante
          </a>
        </Reveal>
      </div>
    </section>
  );
}
