console.log("Első és utolsó elem");
// Kezdoertekkel latjuk el a tombunket
let arr = [1, 2, 3, 4, 5];

//1. Hogy adunk hozzá egy elemet a tömb végéhez?
// .push(ujElem) vagy .push(ujElem1, ujElem2, ... , ujElemN)
console.log(`1. A tomb:`, arr);
arr.push(); // a tomb nem valtozik
console.log(`A tomb: arr.push() utan`, arr);

// hozzaad egy elemet a tomb vegehez
arr.push("szia"); //=> [1, 2, 3, 4, 5, "szia"]
console.log(`A tomb: arr.push("szia") utan`, arr);

// hozzaad tobb elemet a tomb vegehez
arr.push(1, 2, 3); //=> [1, 2, 3, 4, 5, "szia", 1, 2, 3]
console.log(`A tomb: arr.push("szia") utan`, arr);

// az utolso elem helyen egy beagyazott tomb lesz, vagyis egy elemet adtunk hozza a tombunk vegehez
arr.push([1, 2, 3]); //=> [1, 2, 3, 4, 5, "szia", 1, 2, 3, [1, 2, 3]]
console.log(`A tomb: arr.push([1, 2, 3]) utan`, arr);

//2. Hogy torlunk egy elemet a tomb vegerol?
// .pop()

// Visszaallitjuk a tombunket: [1, 2, 3, 4, 5]
arr = [1, 2, 3, 4, 5];
console.log(`2. A tomb:`, arr);

// az arr.pop() fuggveny visszateriti a tomb utolso elemet
let utolsoElem = arr.pop();
// jelen esetben az utolso elemunk => 5
console.log("Az tomb utolso eleme:", utolsoElem);
// a tomb hossza megvaltozott es toroltuk az utolso elemet => [1, 2, 3, 4]
console.log(`A tomb: arr.pop() utan`, arr);

//3. Hogy szurunk be egy elemet a tomb elejere?
// .unshift(ujElem) fuggvennyel szurunk be egy elemet a tomb elejere es eltoljuk balra az osszes tobbi elemet
// .unShift(ujElem1, ujElem2, ... , ujElemN) modszerrel szurunk be tobb elemet a tomb elejere

// Visszaallitjuk a tombunket: [1, 2, 3, 4, 5]
arr = [1, 2, 3, 4, 5];
console.log(`3. A tomb:`, arr);

arr.unshift(); // a tomb nem valtozik
console.log(`A tomb: arr.unshift() utan`, arr);

// beszurunk egy elemet a tomb elejere
arr.unshift("szia"); //=> ["szia", 1, 2, 3, 4, 5]
console.log(`A tomb: arr.unshift("szia") utan`, arr);

// beszurunk tobb elemet a tomb elejere
arr.unshift(1, 2); //=> [1, 2, "szia", 1, 2, 3, 4, 5]
console.log(`A tomb: arr.unshift("szia") utan`, arr);

//4. Hogy torlunk egy elemet a tomb elejerol?
// .shift()
// Visszaallitjuk a tombunket: [1, 2, 3, 4, 5]
arr = [1, 2, 3, 4, 5];
console.log(`4. A tomb:`, arr);

// az arr.shift() fuggveny visszateriti a tomb elso elemet
let elsoElem = arr.shift();
// jelen esetben az elso elemunk => 1
console.log("Az tomb elso eleme:", elsoElem);
// a tomb hossza megvaltozott es toroltuk az elso elemet => [2, 3, 4, 5]
console.log(`A tomb: arr.shift() utan`, arr);

//5. Hogy fuzunk ossze ket tombot?
// .concat() - ez a fuggveny nem valtoztatja meg a jelenlegi tombunket, hanem egy uj valtozoba kell lementeni az eredmenyt

// Visszaallitjuk a tombunket: [1, 2, 3, 4, 5]
arr = [1, 2, 3, 4, 5];
console.log(`5. A tomb:`, arr);
// bejelentunk egy ujabb tombot
arrConcat = ["Hello", "szia", "!"];
console.log(`5. A masodik tomb:`, arrConcat);

// a newArr valtozoban taroljuk az osszefuzes vegeredmenyet
let newArr = arr.concat(arrConcat);
console.log(`A tomb: arr.concat(arrConcat) utan`, arr);
console.log(`A tomb: newArr = arr.concat(arrConcat) utan`, newArr);

// tobb tomb osszefuzese
newArr = arr.concat(arrConcat, arr, arrConcat);
console.log(`A tomb: arr.concat(arrConcat, arr, arrConcat)`, newArr);
