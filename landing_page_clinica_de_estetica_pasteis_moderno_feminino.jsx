import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Leaf, CalendarDays, Star, MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";

// Single-file React component — modern, pastel, feminine aesthetic clinic landing page
// TailwindCSS styling (no setup required here). Replace logos/images with your own.

const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Resultados", href: "#resultados" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contacto", href: "#contacto" },
];

const servicos = [
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

const resultados = [
  {
    before: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1522335789203-9ed94c0842d1?q=80&w=1200&auto=format&fit=crop",
    label: "Luminosidade & Textura",
  },
  {
    before: "https://images.unsplash.com/photo-1522335789203-0f4fd3b0f6f8?q=80&w=1200&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1522335789203-a581aa3e1f1f?q=80&w=1200&auto=format&fit=crop",
    label: "Uniformização do Tom",
  },
];

const depoimentos = [
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

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full bg-rose-100/70 px-3 py-1 text-rose-700 text-xs font-medium ring-1 ring-rose-200">
    {children}
  </span>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm ring-1 ring-rose-100 shadow-sm transition hover:shadow-md">
    <div className="absolute inset-0 bg-gradient-to-br from-rose-50/60 via-pink-50/40 to-purple-50/40 opacity-60" />
    <div className="relative p-6 sm:p-8">{children}</div>
  </div>
);

const HeroBlob = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-40 -left-24 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />
    <div className="absolute top-10 -right-20 h-[34rem] w-[34rem] rounded-full bg-pink-200/40 blur-3xl" />
    <div className="absolute bottom-[-6rem] left-1/3 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />
  </div>
);

const CTAButton = ({ children, href = "#contacto" }: { children: React.ReactNode; href?: string }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-2xl bg-rose-500 px-5 py-3 text-white shadow-lg shadow-rose-300/50 transition hover:translate-y-[-1px] hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-300"
  >
    <CalendarDays className="h-5 w-5" />
    {children}
  </a>
);

