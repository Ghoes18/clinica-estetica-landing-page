import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";
import Resultados from "./components/Resultados";
import Depoimentos from "./components/Depoimentos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

const App = () => (
  <main className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white text-slate-700">
    <Header />
    <Hero />
    <Servicos />
    <Sobre />
    <Resultados />
    <Depoimentos />
    <Contacto />
    <Footer />
  </main>
);

export default App;
