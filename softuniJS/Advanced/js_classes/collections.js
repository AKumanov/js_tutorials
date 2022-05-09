const myMap = new Map();
console.log(myMap);

myMap.set('firstKey', 5)
myMap.set('secondKey', 6)

console.log(myMap);
console.log(myMap.get('firstKey'));

console.log(myMap.has('firstKey'));
console.log(myMap.has('thirdKey'));

myMap.delete('firstKey');
console.log(myMap);
myMap.clear();
console.log(myMap);
