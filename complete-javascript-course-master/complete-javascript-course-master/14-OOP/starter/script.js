'use strict';

// // constructor
// const Person = function(firstName, birtYear) {
//     this.firstName = firstName;
//     this.birthYear = birtYear;
// };
// // prototype
// Person.prototype.calcAge = function() {
//     return 2037 - this.birthYear;
// }

// let alex = new Person('Alexander', 1990);
// console.log(alex);
// console.log(alex.calcAge());
// console.log(alex.__proto__);

// Person.prototype.species = 'Homo Sapiens';
// console.log(alex.species);

// console.log(alex.__proto__ === Person.prototype);
// console.log(alex.hasOwnProperty('firstName'));
// console.log(alex.hasOwnProperty('birthYear'));


// // Prototypal inheritance and chain
// console.log(alex.__proto__);
// console.log(alex.__proto__.__proto__); // object prototype
// console.log(alex.__proto__.__proto__.__proto__); // null (top of prototype chain)

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 9, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function() {
//     return [...new Set(this)];
// }
// console.log(arr.unique());

// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(this.speed);
// }

// Car.prototype.break = function() {
//     this.speed -= 5;
//     console.log(this.speed);
// }

// const bwm = new Car('BWM', 120);
// const mercedes = new Car('Mercedes', 95);
// console.log(bwm);
// console.log(mercedes);
// bwm.accelerate();
// bwm.break();

// class PersonCl {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     };
//     calcAge() {
//         console.log(2022 - this.birthYear);
//     }
// };

// const alex = new PersonCl('Alexander', 1990);
// console.log(alex);
// alex.calcAge();
// console.log(alex.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//     console.log(`Hey, my name is ${this.firstName}`);
// }

// GETTERS AND SETTERS
// const account = {
//     owner: 'jonas',
//     movements: [200, 530, 120, 300],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },

//     set latest(movement) {
//         this.movements.push(movement);
//     }
// };
// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

class Person {
    constructor(fullName, birthAge) {
        this.fullName = fullName;
        this.birthAge = birthAge;
    }

    set fullName(name) {
        if (name.includes(' ')) {
            this._fullName = name;
        } else {
            throw Error(`${name} is not a full name`);
        }
    }

    get fullName() {
        return this._fullName;
    }
}

const alex = new Person('Alexander Kumanov', 1990);
console.log(alex);
console.log(alex.fullName);
