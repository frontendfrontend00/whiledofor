"use strict";

let num = 50;
// Покт num < 55 ми будемо виконувати якусь дію
while (num <= 55) {
  console.log(num);
  num++;
}

// спочатку щось робе цикл, а потім перевіряємо його умову
let num1 = 40;
do {
  console.log(num1);
  num1++;
} while (num1 < 55);

// For перша це з чого починається друга коли закінчеться
for (let i = 1; i < 8; i++) {
  console.log(i);
}
let number = 100;
for (let i = 1; i < 8; i++) {
  console.log(number);
  number++;
}

// break - зупиняє цикл
for (let i = 1; i < 8; i++) {
  if (i === 6) {
    break;
  }

  console.log(i);
}

// continue - пропускає крок циклу і продовжує далі цикл
for (let i = 1; i < 8; i++) {
  if (i === 4) {
    continue;
  }

  console.log(i);
}
