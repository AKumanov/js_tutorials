const exampleInput = [
    "Sofia City | Audi | 100000",
    "Sofia City | BMW | 100000",
    "Sofia City | Mitsubishi | 10000",
    "Sofia City | Mercedes | 10000",
    "Sofia City | NoOffenseToCarLovers | 0",
    "Mexico City | Audi | 1000",
    "Mexico City | BMW | 99999",
    "Mexico City | Mitsubishi | 10000",
    "New York City | Mitsubishi | 1000",
    "Washington City | Mercedes | 1000",
]

function calcPrices(args) {
    let combined = [];
    let final = {};
    for (let obj of args) {
        let [town, product, price] = obj.split(" | ");
            if (final.hasOwnProperty(product)) {
                if (final[product]["price"] > price) {
                    final[product]["price"] = price;
                    final[product]["town"] = town;
                }
            } else {
                final[product] = {
                    town,
                    price: Number(price)
                };
            }
    }
    for (const key in final) {
        combined.push(`${key} -> ${final[key]['price']} (${final[key]['town']})`);
    }
    return combined.join('\n');
}

console.log(calcPrices(exampleInput));

