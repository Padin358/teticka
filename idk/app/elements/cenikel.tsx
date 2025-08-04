import { useState } from "react"
import CenikBtn from "./cenikBtn"
import Cenik1Tabulka from "./cenik1tabulka"
import Cenik2Tabulka from "./cenik2tabulka"
import Cenik3Tabulka from "./cenik3tabulka"
import Cenik4Tabulka from "./cenik4tabulka"
import Cenik5Tabulka from "./cenik5tabulka"
import Cenik6Tabulka from "./cenik6tabulka"

const CenikEl = () => {
  const [activeTab, setActiveTab] = useState(1)
  const renderTabulka = () => {
    switch (activeTab) {
      case 1: return <Cenik1Tabulka />
      case 2: return <Cenik2Tabulka />
      case 3: return <Cenik3Tabulka />
      case 4: return <Cenik4Tabulka />
      case 5: return <Cenik5Tabulka />
      case 6: return <Cenik6Tabulka />
      default: return null
    }
  }

  return (
    <div className="mt-10 w-2/3 mx-auto grid grid-rows-2">
      <div className="flex flex-row flex-wrap justify-center text-gray-50 font-semibold text-xl h-8">
        <CenikBtn classes="p-5 border-cyan-900 border-2 cursor-pointer hover:bg-cyan-800" clickProp={() => setActiveTab(1)}>Klasické masáže</CenikBtn>
        <CenikBtn classes="p-5 border-cyan-900 border-2 cursor-pointer hover:bg-cyan-800" clickProp={() => setActiveTab(2)}>Hawai masáž</CenikBtn>
        <CenikBtn classes="p-5 border-cyan-900 border-2 cursor-pointer hover:bg-cyan-800" clickProp={() => setActiveTab(3)}>Holistická aroma...</CenikBtn>
        <CenikBtn classes="p-5 border-cyan-900 border-2 cursor-pointer hover:bg-cyan-800" clickProp={() => setActiveTab(4)}>Reflexní terapie</CenikBtn>
        <CenikBtn classes="p-5 border-cyan-900 border-2 cursor-pointer hover:bg-cyan-800" clickProp={() => setActiveTab(5)}>MLM</CenikBtn>
        <CenikBtn classes="p-5 border-cyan-900 border-2 cursor-pointer hover:bg-cyan-800" clickProp={() => setActiveTab(6)}>SPINAL TOUCH</CenikBtn>
      </div>
      <div className="" id="cenikTabulkaId">
        {renderTabulka()}
      </div>
    </div>
  )
}

export default CenikEl