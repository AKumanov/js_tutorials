const tempArr = [
    {
        plantName: "orange",
        spaceRequired: 3,
        ripe: false,
        quantity: 5

    },
    {
        plantName: "banana",
        spaceRequired: 3,
        ripe: false,
        quantity: 5

    },
    {
        plantName: "strawberry",
        spaceRequired: 3,
        ripe: false,
        quantity: 5

    },
    {
        plantName: "lemon",
        spaceRequired: 3,
        ripe: false,
        quantity: 5

    }
]
let result = `Plants in the garden: ${tempArr.map(x => x.plantName).sort((a, b) =>{
    if (a < b) return -1
    return 1
}).join(', ')}`;
console.log(result);