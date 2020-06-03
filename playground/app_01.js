console.log("A Tömb");

//1. Hogyan hozunk létre egy tömböt?

// Array literals

const arr1 = [1, 2, 3]; //csak szamokat tartalmazo tomb (homogén)
const arr2 = [1, "szia", 2, "asd"]; //nem homogen tomb
const arr3 = [1, [1, 2, 3], [1, "ketto"]]; //tomb a tombben
const arr4 = []; //ures tomb

// Array constructor (ritkan hasznaljuk)
const arr5 = new Array(); //=> [] letrehoz egy ures tombot
const arr6 = new Array(1, 2, 3); //=> [1, 2, 3] tombot hozzuk letre
const arr7 = new Array(3); //=> [undefined, undefined, undefined] tombot eredmenyezi; 3 undefined elembol allo tombot hoz letre
const arr8 = new Array("3"); //=> ["3"] tombot hozzuk letre

// hogy hozunk letre egy [3] tombot? ugy hogy nem hasznaljuk az array literal-t?
const arr9 = Array.of(3); //=> [3]

//2. Hogy érjük el egy tömb elemét/elemeit?

//egy tomb elemeit az index-et felhasznalva erjuk el. Az index egy pozitiv egesz szam 0-tol a tomb hossza-1-ig tart
arr1[0]; //=> 1
arr1[5]; //=> undefined
arr2[3]; //=> "asd"
arr3[1]; //=> [1, 2, 3]
arr3[1][1]; //=> 2

const arr10 = [1, { nev: "Arni" }, [1, "ketto"], "Hello!"];
arr10[1].nev; //=> "Arni"

//3. Honna tudhatom egy változóról biztosan, hogy tömb?

// ha egy valtozo tipusara vagyunk kivancsiak altaban a typeof operatort hasznaljuk
typeof 15; //=> "number"
typeof "valami"; //=> "string"
typeof undefined; //=> "undefined"
typeof [1, 2, 3]; //=> "object"

// ha egy tombrol akarom megtudni, hogy tomb-e akkor Array.isArray(tomb)-t hasznaljuk es egy booleant terit vissza
Array.isArray(arr2); //=> true
Array.isArray("Hello!"); //=> false

//4. Hogy határozzuk meg a tömb hosszát?

[1, 2, 3].length; //a .length tulajdonsagot (property) hasznaljuk =>3
arr1.length; //=> 3
arr10.length; //=> 4
arr4.length; //=> 0
