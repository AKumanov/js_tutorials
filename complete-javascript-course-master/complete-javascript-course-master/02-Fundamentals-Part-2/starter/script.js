'use strict';
//--- STRICT MODE BASICS ---

/* activating strict mode
adding 'use strict'; in the first line of the file
gives error messages to console logging
introduce shortlist of variable names that might be reserved
for implementation in the future
*/

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;

//--- FUNCTIONS BASICS ---
// simple function declaration;
// function logger() {
//     console.log('My name is Alexander');
// }
// logger();

// function calcAge1(birthYear) {
//     return 2022 - birthYear;

// }

// console.log(`I am ${calcAge1(1990)} years old.`);

// func declaration
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// }

// // func expression
// const age2 = calcAge2(1990);

// --- ARROW FUNCTIONS ---
// const calcAge2 = function(birthYear) {
//     return 2022 - birthYear;
// }

// const calcAge3 = birthYear => 2022 - birthYear;
// const age3 = calcAge3(1990);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} has ${retirement} years until retirement`;
// }
// console.log(yearsUntilRetirement(1990, 'Alexander'));

// --- FUNCTIONS CALLING FUNCTIONS ---

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//     return applePieces === 8 ? juice : 'Something else?'
// }

// console.log(fruitProcessor(2, 3));
// const years = new Array(1991, 1984, 2008, 2022, 2023);
// console.log(years[years.length === 4 ? years.length - 1 : 0]);

// const friends = ['Michael', 'Steven', 'Peter'];
// // append an item to the end of the array - returns the length 
// friends.push('Chance');
// console.log(friends);

// // add an element at the beginning of the array - returns the length
// friends.unshift('John');
// console.log(friends);

// // remove an element from the end of the array - returns the removed item;
// friends.pop();
// console.log(friends);

// // remove an element from the beginning of the array
// friends.shift();
// console.log(friends);

// // find an element in the array - returns index
// console.log(friends.indexOf('Peter'));

// // return true if the element is in the array 
// console.log(friends.includes('Peter'));

// --- OBJECTS ---

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2022 - 1991,
    friends: ['Michael', 'Peter', 'Steven'],

    fullname: function(){
        return this.firstName + ' ' + this.lastName;
    },
    
    greetByName: function(name) {
        return `Hello ${name}, I am ${this.firstName}. Nice to meet you!`;
    },
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['firstName']);
console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`);
console.log(jonas.fullname());
console.log(jonas.greetByName('Alexander'));