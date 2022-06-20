function argInfo() {
    const args = arguments;
    let types = {};
    for (let arg of args) {
        let type = typeof arg
        console.log(`${type}: ${arg}`);
        if (types[type] == undefined) {
            types[type] = 1
        } else {
            types[type] += 1
        }
    }

    let result = Object.entries(types).sort((a, b) => {
        return b[1] - a[1];
    })
    for (let item of result) {
        console.log(`${item[0]} = ${item[1]}`);
    }
}

argInfo('cat', 42, function () { console.log('Hello world!'); })