console.log("Játszótér!");

// Kezdoertekkel latjuk el a tombjeinket
let arr = ["alma", "korte", "szeder", "citrom", "dinnye", "malna", "barack"];
console.log("Az arr:", arr);

arr.copyWithin(3, 4, 6);

console.log("Eredmeny:", arr);
