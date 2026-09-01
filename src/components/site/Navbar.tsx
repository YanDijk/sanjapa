import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { links, nav, brand } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-ink/85 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl leading-none tracking-[0.18em] text-foreground">
            {brand.name.toUpperCase()}
          </span>
          <span className="text-[0.6rem] uppercase tracking-[0.34em] text-gold">
            {brand.suffix}
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[0.78rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xs bg-crimson px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-crimson-foreground shadow-[0_10px_30px_-12px] shadow-crimson transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:inline-block"
          >
            Faça seu pedido
          </a>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-xs border border-border p-2.5 text-foreground transition-colors hover:border-gold/50 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 rounded-xs bg-crimson px-6 py-4 text-center text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-crimson-foreground"
              >
                Faça seu pedido
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
