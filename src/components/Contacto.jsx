import React from "react";
import { CalendarDays } from "lucide-react";
import { contactInfo, socialMedia } from "../constants";
import Card from "./Card";

const Contacto = () => (
  <section
    id="contacto"
    className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20"
  >
    <div className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-gradient-to-b from-pink-50 to-transparent" />
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <h3 className="font-serif text-2xl text-rose-800">Marcar consulta</h3>
        <p className="mt-2 text-sm text-slate-600">
          Deixe os seus dados e entraremos em contacto para confirmar o melhor
          horário.
        </p>
        <form className="mt-6 grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm text-slate-600">Nome</label>
            <input
              className="rounded-xl border border-rose-200 bg-white/70 px-4 py-3 outline-none ring-rose-300 placeholder:text-slate-400 focus:ring-2"
              placeholder="O seu nome"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-slate-600">Email</label>
            <input
              type="email"
              className="rounded-xl border border-rose-200 bg-white/70 px-4 py-3 outline-none ring-rose-300 placeholder:text-slate-400 focus:ring-2"
              placeholder="voce@email.com"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-slate-600">Telefone</label>
            <input
              className="rounded-xl border border-rose-200 bg-white/70 px-4 py-3 outline-none ring-rose-300 placeholder:text-slate-400 focus:ring-2"
              placeholder="(+351) 9xx xxx xxx"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-slate-600">
              Serviço de interesse
            </label>
            <select className="rounded-xl border border-rose-200 bg-white/70 px-4 py-3 outline-none ring-rose-300 focus:ring-2">
              <option>Limpeza de Pele Glow</option>
              <option>Tratamentos Corporais</option>
              <option>Skincare Personalizado</option>
              <option>Outra opção</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-slate-600">Mensagem</label>
            <textarea
              rows={4}
              className="rounded-xl border border-rose-200 bg-white/70 px-4 py-3 outline-none ring-rose-300 placeholder:text-slate-400 focus:ring-2"
              placeholder="Conte-nos um pouco sobre o que procura"
            />
          </div>
          <button
            type="button"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-rose-500 px-5 py-3 text-white shadow-lg shadow-rose-300/50 transition hover:translate-y-[-1px] hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-300"
          >
            <CalendarDays className="h-5 w-5" />
            Enviar pedido
          </button>
          <p className="text-xs text-slate-500">
            * Ao enviar, concorda com os nossos termos e política de
            privacidade.
          </p>
        </form>
      </Card>
      <div className="grid gap-6">
        <Card>
          <h3 className="font-serif text-2xl text-rose-800">Contactos</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-700">
            {contactInfo.map(({ icon: Icon, text }) => (
              <p key={text} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-rose-700" /> {text}
              </p>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            {socialMedia.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2 rounded-xl bg-rose-100 px-3 py-2 text-rose-700 ring-1 ring-rose-200 transition hover:bg-rose-200/40"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
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
);

export default Contacto;
