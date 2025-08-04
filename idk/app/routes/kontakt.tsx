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

export default function Poukazy() {
  return <div className="">
    <Navbar classes="bg-cyan-700/100 flex flex-row flex-wrap justify-center gap-3 p-2 relative z-10"> 
      <Button textProp="Úvod" hrefProp="../" classes="text-2xl font-semibold text-gray-50 m-3 hover:underline hover:scale-105 transition" />
      <Button textProp="Druhy Masáží" hrefProp="druhy" classes="text-2xl font-semibold text-gray-50 m-3 hover:underline hover:scale-105 transition" />
      <Button textProp="Ceník" hrefProp="cenik" classes="text-2xl font-semibold text-gray-50 m-3 hover:underline hover:scale-105 transition" />
      <Button textProp="Dárkové Poukazy" hrefProp="poukazy" classes="text-2xl font-semibold text-gray-50 m-3 hover:underline hover:scale-105 transition" />
      <Button textProp="Kontakt" hrefProp="#" classes="text-2xl font-semibold text-gray-50 m-3 underline scale-105 transition" />
    </Navbar>
    <div className="h-8 bg-linear-to-b from-cyan-700/100 to-white/0 relative z-10"></div>
    <div className="bg-[url(../../public/img/bgImg3.jpg)] bg-cover bg-center bg-origin-border h-[400px] -mt-16 relative z-0 opacity-60   transition-all"></div>
    <div className="h-8 bg-linear-to-t from-cyan-700/100 to-white/0 -mt-8 relative z-10"></div>
    <div className="bg-cyan-700 p-8">
      <TextEl classes="text-6xl xl:text-6xl font-black text-center bg-linear-to-br from-yellow-100 to-yellow-400 bg-clip-text text-transparent p-5">Kontakt</TextEl>
      <div className="grid grid-cols-2">
        <div className="mx-auto my-auto">
          <TextEl classes="text-3xl font-extrabold italic text-gray-50">Věra Zatloukalová</TextEl>
          <TextEl classes="text-xl font-semibold text-gray-50">Vrchlického 75</TextEl>
          <TextEl classes="text-xl font-semibold text-gray-50">Brodek u Přerova</TextEl>
          <TextEl classes="text-xl font-semibold text-gray-50">751 03</TextEl>
          <div className="gap-7 mt-10">
            <TextEl classes="text-gray-50 text-xl">IČ: <strong className="font-semibold">74557106</strong></TextEl>
            <TextEl classes="text-gray-50 text-xl">Mobil: <strong className="font-semibold">776 02 11 66</strong></TextEl>
            <TextEl classes="text-gray-50 text-xl">E-Mail: <a className="font-extrabold bg-linear-to-br from-yellow-100 to-yellow-400 bg-clip-text text-transparent" href="mailto:zatloukalova@masaze-brodek.cz">zatloukalova@masaze-brodek.cz</a></TextEl> 
            <TextEl classes="text-gray-50 text-xl"><strong className="font-black bg-linear-to-tl from-yellow-100 to-yellow-400 bg-clip-text text-transparent text-2xl">Objednávky na mobil!</strong></TextEl> 
          </div>
        </div>
        <Image source="../../public/img/dum.jpg" classes="h-48 xl:h-164 mx-auto rounded-2xl opacity-85"></Image>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41478.01857369898!2d17.346332773908177!3d49.477401068074435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713acd1f4a08de5%3A0x64683479f457485d!2zTWFzYcW-ZSBWxJtyYSBaYXRsb3VrYWxvdsOh!5e0!3m2!1scs!2scz!4v1754310918920!5m2!1scs!2scz" className="mt-16 w-full h-64 rounded-4xl"></iframe>
      <div className="h-16"></div>
    </div>
    <Footer />
  </div>
}