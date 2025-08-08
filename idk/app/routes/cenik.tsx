import Button from "~/elements/button";
import Navbar from "~/elements/navbar";
import type { Route } from "./+types/home";
import TextEl from "~/elements/textel";
import Image from "~/elements/image";
import { URL } from "url";
import Footer from "~/elements/footer";
import React from "react";
import Cenik1Tabulka from "~/elements/cenik1tabulka";
import Cenik2Tabulka from "~/elements/cenik2tabulka";
import Cenik3Tabulka from "~/elements/cenik3tabulka";
import Cenik4Tabulka from "~/elements/cenik4tabulka";
import Cenik5Tabulka from "~/elements/cenik5tabulka";
import Cenik6Tabulka from "~/elements/cenik6tabulka";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Masáže » Věra Zatloukalová" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Cenik() {
  return <div className="">
    <Navbar classes="bg-cyan-700/100 flex flex-row flex-wrap justify-center gap-3 p-2 relative z-10"> 
      <Button textProp="Úvod" hrefProp="../" classes="text-2xl font-semibold text-gray-50 m-3 hover:underline hover:scale-105 transition" />
      <Button textProp="Druhy Masáží" hrefProp="druhy" classes="text-2xl font-semibold text-gray-50 m-3 hover:underline hover:scale-105 transition" />
      <Button textProp="Ceník" hrefProp="#" classes="text-2xl font-semibold text-gray-50 m-3 underline scale-105 transition" />
      <Button textProp="Dárkové Poukazy" hrefProp="poukazy" classes="text-2xl font-semibold text-gray-50 m-3 hover:underline hover:scale-105 transition" />
      <Button textProp="Kontakt" hrefProp="kontakt" classes="text-2xl font-semibold text-gray-50 m-3 hover:underline hover:scale-105 transition" />
    </Navbar>
    <div className="h-8 bg-linear-to-b from-cyan-700/100 to-white/0 relative z-10"></div>
    <div className="bg-[url(/../img/bgImg3.jpg)] bg-cover bg-center bg-origin-border h-[400px] -mt-16 relative z-0 opacity-60 transition-all"></div>
    <div className="h-8 bg-linear-to-t from-cyan-700/100 to-white/0 -mt-8 relative z-10"></div>
    <div className="bg-cyan-700 p-0 lg:p-8">
      <TextEl classes="text-6xl xl:text-6xl font-black text-center bg-linear-to-br from-yellow-100 to-yellow-400 bg-clip-text text-transparent p-5">Ceník Masáží</TextEl>
      <TextEl classes="text-2xl text-center -mt-6 font-bold text-gray-50 italic">Ceny platné od 1. 1. 2025</TextEl>
      <TextEl classes="text-2xl text-center font-bold text-gray-50 italic">Nejsem plátce DPH!</TextEl>
      <div className="text-lg">
        <Cenik1Tabulka />
        <Cenik2Tabulka />
        <Cenik3Tabulka />
        <Cenik4Tabulka />
        <Cenik5Tabulka />
        <Cenik6Tabulka />
      </div>
      <div className="h-16"></div>
    </div>
    <Footer />
  </div>
}