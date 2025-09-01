import {
  Heart,
  Sparkles,
  Leaf,
  CalendarDays,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

export const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Resultados", href: "#resultados" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contacto", href: "#contacto" },
];

export const servicos = [
  {
    icon: Sparkles,
    title: "Limpeza de Pele Glow",
    desc: "Protocolo delicado para luminosidade e textura aveludada.",
  },
  {
    icon: Heart,
    title: "Tratamentos Corporais",
    desc: "Drenagem, modeladora e reafirmação com tecnologia de ponta.",
  },
  {
    icon: Leaf,
    title: "Skincare Personalizado",
    desc: "Planos sob medida para diferentes tipos e necessidades de pele.",
  },
];

export const resultados = [
  {
    before: "/image-4.png",
    after: "/image-3.png",
    label: "Luminosidade & Textura",
  },
  {
    before: "/image-6.png",
    after: "/image-5.png",
    label: "Uniformização do Tom",
  },
];

export const depoimentos = [
  {
    nome: "Beatriz S.",
    texto:
      "Senti a pele mais leve e luminosa logo na primeira sessão. O ambiente é um encanto!",
  },
  {
    nome: "Mariana P.",
    texto:
      "Atenção aos detalhes e um cuidado super humano. Virou meu lugar favorito.",
  },
  {
    nome: "Carolina M.",
    texto: "Resultados reais e naturais. Recomendo sem pensar duas vezes!",
  },
];

export const footerLinks = [
  {
    title: "Links rápidos",
    links: [
      { label: "Serviços", href: "#servicos" },
      { label: "Sobre", href: "#sobre" },
      { label: "Resultados", href: "#resultados" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Informações",
    links: [
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Serviço", href: "#" },
      { label: "Consentimento de Tratamentos", href: "#" },
    ],
  },
];

export const socialMedia = [
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "#",
    label: "Facebook",
  },
  {
    icon: MessageCircle,
    href: "#",
    label: "WhatsApp",
  },
];

export const contactInfo = [
  {
    icon: MapPin,
    text: "Rua das Flores, 123 — Centro, Porto",
  },
  {
    icon: Phone,
    text: "(+351) 912 345 678",
  },
  {
    icon: Mail,
    text: "atendimento@essenza.pt",
  },
  {
    icon: Clock,
    text: "Seg–Sex: 9h–19h • Sáb: 9h–13h",
  },
];
