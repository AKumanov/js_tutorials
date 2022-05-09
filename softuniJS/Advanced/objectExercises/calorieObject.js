const inputArray = ['Youghurt', '48', 'Rise', '138', 'Apple', '52'];

function objectComposer(inputArray) {
    let customObject = {}
    for (let i = 0; i < inputArray.length - 1; i+= 2) {
        customObject[inputArray[i]] = Number(inputArray[i + 1]);
    }
    return customObject;
}

console.log(objectComposer(inputArray));