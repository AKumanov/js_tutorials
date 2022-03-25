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