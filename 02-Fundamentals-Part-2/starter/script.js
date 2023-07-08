"use strict";

// Functions //

// function logger() {
//   console.log("My name is Greg.");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Function Declaration

// function calcAge1(birthDate) {
//   return 2037 - birthDate;
// }
// const age1 = calcAge1(1981);

// // Function Expression

// const calcAge2 = function (birthDate) {
//   return 2037 - birthDate;
// };
// const age2 = calcAge2(1981);
// console.log(age1, age2);

const calcAge2 = function (birthDate) {
  return 2037 - birthDate;
};

// Arrow function

const calcAge3 = (birthDate) => 2037 - birthDate;
const age3 = calcAge3(1981);
console.log(age3);
