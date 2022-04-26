// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
// console.log('Jonas');
// console.log(23);

// let firstName = 'Jonas';
// console.log(firstName);

/*
THE 7 PRIMITIVE DATA TYPES
-- Number - Floating point numners --> Used for decimals and integers
-- String - Sequence of characters --> used for text
-- Boolean - Logical type that can only be true or false
-- Undefined - Value taken by a variable that is not yet defined - let children;
-- Null - Also means empty value
-- Symbol(ES2015) - Value that is unique and cannot be changed
-- BigInt(ES2020) - Larger integers taht the Number type can hold
*/
// dynamically declaration of variables;
// console.log(typeof firstName);
// let test;
// console.log(typeof test);
// test = 'test';
// console.log(typeof test);
// test = {
//     name: 'test',
// };
// console.log(typeof test);

// Declare Variables
// let age = 30;
// age = 31;

// const birthYear = 1990;
// birthYear = 1991;
// this throws a: TypeError: Assignment to constant variable.
// we cannot reassigne a constant variable - it could never change;

// const job;
// this throws a: SyntaxError: 'const' declarations must be initialized.
// anotherTest = 'Test';
// console.log(anotherTest);
// this is a bad idea

// 5 falsy values: 0, '', undefined, null, NaN(Not a Number);
// will become false when converted to boolean

// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Code for 8 hours");
//     break;
//   case "tuesday":
//     console.log("Today is tuesday");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write test for your code");
//     break;
//   case "friday":
//     console.log("Record some videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Invalid day");
// }

const age = 23;

// age >= 18 ? 
// console.log('I am old enough to drink') :
// console.log('I am not old enough to drink'); 

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
