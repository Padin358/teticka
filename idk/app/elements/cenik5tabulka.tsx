import { cenik5 } from "public/cenik"
import React from "react"

const Cenik5Tabulka = () => {
    return (
        <table className="table-auto w-1/2 border-collapse border border-cyan-900 text-gray-50 mx-auto my-16 font-semibold">
        <thead>
            <tr className="bg-cyan-800 font-extrabold text-xl">
            <th className="border-2 border-cyan-900 p-2">Manuální lymfatická masáž - MLM</th>
            <th className="border-2 border-cyan-900 p-2">Doba</th>
            <th className="border-2 border-cyan-900 p-2">Cena</th>
            <th className="border-2 border-cyan-900 p-2">Masíruje se</th>
            </tr>
        </thead>
        <tbody>
            {cenik5.map((masaz, index) => (
            <tr key={index} className="hover:bg-cyan-800/70 transition duration-100">
                <td className="border-2 border-cyan-900 p-2">{masaz.nazev}</td>
                <td className="border-2 border-cyan-900 p-2 w-24">{masaz.doba + " min"}</td>
                <td className="border-2 border-cyan-900 p-2 w-24">{masaz.cena + " Kč"}</td>
                <td className="border-2 border-cyan-900 p-2">{masaz.poznamka}</td>
            </tr>
            ))}
        </tbody>
        </table>
    )
}

export default Cenik5Tabulka