export default function EsteticaClinicLanding() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white text-slate-700">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-rose-100/70 bg-white/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-rose-200/70 ring-1 ring-rose-300">
              <Heart className="h-5 w-5 text-rose-700" />
            </div>
            <div>
              <p className="text-sm tracking-wide text-rose-500">Clínica</p>
              <h1 className="font-serif text-xl text-rose-700">Essenza Estética</h1>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-slate-600 transition hover:text-rose-700"
              >
                {n.label}
              </a>
            ))}
            <CTAButton>Marcar Consulta</CTAButton>
          </nav>

          <a href="#contacto" className="md:hidden">
            <CTAButton>Agendar</CTAButton>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <HeroBlob />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Badge>Beleza real, cuidado autêntico</Badge>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-rose-800 sm:text-5xl">
                  Toque delicado, resultados que iluminam a sua pele
                </h2>
                <p className="mt-4 max-w-xl text-slate-600">
                  Protocolos exclusivos com tecnologia suave e eficiente para realçar o melhor de si, com um toque feminino e acolhedor.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <CTAButton>Reservar um horário</CTAButton>
                  <a href="#servicos" className="inline-flex rounded-2xl px-5 py-3 text-rose-700 ring-1 ring-rose-300 transition hover:bg-rose-50">
                    Conhecer serviços
                  </a>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-rose-700">
                  <Star className="h-4 w-4 fill-rose-500/80 text-rose-500" />
                  <span>4.9/5 por mais de 1.200 clientes</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-rose-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=1400&auto=format&fit=crop"
                  alt="Atendimento estético em ambiente suave"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-50/0 via-rose-50/0 to-white/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="font-serif text-3xl text-rose-800 sm:text-4xl">Cuidados que abraçam a sua pele</h3>
          <p className="mt-3 text-slate-600">Escolha o seu momento — cada serviço foi desenhado para equilibrar ciência e delicadeza.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map(({ icon: Icon, title, desc }) => (
            <Card key={title}>
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-rose-100 ring-1 ring-rose-200">
                  <Icon className="h-6 w-6 text-rose-700" />
                </div>
                <div>
                  <h4 className="font-medium text-rose-800">{title}</h4>
                  <p className="mt-1 text-sm text-slate-600">{desc}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge>Consulta gratuita</Badge>
                <Badge>Planos 100% personalizados</Badge>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Card>
            <div className="prose prose-rose max-w-none prose-p:leading-relaxed">
              <h3 className="font-serif text-3xl text-rose-800">Uma equipa dedicada ao seu bem-estar</h3>
              <p>
                Na Essenza Estética, combinamos técnicas avançadas com um acolhimento humano e gentil. Cada detalhe — da avaliação ao pós-tratamento — é pensado para que se sinta confiante, confortável e radiante.
              </p>
              <ul className="mt-4 grid list-disc gap-2 pl-5 text-slate-700 sm:grid-cols-2">
                <li>Protocolos aprovados por especialistas</li>
                <li>Ambiente sensorial e relaxante</li>
                <li>Equipamentos de última geração</li>
                <li>Acompanhamento próximo</li>
              </ul>
              <div className="mt-6">
                <CTAButton>Quero uma avaliação</CTAButton>
              </div>
            </div>
          </Card>
          <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-rose-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1560930950-73b0aa76c2d2?q=80&w=1200&auto=format&fit=crop"
              alt="Espaço da clínica com atmosfera suave"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section id="resultados" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="font-serif text-3xl text-rose-800 sm:text-4xl">Antes & Depois</h3>
          <p className="mt-3 text-slate-600">Resultados naturais e progressivos que respeitam a sua beleza única.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {resultados.map((r, idx) => (
            <Card key={idx}>
              <p className="mb-4 text-sm font-medium text-rose-700">{r.label}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <figure className="overflow-hidden rounded-2xl ring-1 ring-rose-200">
                  <img src={r.before} alt="Antes" className="h-full w-full object-cover" />
                  <figcaption className="bg-white/70 px-3 py-1 text-center text-xs text-slate-600">Antes</figcaption>
                </figure>
                <figure className="overflow-hidden rounded-2xl ring-1 ring-rose-200">
                  <img src={r.after} alt="Depois" className="h-full w-full object-cover" />
                  <figcaption className="bg-white/70 px-3 py-1 text-center text-xs text-slate-600">Depois</figcaption>
                </figure>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="font-serif text-3xl text-rose-800 sm:text-4xl">O que dizem sobre nós</h3>
          <p className="mt-3 text-slate-600">Experiências reais de quem confia no nosso cuidado.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d) => (
            <Card key={d.nome}>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-rose-100 ring-1 ring-rose-200">
                  <Star className="h-5 w-5 text-rose-700" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Cliente</p>
                  <h4 className="font-medium text-rose-800">{d.nome}</h4>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">“{d.texto}”</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Contacto / Agendamento */}
      <section id="contacto" className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-gradient-to-b from-pink-50 to-transparent" />
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <h3 className="font-serif text-2xl text-rose-800">Marcar consulta</h3>
            <p className="mt-2 text-sm text-slate-600">Deixe os seus dados e entraremos em contacto para confirmar o melhor horário.</p>
            <form className="mt-6 grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm text-slate-600">Nome</label>
                <input className="rounded-xl border border-rose-200 bg-white/70 px-4 py-3 outline-none ring-rose-300 placeholder:text-slate-400 focus:ring-2" placeholder="O seu nome" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" className="rounded-xl border border-rose-200 bg-white/70 px-4 py-3 outline-none ring-rose-300 placeholder:text-slate-400 focus:ring-2" placeholder="voce@email.com" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-slate-600">Telefone</label>
                <input className="rounded-xl border border-rose-200 bg-white/70 px-4 py-3 outline-none ring-rose-300 placeholder:text-slate-400 focus:ring-2" placeholder="(+351) 9xx xxx xxx" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-slate-600">Serviço de interesse</label>
                <select className="rounded-xl border border-rose-200 bg-white/70 px-4 py-3 outline-none ring-rose-300 focus:ring-2">
                  <option>Limpeza de Pele Glow</option>
                  <option>Tratamentos Corporais</option>
                  <option>Skincare Personalizado</option>
                  <option>Outra opção</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-slate-600">Mensagem</label>
                <textarea rows={4} className="rounded-xl border border-rose-200 bg-white/70 px-4 py-3 outline-none ring-rose-300 placeholder:text-slate-400 focus:ring-2" placeholder="Conte-nos um pouco sobre o que procura" />
              </div>
              <button type="button" className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-rose-500 px-5 py-3 text-white shadow-lg shadow-rose-300/50 transition hover:translate-y-[-1px] hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-300">
                <CalendarDays className="h-5 w-5" />
                Enviar pedido
              </button>
              <p className="text-xs text-slate-500">* Ao enviar, concorda com os nossos termos e política de privacidade.</p>
            </form>
          </Card>

          <div className="grid gap-6">
            <Card>
              <h3 className="font-serif text-2xl text-rose-800">Contactos</h3>
              <div className="mt-4 grid gap-3 text-sm text-slate-700">
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-rose-700" /> Rua das Flores, 123 — Centro, Porto</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-rose-700" /> (+351) 912 345 678</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-rose-700" /> atendimento@essenza.pt</p>
                <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-rose-700" /> Seg–Sex: 9h–19h • Sáb: 9h–13h</p>
              </div>
              <div className="mt-5 flex gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-rose-100 px-3 py-2 text-rose-700 ring-1 ring-rose-200 transition hover:bg-rose-200/40"><Instagram className="h-4 w-4"/>Instagram</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-rose-100 px-3 py-2 text-rose-700 ring-1 ring-rose-200 transition hover:bg-rose-200/40"><Facebook className="h-4 w-4"/>Facebook</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-rose-100 px-3 py-2 text-rose-700 ring-1 ring-rose-200 transition hover:bg-rose-200/40"><MessageCircle className="h-4 w-4"/>WhatsApp</a>
              </div>
            </Card>

            <Card>
              <h3 className="font-serif text-2xl text-rose-800">Onde estamos</h3>
              <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-rose-200">
                <iframe
                  title="Mapa Essenza"
                  className="h-64 w-full"
                  loading="lazy"
                  src="https://maps.google.com/maps?q=Porto%20Portugal&t=&z=13&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-rose-100/70 bg-white/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-rose-200/70 ring-1 ring-rose-300">
                <Heart className="h-5 w-5 text-rose-700" />
              </div>
              <div>
                <p className="text-sm tracking-wide text-rose-500">Clínica</p>
                <p className="font-serif text-lg text-rose-800">Essenza Estética</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600">Cuidamos de si com ciência, carinho e resultados que respeitam a sua beleza natural.</p>
          </div>
          <div className="text-sm">
            <h4 className="font-medium text-rose-800">Links rápidos</h4>
            <ul className="mt-3 space-y-2">
              {nav.map((n) => (
                <li key={n.href}><a className="text-slate-600 hover:text-rose-700" href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="text-sm">
            <h4 className="font-medium text-rose-800">Informações</h4>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>Política de Privacidade</li>
              <li>Termos de Serviço</li>
              <li>Consentimento de Tratamentos</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-rose-100/70 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Essenza Estética — Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
