import ctaImg from "@/assets/cta.jpg";
import { links } from "@/config/site";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden">
      <img
        src={ctaImg}
        alt="Seleção de sushi premium do Sanjapa"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="absolute inset-0 veil" />

      <div className="relative mx-auto max-w-3xl px-5 py-28 text-center sm:px-8 sm:py-40">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.08] font-light sm:text-6xl">
            Sua próxima experiência japonesa{" "}
            <em className="text-gold-gradient not-italic">começa aqui</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 text-muted-foreground sm:text-lg">
            Faça seu pedido e descubra novos sabores.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-11 inline-block rounded-xs bg-crimson px-11 py-5 text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-crimson-foreground shadow-[0_20px_60px_-25px] shadow-crimson transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
          >
            Fazer pedido pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
