class VegetableStore{
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    getVegetableByType(type) {
        for (let veg of this.availableProducts) {
            if (veg.type === type) {
                return veg;
            }
        }
        return null;
    }

    loadingVegetables(vegetables) {
        const addedTypes = [];
        for (let vegetable of vegetables) {
            let [type, quantity, price] = vegetable.split(" ");
            const availTypes = this.availableProducts.map((veg) => veg.type);
            if (availTypes.includes(type)) {
                let foundVegetable = this.getVegetableByType(type)
                if (foundVegetable) {
                    foundVegetable.quantity += Number(quantity);
                    if (foundVegetable.price < Number(price)) foundVegetable.price = price;
                }
            } else {
                this.availableProducts.push({
                    type: type,
                    quantity: Number(quantity),
                    price: Number(price)
                });
                addedTypes.push(type);

            }
        }
        return `Successfully added ${addedTypes.join(", ")}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (let item of selectedProducts) {
            const [type, quantity] = item.split(" ");
            const product = this.getVegetableByType(type);
            if (!product) throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);

            if (product.quantity < Number(quantity)) throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);

            const currentPrice = product.price * Number(quantity);
            totalPrice += currentPrice
            product.quantity -= Number(quantity);
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        const product = this.getVegetableByType(type);
        if (!product) throw new Error(`${type} is not available in the store.`);

        if (quantity > product.quantity) {
            product.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        product.quantity -= quantity
        return `Some quantity of the ${type} has been removed.`;
    };

    revision() {
        let returnMessage = ['Available vegetables:'];
        let tempArr = this.availableProducts.sort((a, b) => (a.price > b.price) ? 1: -1)
        for (const item of tempArr) {
            returnMessage.push(`${item.type}-${item.quantity}-$${item.price}`);
        }
        returnMessage.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return returnMessage.join("\n");
    }
}

