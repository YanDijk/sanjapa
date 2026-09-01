import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { links } from "@/config/site";

export function WhatsAppFab() {
  return (
    <motion.a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fazer pedido pelo WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.94 }}
      className="fixed right-5 bottom-5 z-60 flex size-14 items-center justify-center rounded-full bg-crimson text-crimson-foreground shadow-[0_18px_45px_-18px] shadow-crimson sm:right-8 sm:bottom-8"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-crimson/40" aria-hidden />
      <MessageCircle className="relative size-6" />
    </motion.a>
  );
}
