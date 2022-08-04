"use strict";

// let js = "amazing";

// console.log(40 + 8 + 23 - 10);
// console.log("Jonas");
// console.log(23);

// let firstName = "Jonas";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// true;

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);

// console.log(typeof 23);
// console.log(typeof "Jonas");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;
// const job;

// var job = "programmer";
// job = "teacher";

// Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 t0 the power 0f 3 = 2 * 2 * 2

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// // Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// // console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10;

// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;

// console.log(ageJonas, ageSarah, averageAge);

// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// Test DATA 1 //
// Mark //
// const massMark = 78;
// const heightMark = 1.69;

// const BMIMark = massMark / heightMark ** 2;

// // John //
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIJohn = massJohn / heightJohn ** 2;
// // compare //
// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn; // true or false //

// console.log(markHigherBMI); // true //

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = "1991";
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`just a regular string...`);

// console.log(`String
// multiple
// lines `);

// const age = 19;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Sarah can start driving.");
// }

const age = 15;
if (age >= 18) {
  console.log("Sarah can start driving.");
} else {
  const yearsLeft = 18 - age;
  console.log(yearsLeft);
}
