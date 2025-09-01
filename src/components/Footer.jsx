import React from "react";
import { Heart } from "lucide-react";
import { footerLinks } from "../constants";

const Footer = () => (
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
        <p className="mt-3 text-sm text-slate-600">
          Cuidamos de si com ciência, carinho e resultados que respeitam a sua
          beleza natural.
        </p>
      </div>
      {footerLinks.map((section) => (
        <div key={section.title} className="text-sm">
          <h4 className="font-medium text-rose-800">{section.title}</h4>
          <ul className="mt-3 space-y-2">
            {section.links.map((link) => (
              <li key={link.label}>
                <a
                  className="text-slate-600 hover:text-rose-700"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="border-t border-rose-100/70 py-6 text-center text-xs text-slate-500">
      © {new Date().getFullYear()} Essenza Estética — Todos os direitos
      reservados.
    </div>
  </footer>
);

export default Footer;
