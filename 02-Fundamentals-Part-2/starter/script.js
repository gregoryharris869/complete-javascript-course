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

// const calcAge2 = function (birthDate) {
//   return 2037 - birthDate;
// };

// Arrow function

// const calcAge3 = (birthDate) => 2037 - birthDate;
// const age3 = calcAge3(1981);
// console.log(age3);

// const yearsUntilRetirement = (birthDate, firstName) => {
//   const age = 2037 - birthDate;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Greg"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// Function call function //

// function cutFruit(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruit(apples);
//   const orangePieces = cutFruit(oranges);
//   const juice = `Juice with ${applePieces} piece 0f apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthDate) {
//   return 2037 - birthDate;
// };

// const yearsUntilRetirement = function (birthDate, firstName) {
//   const age = calcAge(birthDate);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     console.log(`${firstName} has already retired.`);
//     return retirement;
//   } else return "retired";
// };

// console.log(yearsUntilRetirement(1981, "Greg"));
// console.log(yearsUntilRetirement(1990, "Mike"));

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// // Test 1
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win! (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log(`No team wins...`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// Arrays

// const friend1 = "Micheal";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Micheal", "Steven", "Peter"];
// console.log(friends);

// const yearsA = new Array(1991, 1984, 2008, 2020);
// console.log(yearsA);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsB = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(yearsB[0]);
// const age2 = calcAge(yearsB[1]);
// const age3 = calcAge(yearsB[yearsB.length - 1]);
// console.log(age1);
// console.log(age2);
// console.log(age3);

// const ages = [
//   calcAge(yearsB[0]),
//   calcAge(yearsB[1]),
//   calcAge(yearsB[yearsB.length - 1]),
// ];

// console.log(ages);

// Array Methods

// push = add elements to the end of array.

// const friends = ["Micheal", "Steven", "Peter"];
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// // unshift = add element to beginning of array.

// friends.unshift("John");
// console.log(friends);

// // pop = remove elements from last of array.

// friends.pop(); // Jay
// const popped = friends.pop(); // Peter
// console.log(popped);
// console.log(friends);

// // shift = remove element from beginning of array.

// friends.shift(); // John
// console.log(friends);

// // indexOf = index value.

// console.log(friends.indexOf("Steven"));

// //  includes = contains value of true or false.

// console.log(friends.includes("Steven"));

// if (friends.includes("steven")) {
//   console.log("You have a friend named Steven.");
// }

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calcTip = function (bill) {
//   return (bill = 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

///////////////////////////////////////
// Introduction to Objects

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas);

// console.log(jonas.lastName);

// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do want to know about Jonas? Choose between firstName, lastName, age, job, and friends."
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request. Choose between firstName, lastName, age, job, and friends."
//   );
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);

// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael."
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
// );

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYeah) {
//   //   return 2037 - birthYeah;
//   // }

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYeah;
//   // }

//   // calcAge: function () {
//   //   this.age = 2037 - this.birthYear;
//   //   return this.age;
//   // },
//   calcAge: function () {
//     const currentYear = new Date().getFullYear();
//     this.age = currentYear - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
//   },
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);

// console.log(jonas.getSummary());

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
//   );
// }

///////////////////////////////////////
// Iteration: The for Loop

// for (let rep = 0; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// function liftWeights() {
//   for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
//   }
// }

// liftWeights();

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   // Reading from array
//   console.log(jonas[i], typeof jonas[i]);
//   // Filling types array
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   const element = years[i];
//   ages.push(2037 - element);
// }

// console.log(ages);

// // Continue and break
// // Strings
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;

//   console.log(jonas[i], typeof jonas[i]);
// }
// // Numbers
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;

//   console.log(jonas[i], typeof jonas[i]);
// }

///////////////////////////////////////
// Looping Backwards and Loops in Loops

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   const element = jonas[i];

//   console.log(i, element);
// }

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}.`);
  }
}
///////////////////////////////////////
// The while Loop
