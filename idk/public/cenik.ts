import type { cenik1type, cenik2type } from "~/types";

export const cenik1: cenik1type[] = [
    { nazev: "Záda", doba: 30, cena: 390 },
    { nazev: "Šíje", doba: 15, cena: 200 },
    { nazev: "Záda + šíje", doba: 40, cena: 490 },
    { nazev: "Horní končetiny", doba: 30, cena: 390 },
    { nazev: "Dolní končetiny", doba: 40, cena: 490 },
    { nazev: "Záda + šíje + ruce", doba: 60, cena: 690 },
    { nazev: "Záda + šíje + nohy", doba: 90, cena: 890 },
    { nazev: "Celková masáž", doba: 105, cena: 1100 },
]

export const cenik2: cenik2type[] = [
    {nazev: "Celková masáž", doba: 105, cena: 990, poznamka: "záda, šíje, horní a dolní končetiny, břícho, hrudník, obličej, hlava"},
    {nazev: "Částečná masáž", doba: 60, cena: 690, poznamka: "dle přání klienta - např. obličej, hlava, dekolt, šíje"},
]

export const cenik3: cenik2type[] = [
    {nazev: "Celková masáž", doba: 105, cena: 990, poznamka: "záda, šíje, horní a dolní končetiny, břícho, hrudník, obličej, hlava"},
    {nazev: "Částečná masáž", doba: 60, cena: 690, poznamka: "dle přání klienta - např. obličej, hlava, dekolt, šíje"},
]

export const cenik4: cenik2type[] = [
    {nazev: "Chodidla", doba: 60, cena: 690, poznamka: "body na chodidlech"},
]

export const cenik5: cenik2type[] = [
    {nazev: "MLM 30", doba: 30, cena: 390, poznamka: "obličej + hlava, nebo horní končetiny"},
    {nazev: "MLM 60", doba: 60, cena: 690, poznamka: "dolní končetiny"},
    {nazev: "MLM 90", doba: 90, cena: 950, poznamka: "dolní polovina těla, nebo horní polovina těla"},
    {nazev: "MLM 120", doba: 120, cena: 1150, poznamka: "kombinace variant 30, 60, 90, nebo dle přání klienta"},
    {nazev: "MLM 180", doba: 180, cena: 1500, poznamka: "celé tělo"},
]

export const cenik6: cenik2type[] = [
    {nazev: "Spinal Touch", doba: 60, cena: 690, poznamka: "Tato metoda je jemná neinvazivní doteková terapie. Při aplikaci metody se napravuje těžiště těla, uvolňuje se pánevní oblast a křížokyčelobederní skloubení. Zlepšuje průtok energie v těle a stimuluje tělesné orgány."},
]