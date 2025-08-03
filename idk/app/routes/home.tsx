import Button from "~/elements/button";
import Navbar from "~/elements/navbar";
import type { Route } from "./+types/home";
import TextEl from "~/elements/textel";
import Image from "~/elements/image";
import { URL } from "url";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Masáže » Věra Zatloukalová" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div className="">
    <Navbar classes="bg-cyan-700/100 flex flex-row flex-wrap justify-center gap-3 p-2 relative z-10"> 
      <Button textProp="Úvod" hrefProp="#" classes="text-2xl font-semibold text-gray-50 m-3 underline scale-105" />
      <Button textProp="Druhy Masáží" hrefProp="druhy" classes="text-2xl font-semibold text-gray-50 m-3 hover:underline hover:scale-105 transition" />
      <Button textProp="Masážní Oleje" hrefProp="oleje" classes="text-2xl font-semibold text-gray-50 m-3 hover:underline hover:scale-105 transition" />
      <Button textProp="Ceník" hrefProp="cenik" classes="text-2xl font-semibold text-gray-50 m-3 hover:underline hover:scale-105 transition" />
      <Button textProp="Dárkové Poukazy" hrefProp="poukazy" classes="text-2xl font-semibold text-gray-50 m-3 hover:underline hover:scale-105 transition" />
      <Button textProp="Kontakt" hrefProp="kontakt" classes="text-2xl font-semibold text-gray-50 m-3 hover:underline hover:scale-105 transition" />
    </Navbar>
    <div className="h-8 bg-linear-to-b from-cyan-700/100 to-white/0 relative z-10"></div>
    <div className="bg-[url(../../public/img/bgImg3.jpg)] bg-cover bg-center bg-origin-border h-[700px] -mt-16 relative z-0 opacity-60"></div>
    <div className="h-8 bg-linear-to-t from-cyan-700/100 to-white/0 -mt-8 relative z-10"></div>
    <div className="bg-cyan-700 p-8">
      <TextEl classes="text-6xl xl:text-8xl font-black text-center bg-linear-to-br from-yellow-100 to-yellow-400 bg-clip-text text-transparent p-5">MASÁŽE</TextEl>
      <TextEl classes="text-4xl text-center -mt-8 font-semibold text-gray-50 italic">Věra Zatloukalová</TextEl>
    </div>
  </div>
}