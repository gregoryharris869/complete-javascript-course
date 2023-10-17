'use strict';
// Scope
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}.`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const firstName = 'Steven';
//       const str = `Oh, and your a millennial, ${firstName}.`;

//       function add(a, b) {
//         return a + b;
//       }
//       console.log(str);
//     }
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// Hoisting and temporal dead zone (TDZ)

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions

console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
