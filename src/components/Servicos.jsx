import React from "react";
import { servicos } from "../constants";
import Card from "./Card";
import Badge from "./Badge";

const Servicos = () => (
  <section id="servicos" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
    <div className="mx-auto max-w-2xl text-center">
      <h3 className="font-serif text-3xl text-rose-800 sm:text-4xl">
        Cuidados que abraçam a sua pele
      </h3>
      <p className="mt-3 text-slate-600">
        Escolha o seu momento — cada serviço foi desenhado para equilibrar
        ciência e delicadeza.
      </p>
    </div>
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {servicos.map(({ icon: Icon, title, desc }) => (
        <Card key={title}>
          <div className="flex items-start gap-4">
            <div className="relative group/icon">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-rose-100 to-pink-100 ring-2 ring-rose-200/60 shadow-lg shadow-rose-100/30 transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:shadow-xl group-hover/icon:shadow-rose-200/40 group-hover/icon:ring-rose-300/80">
                <Icon className="h-7 w-7 text-rose-700 transition-colors duration-300 group-hover/icon:text-rose-800" />
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-200/20 to-pink-200/20 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 blur-sm" />
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
);

export default Servicos;
