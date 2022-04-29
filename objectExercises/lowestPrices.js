const tempInput = [
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000',
]

function calcPrices(input) {
    const townInformation = {}
    
    input.forEach(currentItem => {
        let [townName, productName, productPrice] = currentItem.split(' | ');
        productPrice = Number(productPrice);
        if (!(townInformation.hasOwnProperty(productName))) {
            townInformation[productName] = []
        }
        townInformation[productName].push({townName, productPrice})
    });
    

    const sortable = [];
    for (const product in townInformation) {
        sortable.push([product, townInformation[product]]);
    }

    sortable.sort((a, b) => {
        console.log(`TEST LOGG - ${a[1][0].productName}`)
        return b[1][0].productPrice - a[1][0].productPrice;
    })

    for (let item in sortable) {
        console.log(`${sortable[item][0]} -> ${sortable[item][1][0].productPrice} (${sortable[item][1][0].townName})`)
    }
 
}


calcPrices(tempInput);

// const products = calcPrices(tempInput);
// const sortable = [];
// for (const product in products) {
//     sortable.push([product, products[product]]);
// }

// sortable.sort((a, b) => {
//     return a.productPrice - b.productPrice;
// })

// for (let item in sortable) {
//     console.log(`${sortable[item][0]} -> ${sortable[item][1][0].productPrice} (${sortable[item][1][0].townName})`)
// }