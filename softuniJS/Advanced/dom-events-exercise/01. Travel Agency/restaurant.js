class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney  = budgetMoney;
        this.menu = {}; // item => needed products, price
        this.stockProducts = {}; // name, quantity, price
        this.history = [];
    }

    __getMealByName(mealName) {
        return this.menu[mealName];
    } 

    __checkIngrediendsForMeal(meal) {
        let result = true;
        let mealproducts = meal['products']
        let stockProducts = []
        for(let key in this.stockProducts) {
            stockProducts.push(key);
        }
        mealproducts.forEach(product => {
            if(!stockProducts.includes(product.productName)) {
                result = false;
            }
        })
        return result;
    }

    __reduceStockProducts(meal) {
        let mealProducts = meal['products'];
        let stockProducts = []
        for(let key in this.stockProducts) {
            stockProducts.push(key);
        }
        mealProducts.forEach(product => {
            this.stockProducts[product.productName]['productQuantity'] -= product.productQuantity;
        })
    }


    loadProducts(products) {
        const returnMessage = [];

        for (let product of products) {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);
            if (this.budgetMoney >= productTotalPrice) {
                this.budgetMoney -= productTotalPrice;
                if (this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName]['productQuantity'] += productQuantity;

                } else {
                    this.stockProducts[productName] = {
                        productQuantity: productQuantity,
                        productTotalPrice: productTotalPrice
                    };
                }

                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
    
        }

        return this.history.join('\n');

    }

    addToMenu(meal, neededProducts, price) {
        const mealProducts = [];
        neededProducts.forEach(product => {
            let productName;
            let currentItem = product.split(' ');
            currentItem.length === 2 ? productName = currentItem[0] : productName = currentItem.slice(0, currentItem.length - 1).join(' ');
            let productQuantity = Number(currentItem[currentItem.length - 1]);
            mealProducts.push({
                productName: productName,
                productQuantity: Number(productQuantity),
            });
        });
        if(this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`;
        } else {
            this.menu[meal] = {
                products: mealProducts,
                price: price,
            };
        }

        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} ${Object.keys(this.menu).length > 1 ? 'meals' : 'meal'} in the menu, other ideas?`;
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...';
        } 
        const message = [];
        for (const meal in this.menu) {
            message.push(`${meal} - $ ${this.menu[meal]['price']}`);
        }

        return message.join('\n');
    }

    makeTheOrder(meal) {
        if(!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        const foundMeal = this.__getMealByName(meal);
        const result = this.__checkIngrediendsForMeal(foundMeal);
        if(!result) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry`;
        }

        this.__reduceStockProducts(foundMeal);
        this.budgetMoney += foundMeal['price'];

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${foundMeal['price']}.`
    }
}
