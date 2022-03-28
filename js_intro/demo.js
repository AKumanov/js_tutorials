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

while (isRunnig) {
    console.log('Running..');
    if (stopper == 3) {
        isRunnig = false;
    }
}
console.log('while loop ended..');