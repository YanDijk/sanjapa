import { createFileRoute } from "@tanstack/react-router";
import { MenuHeader } from "@/components/menu/MenuHeader";
import { CategoryBar } from "@/components/menu/CategoryBar";
import {
  ConsultarGarcom,
  Especialidades,
  Horarios,
  MenuHero,
  Omakase,
  Premium,
  RodizioPremium,
  RodizioTradicional,
  Sobremesas,
  Tradicional,
  Valores,
} from "@/components/menu/MenuBlocks";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const title = "Cardápio — Sanjapa Prime Sushi";
const description =
  "Cardápio digital do Sanjapa Prime Sushi: seleção tradicional e premium, omakasê, especialidades da casa, rodízios e valores.";

export const Route = createFileRoute("/cardapio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CardapioPage,
});

function CardapioPage() {
  return (
    <div className="min-h-screen bg-background">
      <MenuHeader />
      <main>
        <MenuHero />
        <CategoryBar />
        <Tradicional />
        <Premium />
        <Omakase />
        <Especialidades />
        <Sobremesas />
        <RodizioTradicional />
        <RodizioPremium />
        <Valores />
        <Horarios />
        <ConsultarGarcom />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
