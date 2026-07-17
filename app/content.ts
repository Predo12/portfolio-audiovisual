// EDITE ESTE ARQUIVO para trocar nome, WhatsApp, textos e projetos.
export const site = {
  name: "NOME DO ESTÚDIO",
  eyebrow: "CAMPO GRANDE · MS  /  AUDIOVISUAL & DESIGN",
  headline: "A gente transforma negócios em histórias que dão vontade de ver.",
  intro: "Produção audiovisual, edição e peças gráficas para marcas que querem aparecer com presença — e não só preencher o feed.",
  whatsapp: "5567999999999",
  instagram: "https://instagram.com/",
  email: "contato@seudominio.com",
};

export type Project = {
  title: string;
  client: string;
  category: "Gastronomia" | "Imobiliário" | "Saúde" | "Design" | "Eventos";
  format: "video" | "image";
  cover: string;
  media?: string;
  description: string;
  tag: string;
};

export const projects: Project[] = [
  {
    title: "Sabor em movimento",
    client: "Restaurante / substitua o nome",
    category: "Gastronomia",
    format: "video",
    cover: "linear-gradient(135deg, #6f2218, #d97745 55%, #f6c07c)",
    media: "/Videos/restaurante-01.mp4",
    description: "Filme vertical com foco na experiência, textura dos pratos e atmosfera da casa.",
    tag: "REEL · 00:28"
  },
  {
    title: "Sabor em movimento",
    client: "Restaurante / substitua o nome",
    category: "Gastronomia",
    format: "video",
    cover: "linear-gradient(135deg, #6f2218, #d97745 55%, #f6c07c)",
    media: "/Videos/restaurante-02.mp4",
    description: "Filme vertical com foco na experiência, textura dos pratos e atmosfera da casa.",
    tag: "REEL · 00:28"
  },
  {
    title: "Sabor em movimento",
    client: "Restaurante / substitua o nome",
    category: "Gastronomia",
    format: "video",
    cover: "linear-gradient(135deg, #6f2218, #d97745 55%, #f6c07c)",
    media: "/Videos/restaurante-03.mp4",
    description: "Filme vertical com foco na experiência, textura dos pratos e atmosfera da casa.",
    tag: "REEL · 00:28"
  },
  {
    title: "Um imóvel, uma experiência",
    client: "Imobiliária / substitua o nome",
    category: "Imobiliário",
    format: "video",
    cover: "linear-gradient(145deg, #182129, #526875 55%, #b6a28a)",
    media: "",
    description: "Tour dinâmico pensado para apresentar valor antes de apresentar metragem.",
    tag: "FILME · 00:42"
  },
  {
    title: "Autoridade que acolhe",
    client: "Clínica / substitua o nome",
    category: "Saúde",
    format: "video",
    cover: "linear-gradient(140deg, #193e3a, #67a499 58%, #e3d8c8)",
    media: "",
    description: "Conteúdo de autoridade com linguagem humana e estética limpa.",
    tag: "REEL · 00:35"
  },
  {
    title: "Campanha de lançamento",
    client: "Marca / substitua o nome",
    category: "Design",
    format: "image",
    cover: "linear-gradient(135deg, #2a1640, #9a3e72 55%, #ffb965)",
    media: "",
    description: "Sistema visual criado para apresentar uma campanha em diferentes formatos.",
    tag: "DESIGN · SOCIAL"
  },
  {
    title: "O dia começa antes da festa",
    client: "Espaço / substitua o nome",
    category: "Eventos",
    format: "video",
    cover: "linear-gradient(140deg, #35281e, #9a7957 58%, #e7d4b7)",
    media: "",
    description: "Bastidores, montagem e transformação do espaço até a chegada dos convidados.",
    tag: "AFTERMOVIE · 01:05"
  },
  {
    title: "Identidade em cada detalhe",
    client: "Projeto autoral",
    category: "Design",
    format: "image",
    cover: "linear-gradient(135deg, #111318, #313541 55%, #a6ff4d)",
    media: "",
    description: "Peças gráficas que mantêm unidade sem deixar o feed repetitivo.",
    tag: "DESIGN · IDENTIDADE"
  }
];

// GALERIA DE ARTES GRÁFICAS — troque title, client, cover e image.
// Em image, cole o endereço da imagem. Vazio = capa provisória em degradê.
export const graphicArts = [
  { title: "Campanha de lançamento", client: "Marca / substitua", type: "Social media", image: "", cover: "linear-gradient(145deg,#3a1231,#d34d6e 58%,#ffbd62)" },
  { title: "Identidade visual", client: "Projeto / substitua", type: "Branding", image: "", cover: "linear-gradient(145deg,#12151a,#414754 58%,#c6ff36)" },
  { title: "Carrossel editorial", client: "Cliente / substitua", type: "Carrossel", image: "", cover: "linear-gradient(145deg,#442011,#bc6136 58%,#f2d1a7)" },
  { title: "Key visual de evento", client: "Evento / substitua", type: "Campanha", image: "", cover: "linear-gradient(145deg,#121f35,#275d94 58%,#72d8e5)" },
  { title: "Peças promocionais", client: "Restaurante / substitua", type: "Social media", image: "", cover: "linear-gradient(145deg,#30150f,#9e3121 58%,#f0a558)" },
  { title: "Apresentação comercial", client: "Empresa / substitua", type: "Design", image: "", cover: "linear-gradient(145deg,#173128,#38725b 58%,#d8d1a3)" },
];
