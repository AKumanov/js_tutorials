const arr = [1, 5, 6, 8, 0];

arr.sort((a, b) => {
    if(a > b) return 1
    return -1;
})

console.log(arr);