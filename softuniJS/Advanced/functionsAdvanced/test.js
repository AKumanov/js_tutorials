
function argsInfo(args) {
    args = args.split(', ');
    console.log(args);
    for (let arg of args) {
        console.log(`${arg} - ${typeof arg}`)
    }
}

argsInfo('cat', 42, function () { console.log('Hello world!'); })