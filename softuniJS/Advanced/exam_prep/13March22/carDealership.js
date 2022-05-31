class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (!model || !(horsepower >= 0) || !(price >= 0) || !(mileage >= 0)) throw new Error("Invalid input!");

        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        })
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const foundCar = this.availableCars.filter(x => x.model === model)[0]
        if (!foundCar) throw new Error(`${model} was not found!`);
        const horsepower = foundCar.horsepower
        let soldPrice = 0;
        if (foundCar.mileage <= desiredMileage) {
            soldPrice = foundCar.price;
            this.totalIncome += soldPrice
        } else if ((foundCar.mileage - desiredMileage) <= 40000) {
            soldPrice = foundCar.price - (foundCar.price * 0.05);
            this.totalIncome += soldPrice
        } else {
            soldPrice = foundCar.price - (foundCar.price * 0.1);
            this.totalIncome += soldPrice
        }

        const foundCarIndex = this.availableCars.findIndex(x => x.model === model);
        this.availableCars.splice(foundCarIndex, 1);
        this.soldCars.push({
            model,
            horsepower,
            soldPrice
        })
        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    
    }

    currentCar() {
        if (this.availableCars.length === 0) return "There are no available cars";
        let returnMessage = ["-Available cars:"]
        for (let car of this.availableCars) {
            returnMessage.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`)
        }
        return returnMessage.join("\n")
    }

    salesReport(criteria) {
        const returnMessage = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`];
        const validCriterias = ["horsepower", "model"];
        if (!validCriterias.includes(criteria)) throw new Error("Invalid criteria!");            

        if (criteria === "horsepower") {
            this.soldCars.sort((a, b) => {
                if (a.horsepower > b.horsepower) return -1
                return 1
            })
        } else {
            this.soldCars.sort((a, b) => {
                if (a.model < b.model) return -1
                return 1
            })
        }
        returnMessage.push(`-${this.soldCars.length} cars sold:`);
        for (let item of this.soldCars) {
            returnMessage.push(`---${item.model} - ${item.horsepower} HP - ${item.soldPrice.toFixed(2)}$`);
        }
        return returnMessage.join("\n");
    }
}


/*
Unexpected error: expected 
'-SoftAuto has a total income of 29600.00$\n
2 cars sold:\n
---Mercedes C63 - 300 HP - 26100.00$\n
---Toyota Corolla - 100 HP - 3500.00$' 

to equal 
'-SoftAuto has a total income of 29600.00$\n
-2 cars sold:\n---Mercedes C63 - 300 HP - 26100.00$\n---Toyota Corolla - 100 HP - 3500.00$'
*/