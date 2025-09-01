import React from "react";
import { resultados } from "../constants";
import Card from "./Card";

const Resultados = () => (
  <section id="resultados" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
    <div className="mx-auto max-w-2xl text-center">
      <h3 className="font-serif text-3xl text-rose-800 sm:text-4xl">
        Antes & Depois
      </h3>
      <p className="mt-3 text-slate-600">
        Resultados naturais e progressivos que respeitam a sua beleza única.
      </p>
    </div>
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {resultados.map((r, idx) => (
        <Card key={idx}>
          <p className="mb-4 text-sm font-medium text-rose-700">{r.label}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl ring-1 ring-rose-200 shadow-sm">
              <img
                src={r.before}
                alt={`Antes - ${r.label}`}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden h-32 w-full items-center justify-center bg-rose-50 text-rose-400">
                <span className="text-sm">Imagem não disponível</span>
              </div>
              <figcaption className="bg-white/80 backdrop-blur-sm px-3 py-1 text-center text-xs text-slate-600 font-medium">
                Antes
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl ring-1 ring-rose-200 shadow-sm">
              <img
                src={r.after}
                alt={`Depois - ${r.label}`}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden h-32 w-full items-center justify-center bg-rose-50 text-rose-400">
                <span className="text-sm">Imagem não disponível</span>
              </div>
              <figcaption className="bg-white/80 backdrop-blur-sm px-3 py-1 text-center text-xs text-slate-600 font-medium">
                Depois
              </figcaption>
            </figure>
          </div>
        </Card>
      ))}
    </div>
  </section>
);

export default Resultados;
