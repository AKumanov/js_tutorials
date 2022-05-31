const inputOne = [
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]

const inputTwo = [
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]


function storageCatalog(args) {
    let temp = {}
    const result = [];
    for (let arg of args) {
        let [productName, productPrice] = arg.split(" : ");
        let tagLetter = productName[0];
        if (!(temp.hasOwnProperty(tagLetter))) {
            temp[tagLetter] = []
        } 

        temp[tagLetter].push({
            productName,
            productPrice: Number(productPrice)
        });
        
    }
    Object.keys(temp).sort().forEach(function(v, i) {
        result.push(v)
        temp[v].forEach(obj => {
            result.push(`  ${obj["productName"]}: ${obj["productPrice"]}`)
        })
    })
    
    // return result.join('\n');
}

console.log(storageCatalog(inputOne));