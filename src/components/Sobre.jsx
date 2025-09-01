import React from "react";
import Card from "./Card";
import CTAButton from "./CTAButton";

const Sobre = () => (
  <section id="sobre" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
    <div className="grid items-center gap-10 md:grid-cols-2">
      <Card>
        <div className="prose prose-rose max-w-none prose-p:leading-relaxed">
          <h3 className="font-serif text-3xl text-rose-800">
            Uma equipa dedicada ao seu bem-estar
          </h3>
          <p>
            Na Essenza Estética, combinamos técnicas avançadas com um
            acolhimento humano e gentil. Cada detalhe — da avaliação ao
            pós-tratamento — é pensado para que se sinta confiante,
            confortável e radiante.
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
          src="/image-2.png"
          alt="Sala de tratamento estético com equipamentos modernos e ambiente relaxante"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
);

export default Sobre;
