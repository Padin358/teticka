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
      <Button textProp="Dárkové Poukazy" hrefProp="#" classes="text-2xl font-semibold text-gray-50 m-3 underline scale-105 transition" />
      <Button textProp="Kontakt" hrefProp="kontakt" classes="text-2xl font-semibold text-gray-50 m-3 hover:underline hover:scale-105 transition" />
    </Navbar>
    <div className="h-8 bg-linear-to-b from-cyan-700/100 to-white/0 relative z-10"></div>
    <div className="bg-[url(/../img/bgImg3.jpg)] bg-cover bg-center bg-origin-border h-[400px] -mt-16 relative z-0 opacity-60 transition-all"></div>
    <div className="h-8 bg-linear-to-t from-cyan-700/100 to-white/0 -mt-8 relative z-10"></div>
    <div className="bg-cyan-700 p-8">
      <TextEl classes="text-6xl xl:text-6xl font-black text-center bg-linear-to-br from-yellow-100 to-yellow-400 bg-clip-text text-transparent p-5">Dárkové Poukazy</TextEl>
      <div className="gap-10">
        <TextEl classes="mx-16 lg:mx-102 text-xl text-gray-50 mt-8 font-semibold">Chcete li obdarovat své blízké, přátele či obchodní partnery, využijte naši nabídky dárkových poukazů na naše služby. Poukázky si u nás můžete objednat telefonicky, e-mailem, nebo při domluvené masáži. </TextEl>
        <TextEl classes="mx-16 lg:mx-102 text-xl text-gray-50 mt-8 font-semibold">Cena za objednaný dárkový poukaz se bude rovnat vybrané masáži, vynásobené objednaným počtem masáží, nebo bude vystaven na libovolnou částku (např. 300 Kč), a jednotlivé masáže se budou z této částky odečítat, až bude hodnota poukazu vyčerpána.</TextEl>
        <TextEl classes="mx-16 lg:mx-102 text-2xl text-gray-50 mt-8 font-semibold"><strong className="font-black bg-linear-to-br from-yellow-100 to-yellow-400 bg-clip-text text-transparent">Dárkový poukaz je platný po dobu 6 měsíců ode dne vydání, nebo dle dohody.</strong></TextEl>
        <TextEl classes="mx-16 lg:mx-102 text-xl text-gray-50 mt-8 font-semibold">V případě Vaši návštěvy bez předchozí domluvy se může stát, že nebudeme mít čas se Vám okamžitě věnovat. Jistě uznáte, že není možné odcházet od klienta v průběhu masáže. Děkujeme Vám za pochopení.</TextEl>
      </div>
      <div className="h-32 lg:h-16"></div>
    </div>
    <Footer />
  </div>
}