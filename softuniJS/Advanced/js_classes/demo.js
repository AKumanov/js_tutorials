const person = {
    name: "Alexander Kumanov",
    age: 30,
    position: "Fullstack Developer"

    
}

console.log(person)

for (let key in person) {
    console.log(`Key: ${key}, Value: ${person[key]}`)
}


const keys = Object.keys(person)    
console.log(keys)

const values = Object.values(person)
console.log(values)

const entries = Object.entries(person)
console.log(entries)

for (let index in entries) {
    console.log(index)
}

// function echo (inputString) {
//     let stringLen = inputString.length;
//     console.log(stringLen);
//     console.log(inputString);
// }

// echo('Hello world')

// function solve(str1, str2, str3) {
//     let lenStr1 = str1.length;
//     let lenStr2 = str2.length;
//     let lenStr3 = str3.length;
//     console.log(lenStr1 + lenStr2 + lenStr3);
//     console.log(Math.round((lenStr1 + lenStr2 + lenStr3) / 3));

// }
// solve('pasta', '5', '22.3');

// function findBiggest(...params) {
//     biggest = 0;
//     for (let element of params) {
//         if (element >= biggest) {
//             biggest = element
//         }
//     }
//     console.log(`The biggest numer is ${biggest}`);
// }

// findBiggest(1, 2, 3);



