const inputOne = ['cat', 42, function () { console.log('Hello world!');}];

function makeCalculations(arguments) {
    let output = '';
    let classifier = {}
    for (let item of arguments) {
        output += `${typeof item}: ${item}\n`;
        if (!(classifier.hasOwnProperty(typeof item))) {
            classifier[typeof item] = []
        }
        classifier[typeof item].push(item);
    }

    for (let item in classifier) {
        output += `${item} = ${classifier[item].length}\n`;
    }

    return output;
}

const output = makeCalculations(inputOne);
console.log(output);