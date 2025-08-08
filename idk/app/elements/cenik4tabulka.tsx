import { cenik4 } from "public/cenik"
import React from "react"

const Cenik4Tabulka = () => {
    return (
        <table className="table-auto w-full lg:w-2/3 border-collapse border border-cyan-900 text-gray-50 mx-auto my-16 font-semibold scale-85 lg:scale-100" id="4">
        <thead>
            <tr className="bg-cyan-800 font-extrabold text-sm lg:text-xl">
            <th className="border-2 border-cyan-900 p-2 w-124">Reflexní terapie plosky nohy</th>
            <th className="border-2 border-cyan-900 p-2 w-28">Doba</th>
            <th className="border-2 border-cyan-900 p-2 w-28">Cena</th>
            <th className="border-2 border-cyan-900 p-2">Masíruje se</th>
            </tr>
        </thead>
        <tbody>
            {cenik4.map((masaz, index) => (
            <tr key={index} className="hover:bg-cyan-800/70 transition duration-100">
                <td className="border-2 border-cyan-900 p-2 text-sm lg:text-2xl">{masaz.nazev}</td>
                <td className="border-2 border-cyan-900 p-2 w-24">{masaz.doba + " min"}</td>
                <td className="border-2 border-cyan-900 p-2 w-24">{masaz.cena + " Kč"}</td>
                <td className="border-2 border-cyan-900 p-2 text-sm lg:text-lg">{masaz.poznamka}</td>
            </tr>
            ))}
        </tbody>
        </table>
    )
}

export default Cenik4Tabulka