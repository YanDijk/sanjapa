import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import temaki from "@/assets/gal-temaki.jpg";
import flambe from "@/assets/gal-flambe.jpg";
import especial from "@/assets/gal-especial.jpg";
import momento from "@/assets/gal-momento.jpg";
import sashimi from "@/assets/cat-sashimi.jpg";
import ambiente from "@/assets/about.jpg";
import bebidas from "@/assets/cat-bebidas.jpg";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const shots = [
  { src: temaki, alt: "Temaki de salmão com cream cheese", span: "row-span-2" },
  { src: flambe, alt: "Chef maçaricando um uramaki flambado", span: "" },
  { src: especial, alt: "Prato especial finalizado com folha de ouro", span: "row-span-2" },
  { src: momento, alt: "Cliente degustando nigiri com hashi" , span: "" },
  { src: sashimi, alt: "Sashimi de salmão e atum", span: "" },
  { src: ambiente, alt: "Ambiente reservado do restaurante", span: "row-span-2" },
  { src: bebidas, alt: "Drinks autorais do bar", span: "" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Galeria</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-7 font-display text-4xl leading-[1.1] font-light sm:text-5xl">
              Uma experiência para todos os sentidos.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[10rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] lg:grid-cols-4">
          {shots.map((shot, i) => (
            <Reveal key={shot.alt} delay={(i % 4) * 0.06} className={shot.span}>
              <button
                onClick={() => setActive(i)}
                className="group relative size-full overflow-hidden border border-border"
                aria-label={`Ampliar imagem: ${shot.alt}`}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-ink/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-5 backdrop-blur-md"
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Fechar"
              className="absolute top-6 right-6 rounded-xs border border-border p-2.5 text-foreground transition-colors hover:border-gold/60"
            >
              <X className="size-5" />
            </button>
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              src={shots[active]?.src}
              alt={shots[active]?.alt ?? ""}

              className="max-h-[84vh] w-auto max-w-full object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
