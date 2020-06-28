console.log("Tömbbõl Stringet");

// Kezdoertekkel latjuk el a tombjeinket
let arr = ["Szia", "!", "Hogy", "vagy", "?"];

let arrObj = ["Hello", "Mr.", "Object", "!", { kulcs: "Object vagyok" }];

let arrArr = [
  "Hello",
  "Mr.",
  "Array",
  "in",
  "array",
  "!",
  ["masodik", "szint", "!", ["harmadik", "szint"]],
];

// 1. Hogyan alakítunk át egy array-t String típussá?
// A toString() Array metodust hasznaljuk ami felulirja az Object toString metodusat
// Ez a metodus visszateriti a tombunk string "valtozatat" es az elemeket vessovel valasztja el
console.log(`arr.toString():`, arr.toString());

// Ha a tomb tartalmaz egy Object-et (ami nem egy array) [object Object]-et fog kiirni az elem helyett
console.log(`arrObj.toString()`, arrObj.toString());

// Ha a tomb tartalmaz mas tomboket, akkor azokat siman atalakitja es vesszovel valasztja el az elemeket
console.log(`arrArr.toString()`, arrArr.toString());

//2. Hogyan választhatjuk el az array elemeit tetszõleges
// A join() metoust hasznaljuk, aminek ha nem adunk parametert, ugy iselkedik, mint a toString() metodus.
// Ha parameterrel latjuk el akkor azt a karakterlancot/stringet fuzi majd az elemek koze.
console.log("join():", arr.join());

// Az arr valtozobol egy mondatot formazunk, ugy hogy szokozoket teszunk az elemek koze
console.log(`join(" "):`, arr.join(" "));

// Ha tombunk vna a tombben akkor a tomb elemit a megadott string szerint bontja szet, viszont a beagyazott tombot a toString metodus szerint
console.log(`arrArr.join(" * "):`, arrArr.join(" * "));

// Ha Object-et tartalmaz a tomb, ez a metodus i [object Object]-et fog kiirni es a megadott karaktert/karaktereket tesiz az elemek koze
console.log(`arrObj.join(" * "):`, arrObj.join(" * "));
