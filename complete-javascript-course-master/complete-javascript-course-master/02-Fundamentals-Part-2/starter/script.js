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
const calcAge2 = function(birthYear) {
    return 2022 - birthYear;
}

const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1990);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} has ${retirement} years until retirement`;
}
console.log(yearsUntilRetirement(1990, 'Alexander'));
