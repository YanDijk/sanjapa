import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { links } from "@/config/site";

const fade = {
  hidden: { opacity: 0, y: 34 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.2 + i * 0.16, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Chef japonês preparando nigiri premium no Sanjapa Prime Sushi"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 veil" />
      <div className="absolute inset-0 bg-ink/45" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-28 sm:px-8">
        <motion.p
          custom={0}
          initial="hidden"
          animate="show"
          variants={fade}
          className="text-[0.7rem] uppercase tracking-[0.5em] text-gold"
        >
          日本料理 · Sanjapa Prime Sushi
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-8 max-w-4xl font-display text-[2.7rem] leading-[1.04] font-light tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          A verdadeira experiência da{" "}
          <em className="text-gold-gradient not-italic">gastronomia japonesa</em>.
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Sabores autênticos, ingredientes selecionados e uma experiência gastronômica
          inesquecível.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fade}
          className="mt-11 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xs bg-crimson px-9 py-4 text-center text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-crimson-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
          >
            Faça seu pedido
          </a>
          <a
            href="#cardapio"
            className="rounded-xs border border-gold/45 px-9 py-4 text-center text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/10"
          >
            Conheça nosso cardápio
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[0.58rem] uppercase tracking-[0.4em]">Explore</span>
          <ChevronDown className="size-4 text-gold" />
        </motion.span>
      </motion.a>
    </section>
  );
}
