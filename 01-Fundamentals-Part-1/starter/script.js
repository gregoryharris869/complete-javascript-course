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

// const age = 15;
// if (age >= 18) {
//   console.log("Sarah can start driving.");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is to young. Wait another ${yearsLeft} years.`);
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 😉
*/
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

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
// } else {
//   console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
// }

// Type Conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // Type coercion
// console.log("I am " + 23 + " years old.");
// console.log("23" - "10" - 3); // changers string to numbers

// let n = "1" + 1; // 11 the string
// n = n - 1; // 10 = 11 -1
// console.log(n); // 10

// Truthy and Falsy //

// 5 falsy values : 0, "", undefined, null NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;

// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("Get a job.");
// }

// let height = 0;
// if (height) {
//   console.log("Yay, height is defined.");
// } else {
//   console.log("Please try again, undefined.");
// }

// Equality operators: == vs. ===;

// const age = 18;

// if (age === 18) console.log("strict");

// if (age == 18) console.log("loose");

// const favorite = Number(prompt("What is you favorite number?"));
// console.log(favorite);
// // Equal operator ===: strict version
// if (favorite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favorite === 7) {
//   console.log("7 is a good number!");
// } else {
//   console.log("number is not 23 or 7");
// }
// // Different operator !==: strict version
// if (favorite !== 23) {
//   console.log("Why not 23?");
// }

// Boolean Logic

// const age = 16;
// A: Age is greater then or equal to20. false
// B: Age is less then 30. true

// Logical Operations

// s

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");

// }////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy!");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy!");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy!");
// }

// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy!");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy!");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both win the trophy!");
// } else {
//   console.log("No one wins.");
// }

// Switch Statement //

// const day = "Wednesday";

// switch (day) {
//   case "Monday":
//     console.log("Plan course structure.");
//     console.log("Go to coding meetup.");
//     break;
//   case "Tuesday":
//     console.log("Prepare theory videos.");
//     break;
//   case "Wednesday":
//   case "Thursday":
//     console.log("Write code examples.");
//     break;
//   case "Friday":
//     console.log("Record videos.");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("Enjoy the weekend :D.");
//     break;
//   default:
//     console.log("Not a valid day.");
// }

// const day = "friday";

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a valid day!");
// }

// Statements and Expressions //

// 3 + 4;
// 1991;
// true && false && !false;

// if (23 > 10) {
//   const str = "23 is bigger";
// }
// const me = "Greg";
// console.log(`Im ${2023 - 1981} years old ${me}.`);

//

// The Conditional (Ternary) Operator

// const age = 23;
// age >= 18
//   ? console.log("I like to drink wine.")
//   : console.log("I like to drink water.");

// const age = 23;
// const drink = age >= 18 ? "Wine" : "Water";
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? "Wine." : "Water."}`);

// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.02;
// console.log(
//   `The bill was ${bill}, tip was ${tip}, and the total value ${bill + tip}.'`
// );
