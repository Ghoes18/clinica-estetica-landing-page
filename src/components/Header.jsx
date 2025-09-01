import React from "react";
import { Heart } from "lucide-react";
import { nav } from "../constants";
import CTAButton from "./CTAButton";

const Header = () => (
  <header className="sticky top-0 z-50 border-b border-rose-100/70 bg-white/60 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
      <a href="#" className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-rose-200/70 ring-1 ring-rose-300">
          <Heart className="h-5 w-5 text-rose-700" />
        </div>
        <div>
          <p className="text-sm tracking-wide text-rose-500">Clínica</p>
          <h1 className="font-serif text-xl text-rose-700">
            Essenza Estética
          </h1>
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
      <CTAButton className="md:hidden">Agendar</CTAButton>
    </div>
  </header>
);

export default Header;
