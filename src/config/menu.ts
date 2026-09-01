/**
 * CONTEÚDO DO CARDÁPIO DIGITAL
 * Todo o texto abaixo é livremente editável — itens, preços e horários.
 */

export const menuNav = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Cardápio", href: "/cardapio", active: true },
  { label: "Galeria", href: "/#galeria" },
  { label: "Unidades", href: "/#unidades" },
  { label: "Contato", href: "/#contato" },
];

export const menuCategories = [
  { id: "tradicional", label: "Tradicional" },
  { id: "premium", label: "Premium" },
  { id: "rodizio-tradicional", label: "Rodízio Tradicional" },
  { id: "rodizio-premium", label: "Rodízio Premium" },
  { id: "valores", label: "Valores" },
];

export const tradicional = [
  "Camarão com Catupiry",
  "Camarão Empanado",
  "Carne na Chapa",
  "Frango na Chapa",
  "Salmão Grelhado",
  "Shimeji",
  "Mexilhão",
  "Croquete",
  "Harumaki",
  "Guioza",
  "Batata Frita",
  "Yakisoba",
  "Missoshiro",
];

export const jhous = [
  "Salmão",
  "Shimeji",
  "Ilhéus",
  "Geleia",
  "Maracujá",
  "Flambado",
  "Camarão",
  "Batata",
];

export const premiumGroups = [
  { name: "Uramakis", jp: "裏巻き", items: ["Salmão", "Atum", "Califórnia", "Filadélfia"] },
  { name: "Hossomakis", jp: "細巻き", items: ["Salmão", "Kani", "Atum", "Pepino"] },
  { name: "Niguiris", jp: "握り", items: ["Salmão", "Tilápia", "Atum", "Prego"] },
  { name: "Hot Roll", jp: "ホットロール", items: ["Couve", "Batata", "Cream Cheese"] },
  { name: "Sashimis", jp: "刺身", items: ["Salmão", "Atum", "Tilápia", "Prego"] },
];

export const premiumExtras = [
  "Baterá",
  "Tempura de Legumes",
  "Sushis Doces",
  "Ceviche",
  "Carpaccios",
];

export const sobremesas = [
  { name: "Bola de Sorvete", note: "Com calda e suspiro." },
  { name: "Fondue de Chocolate", note: "" },
  { name: "Bola de Sorvete", note: "" },
];

export const especialidades = [
  { name: "Camarão na Chapa", badge: "⭐ Especial da casa" },
  { name: "Lula na Chapa", badge: "" },
  { name: "Robata", badge: "👨‍🍳 Recomendação do chef" },
  { name: "Camarão Spicy", badge: "⭐ Especial da casa" },
  { name: "Carpaccio Tentáculo de Lula", badge: "" },
  { name: "Niguiri de Polvo", badge: "👨‍🍳 Recomendação do chef" },
  { name: "Tataki de Camarão", badge: "" },
];

export const rodizioTradicional = [
  "Sushis",
  "Sashimis",
  "Temakis",
  "Hot Roll",
  "Yakisoba",
  "Teppan Salmão",
  "Shimeji",
  "Harumakis",
  "Guiozas",
  "Lula & Dore",
  "Carpaccios",
  "Ceviches",
  "Camarão Empanado",
  "Frango na Chapa",
  "Sushis Doces",
  "Croquete",
];

export const rodizioPremium = [
  "Contra Filé na Chapa",
  "Niguiri de Polvo",
  "Camarão na Chapa",
  "Lula na Chapa",
  "Carpaccio Prime",
  "Niguiri com Ovas",
  "1 Bola de Sorvete com Calda e Suspiro",
  "Robata de Carne com Queijo",
  "Camarão Spicy",
];

export const valoresTradicional = [
  {
    title: "Almoço — Segunda a Sexta",
    price: "R$ 87,90",
    notes: ["Por pessoa.", "Exceto feriados."],
  },
  {
    title: "Jantar — Segunda a Quinta",
    price: "R$ 109,90",
    notes: ["Por pessoa.", "Exceto feriados e vésperas de feriado."],
  },
  {
    title: "Jantar — Sexta-feira",
    price: "R$ 119,90",
    notes: ["Por pessoa.", "Inclui vésperas de feriado."],
  },
  {
    title: "Almoço & Jantar — Sábado, Domingo e Feriados",
    price: "R$ 119,90",
    notes: ["Por pessoa."],
  },
];

export const valoresPremium = [
  {
    title: "Rodízio Premium — Almoço",
    price: "R$ 99,90",
    notes: ["De segunda a sexta.", "Por pessoa."],
  },
  {
    title: "Rodízio Premium — Jantar",
    price: "R$ 129,90",
    notes: ["Fim de semana e feriados.", "Por pessoa."],
  },
];

/** Horários — edite livremente conforme a operação do restaurante. */
export const horarios = [
  { title: "Almoço", detail: "Segunda a sexta." },
  { title: "Jantar", detail: "Segunda a quinta." },
  { title: "Almoço & Jantar", detail: "Sábado, domingo e feriados." },
  { title: "Rodízio Premium", detail: "Almoço e jantar todos os dias." },
  { title: "Sexta-feira", detail: "Informações especiais conforme disponibilidade do restaurante." },
];
