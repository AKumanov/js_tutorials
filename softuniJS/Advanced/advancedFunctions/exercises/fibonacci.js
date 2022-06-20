function getFibonator() {
    let state = 0
    let prevState = 0
    return function fib() {
         let result;
        if (state == 0) {
            result = 1
            prevState = state
            state += 1
        } else {
            result = state + prevState
            prevState = state
            state = result
        }
        return result
    }
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

