import React from "react";
import { Star } from "lucide-react";
import { depoimentos } from "../constants";
import Card from "./Card";

const Depoimentos = () => (
  <section id="depoimentos" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
    <div className="mx-auto max-w-2xl text-center">
      <h3 className="font-serif text-3xl text-rose-800 sm:text-4xl">
        O que dizem sobre nós
      </h3>
      <p className="mt-3 text-slate-600">
        Experiências reais de quem confia no nosso cuidado.
      </p>
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
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            “{d.texto}”
          </p>
        </Card>
      ))}
    </div>
  </section>
);

export default Depoimentos;
