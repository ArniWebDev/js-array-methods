console.log("Benne van-e a tömbben?");
// Kezdoertekkel latjuk el a tombunket
let arr = ["alma", "korte", "alma", "citrom", "alma", "malna", "barack"];

//1. Hogyan határozom meg, hogy egy elem benne van-e a tömbben?
// includes(elem) fuggveny egy boolean-t terit vissza, true erteket ha benne van az elem a tombben illetvefalse erteket ha nincs benne

// Olyan elemre keresunk ra ami benne van a tombben
console.log(arr.includes("citrom")); //=> true
// Olyan elemre keresunk ra ami NINCS benne van a tombben
console.log(arr.includes("eper")); //=> false

// Az includes fuggvenyenk van egy masodik opcionalis parametere is, amivel a kiindulasi indexre vonatkozunk, ez alapbol 0

// az utolso "alma" string pont a 4. indexen helyezkedik el, igy pont benne lesz a keresesi tartomanyban
console.log(arr.includes("alma", 4)); //=> true
// az "alma" string mar nincs benne a keresesi tartomanyban
console.log(arr.includes("alma", 5)); //=> false

//2. Melyik indexen találom az elemet?
// Az indexOf(elem) fuggvenyt hasznaljuk es visszateriti az ELSO elofordulasi indexet az elemnek vagy -1 erteket ha az elem nincs a tombben
// Az indexOf() fuggvenynek is van egy masodik, opcionalis parametere, amivel a kiindulasi indexet hatarozzuk meg

// Olyan elemre keresunk ra ami benne van a tombben
console.log(arr.indexOf("alma")); //=> 0 - mivel a 0. indexen talalhato az elso "alma" string
// Olyan elemre keresunk ra ami NINCS benne van a tombben
console.log(arr.indexOf("eper")); //=> -1

//3. Melyik az utolsó elõfordulási indexe az elemnek?
// Az latIndexOf(elem) fuggvenyt hasznaljuk es visszateriti az UTOLSO elofordulasi indexet az elemnek vagy -1 erteket ha az elem nincs a tombben
// Az lastIndexOf() fuggvenynek is van egy masodik, opcionalis parametere, amivel a kiindulasi indexet hatarozzuk meg

// Olyan elemre keresunk ra ami benne van a tombben
console.log(arr.lastIndexOf("alma")); //=> 4 - mivel a 4. indexen talalhato az utolso "alma" string
// Olyan elemre keresunk ra ami NINCS benne van a tombben
console.log(arr.lastIndexOf("eper")); //=> -1
