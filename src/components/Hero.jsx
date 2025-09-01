import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Badge from "./Badge";
import CTAButton from "./CTAButton";
import HeroBlob from "./HeroBlob";

const Hero = () => (
  <section className="relative">
    <HeroBlob />
    <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge>Beleza real, cuidado autêntico</Badge>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-rose-800 sm:text-5xl">
              Toque delicado, resultados que iluminam a sua pele
            </h2>
            <p className="mt-4 max-w-xl text-slate-600">
              Protocolos exclusivos com tecnologia suave e eficiente para
              realçar o melhor de si, com um toque feminino e acolhedor.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTAButton>Reservar um horário</CTAButton>
              <a
                href="#servicos"
                className="inline-flex rounded-2xl px-5 py-3 text-rose-700 ring-1 ring-rose-300 transition hover:bg-rose-50"
              >
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
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Clínica de estética moderna com ambiente relaxante e profissional"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-50/0 via-rose-50/0 to-white/20" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
