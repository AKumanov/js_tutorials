// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log('FizzBuzz');
//         } else if (i % 5 == 0) {
//             console.log('Buzz')
//         } else if (i % 3 == 0) {
//             console.log('Fizz');
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz();

let isRunnig = true;
const stopper = 5

console.log('while loop ended..');


// Constructor Function
function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

let temp1 = new BellBoy('Test', 30, true, ['English', 'Russan']);
console.log(temp1.name)
console.log(temp1.languages)

class BuzzBoy {
    constructor(name, age, hasWorkPermit, languages) {
        this.name = name;
        this.age = age;
        this.hasWorkPermit = hasWorkPermit;
        this.languages = languages;
    }

    toString() {
        return `This is ${this.name}. He knows ${this.languages.length} different languages`
    }
}

let buzzBoy = new BuzzBoy('Test', 30, true, ['English', 'German', 'Belgian'])

console.log(buzzBoy.toString());