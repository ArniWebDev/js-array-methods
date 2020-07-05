console.log("Tömb rendezése");

//1. Hogyan fordítjuk meg egy tömb elemeinek a sorrendjét?
// Ehez a muvelethez a reverse() metodust hasznaljuk
// A revers() metodus felulirja a tombot
const arr = ["alma", "korte", "szeder", "citrom", "dinnye", "malna", "barack"];
console.log("1.1 a tomb: ", arr.toString());
arr.reverse();
console.log("1.1 reverse: ", arr.toString());

// Minden rendezessel kapcsolatos esetben a sort() metodust hasznaljuk
// Hogy mukodik a sort? A tomb minden elemet atalkitja string Tipussa es az ASCII kodjuk szerint rendezi ezeket
// A sort metodus felulirja a tombot
//2. Hogyan rendezunk String-ekkel teli tomboket?
let arrString = [
  "alma",
  "korte",
  "szeder",
  "citrom",
  "dinnye",
  "malna",
  "barack",
];
console.log("2.1 a tomb: ", arrString.toString());
arrString.sort();
console.log("2.1 sort(): ", arrString.toString());

// Ha a string tartalmaz nagybetuket akkor azok elorebb kerulnek, az ASCII kodjuk miatt
arrString = ["alma", "Korte", "szeder", "Citrom", "dinnye", "malna", "barack"];

console.log("2.2 a tomb: ", arrString.toString());
arrString.sort();
console.log("2.2 sort(): ", arrString.toString());

// Ha kiakarjuk kuszobolni ezt a kis-nagy betus problemat, a sort metodusunkat fuggveny parameterrel kell meghivnunk
// Ez a fuggveny kotelezo modon ket parameterrel rendelkezik es szamot kuld vissza ami harom erteket vehet fel:
// negativ erteket ha azt szeretnenk, hogy az elso parameter minnel elorebb keruljon a rendezes soran
// pozitivat, ha azt szeretnenk, hogy az elso parameter minnel hatrebb keruljon a rendezes soran
// 0-t akkor ha egyenlo a ket ertek

// A fuggveny: ABC szerint novekvo sorrendbe tesszuk a tomb elemeit

function sortStringFn(a, b) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  } else if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
}

console.log("2.3 a tomb: ", arrString.toString());
arrString.sort(sortStringFn);
console.log("2.3 sort(egyszeruStringRendezesNovekvo): ", arrString.toString());

//3. Hogyan rendezunk Szamokkal teli tomboket?
const arrNumber = [1, 9, 10000, 81, 849, 2, 561];
console.log("3.1 a tomb: ", arrNumber.toString());
arrNumber.sort();
console.log("3.1 sort(): ", arrNumber.toString());

// Hogy szamokat tudjunk rendezni, szukseges egy fuggveny
function sortNumberFn(a, b) {
  return a - b;
}

console.log("3.2 a tomb: ", arrNumber.toString());
arrNumber.sort(sortNumberFn);
console.log("3.2 sort(sortNumberFn): ", arrNumber.toString());

//4. Hogyan rendezunk Object-ekkel teli tomboket?
const arrObj = [
  {
    name: "Geza",
    age: 30,
  },
  {
    name: "Pista",
    age: 26,
  },
  {
    name: "Marika",
    age: 12,
  },
  {
    name: "Terike",
    age: 20,
  },
  {
    name: "Jani",
    age: 17,
  },
  {
    name: "Vicus",
    age: 22,
  },
  {
    name: "Geza",
    age: 22,
  },
];

// Az age key/kulcs szerint rendezunk novekvobe
function objSortByAgeFn(a, b) {
  return a.age - b.age;
}

console.log("4.1 a tomb: ");
arrObj.forEach((e) => console.log(e));
arrObj.sort(objSortByAgeFn);
console.log("4.1 sort(objSortByAgeFn): ");
arrObj.forEach((e) => console.log(e));

// Tomb rendezese name es age kulcs szerint novekvobe
function objSortByNameFn(a, b) {
  if (a.name === b.name) {
    return sortNumberFn(a.age, b.age);
  } else if (a.name > b.name) {
    return 1;
  } else {
    return -1;
  }
}

arrObj.sort(objSortByNameFn);
console.log("4.2 sort(objSortByNameFn): ");
arrObj.forEach((e) => console.log(e));

//5. Hogyan rendezunk String-ekkel specialis karakterekkel?

const arrAbc = ["a", "b", "á", "c", "é", "d", "e"];
arrAbc.sort();
console.log("5.1 sort(): ", arrAbc.toString());

function localeCompareSortFn(a, b) {
  return a.localeCompare(b);
}

arrAbc.sort(localeCompareSortFn);
console.log("5.2 sort(localeCompareSortFn): ", arrAbc.toString());
