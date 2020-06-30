console.log("Tömb elemeinek módosítása");

// Kezdoertekkel latjuk el a tombjeinket
let arr = ["alma", "korte", "szeder", "citrom", "dinnye", "malna", "barack"];
console.log("Az arr:", arr);

let arrNested = [
  "alma",
  "korte",
  ["szeder", "citrom", ["dinnye", "malna"]],
  "barack",
];
console.log("Az arrNested", arrNested);

// 1. Hogyan módosítjuk a tömb egy tetszõleges elemét?
// Kivalasztunk egy adott indexen levo elemet es feluirjuk ertekadassal az erteket
arr[0] = "dio"; // ["dio", "korte", "szeder", "citrom", "dinnye", "malna", "barack"] "dio" ertek lesz az arr 0. indexen
console.log("1.1", arr);

// 2.Hogyan tüntetjük el a beágyazott tömböket?
// A flat(szam) metodust hasznaljuk es jelen esetben a szam azt jeleni, hogy milyen melyen szeretnek eltuntetni a beagyazott tomboket
console.log("2.1", arrNested.flat(1));
// ha minden beagyazott/nested array-t elakarunk tuntetni akkor a Infinity erteket kell hasznaljuk
console.log("2.2", arrNested.flat(Infinity));

// 3. Hogyan vágunk ki egy adott részt a tömbbõl?
// A slice metodust hasznaljuk o letrehoz egy altombot
// A fuggvenynek ket erteket adhatunk egy start illetve end-et

// reset
arr = ["alma", "korte", "szeder", "citrom", "dinnye", "malna", "barack"];

// Ha csak a start erteket adjuk meg, az adott indextol egesz a tomb vegeig keszit metszetet
console.log("3.1", arr.slice(2)); // ["szeder", "citrom", "dinnye", "malna", "barack"]

// ha meghatarozzuk az end parameterrel, hogy meddig szeretnenk, hogy terjedjen a metszet az end indexen levo elemet nem tartalmazza majd
console.log("3.2", arr.slice(2, 4)); // ["szeder", "citrom"]

// 4. Hogyan törlünk elemet/elemeket?
// Erre a splice() metodus a legalkalmasabb
// Ez a metodus modositja a kezdeti tombot
// Ha a slice metodusnak csak egy parametert adunk, ami csak szam lehet, akkor attol az indextol kiindulva minden elemet torol
arr.splice(2);
console.log("4.1", arr); // ["alma", "korte"]

// reset
arr = ["alma", "korte", "szeder", "citrom", "dinnye", "malna", "barack"];

// Ha a masodik parametert is hozzaadjuk, ami ugyancsak szam tipusu kell legyen, meghatarozzuk, hogy hany elemet is toroljon a kiindulasi indextol
// Ha ez az ertek 0, akkor nem modositja a tombot
arr.splice(2, 3);
console.log("4.2", arr); // ["alma", "korte", "malna", "barack"]

// 5. Hogyan szúrunk be a tömbe elemet/elemeket?
// Ugyancsak a splice() metodust alkalmazzuk
// Az elso parameter a kiindulasi index
// A masodik parameter a torlendo elemek szama
// a 3. 4. es akar vegtelen parameter pedig az elemek, amiket be akarunk szurni a tobbe

// reset
arr = ["alma", "korte", "szeder", "citrom", "dinnye", "malna", "barack"];

// Ha a masodik parameter 0, nem torlunk egy elemet se, csak beszurunk
arr.splice(2, 0, "szilva", "ribizli");
console.log("5.1", arr); // ["alma", "korte", "szilva", "ribizli", "szeder", "citrom", "dinnye", "malna", "barack"]

// 6. Hogyan írjuk felül önmagával a tömböt?
// Erre a copyWithin() fuggveny hasznaljuk
// Ez a fuggveny NEM modositja a tomb HOSSZAT!
// Az elso parameter, megadja a kiindulasi indexet, es onan felulirja onmagat a tomb a 0. indextol indulva
// A masodik parameter lehetove teszi, hogy ne a 0. indextol irja magat felul a tomb
// A harmadik parameter, ugyancsak egy index es a masodikkal parban meghatarozzak azt az altombot amivel felulirja magat

// reset
arr = ["alma", "korte", "szeder", "citrom", "dinnye", "malna", "barack"];

arr.copyWithin(3);
console.log("6.1", arr); //["alma", "korte", "szeder", "alma", "korte", "szeder", "citrom"]

// reset
arr = ["alma", "korte", "szeder", "citrom", "dinnye", "malna", "barack"];

arr.copyWithin(3, 2);
console.log("6.2", arr); //["alma", "korte", "szeder", "szeder", "citrom", "dinnye", "malna"]

// reset
arr = ["alma", "korte", "szeder", "citrom", "dinnye", "malna", "barack"];

arr.copyWithin(3, 2, 4);
console.log("6.3", arr); //["alma", "korte", "szeder", "szeder", "citrom", "malna", "barack"]
