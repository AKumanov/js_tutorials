function finalResult (fruit, weight, price) {
    const moneyNeeded = (weight * price) / 1000;
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${(weight / 1000).toFixed(2) } kilograms ${fruit}.`);
}


finalResult('orange', 2500, 1.80);
finalResult('apple', 1563, 2.35);
