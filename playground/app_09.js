let dobokocka = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

console.log("A dobokockak: ", dobokocka);

// Tömb bejárása
function bejarasFor(arr) {
  console.log("bejarasFor:");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function bejarasWhile(arr) {
  console.log("bejarasWhile:");
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
}

function bejarasDoWhile(arr) {
  console.log("bejarasDoWhile:");
  let i = 0;
  do {
    console.log(arr[i]);
    i++;
  } while (i < arr.length);
}

bejarasFor(dobokocka);
bejarasWhile(dobokocka);
bejarasDoWhile(dobokocka);

// Saját algoritmussal fordítjuk meg egy tömb elemeinek a sorrendjét
function reverseFor(arr) {
  let reverseArr = [];

  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      reverseArr[arr.length - 1 - i] = arr[i];
    }
  }

  return reverseArr;
}

function reverseWhile(arr) {
  let reverseArr = [];

  if (Array.isArray(arr)) {
    let i = 0;
    while (i < arr.length) {
      reverseArr[arr.length - 1 - i] = arr[i];
      i++;
    }
  }

  return reverseArr;
}

function reverseDoWhile(arr) {
  let reverseArr = [];

  if (Array.isArray(arr)) {
    let i = 0;
    do {
      reverseArr[arr.length - 1 - i] = arr[i];
      i++;
    } while (i < arr.length);
  }

  return reverseArr;
}

console.log(reverseFor(dobokocka));
console.log(reverseWhile(dobokocka));
console.log(reverseDoWhile(dobokocka));
