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
      <TextEl classes="text-4xl text-center -mt-8 font-bold text-gray-50 italic">Věra Zatloukalová</TextEl>
      <div className="gap-10">
        <TextEl classes="mx-64 text-xl text-gray-50 mt-8 font-semibold">Masáže jsou <strong className="font-black bg-linear-to-br from-yellow-100 to-yellow-400 bg-clip-text text-transparent">nejstarším léčebným prostředkem</strong> který se užívá k odstranění bolesti, navodění dobré nálady a k zotavení svalstva již po celá tisíciletí. Masáže tedy představují vhodné obohacení, uvolnění, rehabilitaci a regeneraci těla i ducha. Pokud Vás např. trápí bolesti nohou, zad nebo šíje, <strong className="font-black bg-linear-to-br from-yellow-100 to-yellow-400 bg-clip-text text-transparent">mohou Vám masáže pomoci!</strong></TextEl>
        <TextEl classes="mx-64 text-xl text-gray-50 mt-8 font-semibold">Masáže <strong className="font-black bg-linear-to-br from-yellow-100 to-yellow-400 bg-clip-text text-transparent">mají mnoho pozitivních účinků</strong>. Jedná se především o prokrvení, díky masáži urychluje přísun kyslíku a živin, dále také zlepšuje krevní oběh, odstraňuje únavu, migrény, otoky, působí proti stresu, zmírňuje napětí svalů a zmírňuje bolest. </TextEl>
        <TextEl classes="mx-64 text-xl text-gray-50 mt-8 font-semibold"><strong className="font-black bg-linear-to-br from-yellow-100 to-yellow-400 bg-clip-text text-transparent">Masáže jsou určeny lidem</strong> se sedavým zaměstnáním, sportovcům, lidem s jednostrannou zátěží těla, lidem s bolesti nohou, zad, šíje, nebo lidem trpícím stresem nebo nedostatkem energie.</TextEl>
        <TextEl classes="mx-64 text-xl text-gray-50 mt-8 font-semibold"><strong className="font-black bg-linear-to-br from-yellow-100 to-yellow-400 bg-clip-text text-transparent">Masáž není vhodná</strong>, pokud trpíte akutním onemocněním, záněty kloubů, máte křečové žíly, kožní onemocnění, závažné onemocnění srdce.<br /><br /><strong className="font-black bg-linear-to-tl from-yellow-100 to-yellow-400 bg-clip-text text-transparent text-3xl">Před masáží doporučujeme probrat zdravotní stav s masérkou!</strong></TextEl>
        <TextEl classes="mx-64 text-xl text-gray-50 mt-8 font-semibold"><strong className="font-black bg-linear-to-tl from-yellow-100 to-yellow-400 bg-clip-text text-transparent">Masáže jsou většinou vnímány</strong> jako příjemná forma uvolnění, ale tak jako u cvičení je dobrá jistá pravidelnost.Samozřejmě, že pomůže i masáž 2x do roka, ale abychom si svou fyzickou i duševní kondici udržovali, <strong className="font-black bg-linear-to-tl from-yellow-100 to-yellow-400 bg-clip-text text-transparent">je lepší na masáže pravidelně</strong>. <br />Lidé nejvíce vyžadují masáž zad a šíje, ovšem masáž celého těla je mnohem příjemnější a užitečnější. <br />Pro preventivní účely je vhodné navštěvovat masáže alespoň jednou měsíčně, v případě nějakého problému i několikrát týdně.</TextEl>
      </div>
      <div className="h-16"></div>
    </div>
    <Footer />
  </div>
}