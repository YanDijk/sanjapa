/**
 * CONFIGURAÇÃO CENTRAL DO SITE
 * Altere aqui os links, textos e dados das unidades.
 */

export const links = {
  whatsapp: "https://wa.me/551239424665?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido",
  cardapio: "https://www.sanjapa.com.br",
  tourVirtual: "https://www.google.com/maps",
  instagram: "https://instagram.com/sanjapa.sjc",
  facebook: "https://facebook.com/sanjapasushi",
};

export const brand = {
  name: "Sanjapa",
  suffix: "Prime Sushi",
  email: "contato@sanjapa.com.br",
};

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Galeria", href: "#galeria" },
  { label: "Unidades", href: "#unidades" },
  { label: "Contato", href: "#contato" },
];

export const stats = [
  { value: 15, suffix: "+", label: "Anos de experiência" },
  { value: 100, suffix: "%", label: "Ingredientes selecionados" },
  { value: 3, suffix: "", label: "Unidades" },
  { value: 5, suffix: "★", label: "Experiência dos clientes" },
];

export type Unit = {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  hours: string[];
  maps: string;
  whatsapp: string;
  instagram: { handle: string; url: string };
};

export const units: Unit[] = [
  {
    id: "sjc",
    city: "São José dos Campos",
    name: "Sanjapa São José dos Campos",
    address: "Rua Santa Madalena, 64 — Vila Ema, São José dos Campos - SP",
    phone: "(12) 3942-4665",
    hours: [
      "Seg a Qui: 11:30–15:00 | 18:30–23:00",
      "Sex: 11:30–15:00 | 18:30–00:00",
      "Sáb: 12:00–00:00",
      "Dom: 12:00–23:00",
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Santa+Madalena+64+Vila+Ema+Sao+Jose+dos+Campos",
    whatsapp: "https://wa.me/551239424665",
    instagram: { handle: "@sanjapa.sjc", url: "https://instagram.com/sanjapa.sjc" },
  },
  {
    id: "caragua",
    city: "Caraguatatuba",
    name: "Sanjapa Caraguatatuba",
    address: "Rua Dr. Paul Harris, 70 — Centro, Caraguatatuba - SP",
    phone: "(12) 2134-0270",
    hours: [
      "Seg a Qui: 11:30–15:00 | 18:30–23:00",
      "Sex: 11:30–15:00 | 18:30–00:00",
      "Sáb: 12:00–00:00",
      "Dom: 12:00–23:00",
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Dr+Paul+Harris+70+Centro+Caraguatatuba",
    whatsapp: "https://wa.me/551221340270",
    instagram: {
      handle: "@sanjapasushi.caragua",
      url: "https://instagram.com/sanjapasushi.caragua",
    },
  },
  {
    id: "jacarei",
    city: "Jacareí",
    name: "Sanjapa Jacareí",
    address: "R. Tiradentes, 299 — Loja Mall 301, Centro, Jacareí - SP, 12308-510",
    phone: "(12) 3952-9600",
    hours: [
      "Seg: 11:30–15:00 | 18:30–23:00",
      "Ter: 11:00–15:00 | 18:30–23:00",
      "Qua e Qui: 11:30–15:00 | 18:30–23:00",
      "Sex: 11:30–15:00 | 18:30–00:00",
      "Sáb: 12:00–00:00 · Dom: 12:00–23:00",
    ],
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Tiradentes+299+Centro+Jacarei",
    whatsapp: "https://wa.me/551239529600",
    instagram: { handle: "@sanjapa.jacarei", url: "https://instagram.com/sanjapa.jacarei" },
  },
];
