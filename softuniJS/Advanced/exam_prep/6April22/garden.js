class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable
        this.plants = [];
        this.storage = [];
    }

    __checkPlant(plantName) {
        return this.plants.some(x => x.plantName === plantName);
    }

    __getPlantByName(plantName) {
        return this.plants.filter(x => x.plantName === plantName)[0];
    }

    __getPlantPosition(plantName) {
        return this.plants.findIndex(x => x.plantName === plantName);
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < Number(spaceRequired)) throw new Error("Not enough space in the garden.");

        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        if (Number(quantity) <= 0) throw new Error(`The quantity cannot be zero or negative.`);
        if (!this.__checkPlant(plantName)) throw new Error(`There is no ${plantName} in the garden.`);

        let foundPlant = this.__getPlantByName(plantName);
        if(foundPlant.ripe === true) throw new Error(`The ${plantName} is already ripe.`);
        
        foundPlant.ripe = true;
        foundPlant.quantity += Number(quantity);

        return `${quantity} ${quantity === 1 ? plantName : plantName + "s"} ${quantity === 1 ? "has" : "have"} successfully ripened.`;
    }

    harvestPlant(plantName) {
        if (!this.__checkPlant(plantName)) throw new Error(`There is no ${plantName} in the garden.`);

        let foundPlant = this.__getPlantByName(plantName);

        if (!foundPlant.ripe) throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        const plantIndex = this.__getPlantPosition(plantName);
        this.storage.push({
            plantName,
            quantity: foundPlant.quantity
        });
        this.spaceAvailable += foundPlant.spaceRequired
        this.plants.splice(plantIndex, 1);

        return `The ${plantName} has been successfully harvested.`;

    }

    generateReport() {
        let returnMessage = [`The garden has ${this.spaceAvailable} free space left.`];
        returnMessage.push(`Plants in the garden: ${this.plants.map(x => x.plantName).sort((a, b) => {
            if (a < b) return -1
            return 1
        }).join(", ")}`);

        if (this.storage.length < 1) {
            returnMessage.push(`Plants in the storage: The storage is empty.`);
        } else {
            const info = [];
            this.storage.forEach(x => {
                info.push(`${x.plantName} (${x.quantity})`);
            })
            returnMessage.push(`Plants in storage: ${info.join(', ')}`);
        }
        
        return returnMessage.join('\n');
    }

}
