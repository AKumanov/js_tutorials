function add(n) {
    const inner = function(a) {
        n += a;
        return inner;
    };
    inner.toString = function() {
        return n;
    }

    return inner;
}

console.log(add(1).toString());
console.log(5 + add(1)(6)(-3));