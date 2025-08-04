import Button from "~/elements/button";
import Navbar from "~/elements/navbar";
import type { Route } from "./+types/home";
import TextEl from "~/elements/textel";
import Image from "~/elements/image";
import { URL } from "url";
import Footer from "~/elements/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Masáže » Věra Zatloukalová" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Druhy() {
  return <div className="">
    <Navbar classes="bg-cyan-700/100 flex flex-row flex-wrap justify-center gap-3 p-2 relative z-10"> 
      <Button textProp="Úvod" hrefProp="../" classes="text-2xl font-semibold text-gray-50 m-3 hover:underline hover:scale-105 transition" />
      <Button textProp="Druhy Masáží" hrefProp="#" classes="text-2xl font-semibold text-gray-50 m-3 underline scale-105 transition" />
      <Button textProp="Ceník" hrefProp="cenik" classes="text-2xl font-semibold text-gray-50 m-3 hover:underline hover:scale-105 transition" />
      <Button textProp="Dárkové Poukazy" hrefProp="poukazy" classes="text-2xl font-semibold text-gray-50 m-3 hover:underline hover:scale-105 transition" />
      <Button textProp="Kontakt" hrefProp="kontakt" classes="text-2xl font-semibold text-gray-50 m-3 hover:underline hover:scale-105 transition" />
    </Navbar>
    <div className="h-8 bg-linear-to-b from-cyan-700/100 to-white/0 relative z-10"></div>
    <div className="bg-[url(../../public/img/bgImg3.jpg)] bg-cover bg-center bg-origin-border h-[400px] -mt-16 relative z-0 opacity-60 transition-all"></div>
    <div className="h-8 bg-linear-to-t from-cyan-700/100 to-white/0 -mt-8 relative z-10"></div>
    <div className="bg-cyan-700 p-8">
      <TextEl classes="text-6xl xl:text-6xl font-black text-center bg-linear-to-br from-yellow-100 to-yellow-400 bg-clip-text text-transparent p-5">Druhy Masáží</TextEl>
      <div className="flex justify-center">
        <ul className="list-disc text-2xl marker:text-gray-50 text-gray-50 font-semibold mx-auto">
            <li className="my-1"><TextEl>Sportovní, rekondiční a regenerační masáže</TextEl></li>
            <li className="my-1"><TextEl>Hawai masáže</TextEl></li>
            <li className="my-1"><TextEl>Holistické aromaterapeutické masáže</TextEl></li>
            <li className="my-1"><TextEl>Reflexní terapie plosky nohy</TextEl></li>
            <li className="my-1"><TextEl>Manuální lymfatické masáže - MLM</TextEl></li>
            <li className="my-1"><TextEl>Spinal Touch</TextEl></li>
        </ul>
      </div>
      <div className="">
        <TextEl classes="text-3xl xl:text-3xl font-extrabold text-center bg-linear-to-br from-yellow-100 to-yellow-400 bg-clip-text text-transparent p-5 italic mt-16">V našem zařízení si můžete zvolit jednu z nabízených ručních masáží:</TextEl>
        <div className="flex justify-center">
            <ul className="list-disc text-2xl marker:text-gray-50 text-gray-50 font-semibold mx-auto">
                <li className="my-1"><TextEl>Masáž horních končetin</TextEl></li>
                <li className="my-1"><TextEl>Masáž dolních končetin</TextEl></li>
                <li className="my-1"><TextEl>Masáž zad</TextEl></li>
                <li className="my-1"><TextEl>Masáž zad + šíjí</TextEl></li>
                <li className="my-1"><TextEl>Masáž bříška</TextEl></li>
                <li className="my-1"><TextEl>Masáž hrudníku (jen u mužů)</TextEl></li>
                <li className="my-1"><TextEl>Celková masáž</TextEl></li>
            </ul>
        </div>
        <div className="w-164 mx-auto mt-10 text-xl text-gray-50">
            <TextEl classes="text-2xl xl:text-2xl font-bold bg-linear-to-br from-yellow-100 to-yellow-400 bg-clip-text text-transparent p-5 italic">Klasické ruční masáže</TextEl>
            <TextEl classes="-mt-4 font-semilight">Jde o masáž odstraňující únavu a posilující regeneraci organismu. Odstraňuje ochablost, ztuhlost, zkrácení a bolestivost svalstva. Napomáhá lepšímu prokrvení a návratu žilní krve a mízy z periferií do oběhového centra.</TextEl>
            <TextEl classes="font-semilight my-5">Při masáži dochází k rozšíření cév a následně k lepšímu prokrvení příslušných tkání, což se navenek projevuje jako příjemný pocit tepla.</TextEl>
            <TextEl classes="font-semilight">Zároveň působí masáž na zakončení nervstva a vlivem těchto podnětů dochází k uvolnění škodlivých látek do krevního řečiště a ty jsou díky intenzivnímu prokrvování vyplavovány z orgánů.</TextEl>
            <TextEl classes="mt-16 font-semibold">Masáže lze chápat jako doplněk léčby, nebo jako techniku sloužící k relaxaci organismu. Pravidelné masáže vedou k zachování fyzické i duševní svěžesti.</TextEl>
        </div>
      </div>
      <div className="h-16"></div>
    </div>
    <Footer />
  </div>
}