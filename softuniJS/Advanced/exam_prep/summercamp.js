class SummerCamp{
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            'child': 150,
            'student': 300,
            'collegian': 500,
        };
        this.listOfParticipants = [];
    };

    __checkname(name) {
        let currentNames = [];
        for (let i=0; i<this.listOfParticipants.length; i++) {
            currentNames.push(this.listOfParticipants[i]['name']);
        }
        if (!(currentNames.includes(name))) {
            return false
        }
        return true
    }

    __findPlayerByName(name) {
        for (let obj of this.listOfParticipants) {
            if (obj['name'] == name) {
                return obj
            }
        }
    }

    __findWinnerByPower(obj1, obj2) {
        if (obj1['power'] > obj2['power']) {
            return obj1
        } else {
            return obj2
        }
    }


    registerParticipant(name, condition, money) {
        if (!(condition in this.priceForTheCamp)) {
            // throw an error here;
            throw new Error('Unsuccessful registartion at the camp.');
             
        }
        if (this.__checkname(name)) {
            throw new Error(`The ${name} is already registered at the camp.`);
        }
        
        if (money < this.priceForTheCamp[condition]) {
            // throw an error here;
            throw new Error(`The money is not enough to pay the stay at the camp.`);
           
        }

        let currentParticipant = {
            'name': name,
            'condition': condition,
            'power': 100,
            'wins': 0
        };
        this.listOfParticipants.push(currentParticipant);
        return `The ${name} was successfully registered.`

    };

    

    unregisterParticipant(name) {
        for (let i=0; i<this.listOfParticipants.length; i++) {
            if (this.listOfParticipants[i]['name'] == name) {
                this.listOfParticipants.splice(i, 1);
                return `The ${name} removed successfully`;
            }
        }
        // return `The ${name} is not registered in the camp.`
        throw new Error(`The ${name} is not registered in the camp.`);
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (!this.__checkname(participant1)) {
            throw new Error('Invalid entered name/s.');
        }
        if (!(participant2 == null)) {
            if (!this.__checkname(participant2)) {
                throw new Error('Invalid entered name/s.');
            }
        }

        if (typeOfGame == 'Battleship') {
            for (let obj of this.listOfParticipants) {
                if (obj['name'] == participant1) {
                    obj['power'] += 20;
                    return `The ${obj['name']} successfully completed the game ${typeOfGame}`;
                }
            }

        } else if(typeOfGame == 'WaterBallonFights') {
            //TODO: implement
            let playerOneObj = this.__findPlayerByName(participant1);
            let playerTwoObj = this.__findPlayerByName(participant2);
            if (!(playerOneObj['condition'] == playerTwoObj['condition'])) {
                return `Choose players with equal conditions.`
            }

            if (playerOneObj['power'] == playerTwoObj['power']) {
                return `There is no winner`;
            }

            let winner = this.__findWinnerByPower(playerOneObj, playerTwoObj);
            winner['wins'] += 1;
            return `The ${winner['name']} is winner of the game ${typeOfGame}`;
        }
    
    }

    toString() {
        let firstLine = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
        for (let obj of this.listOfParticipants) {
            firstLine += `${obj.name} - ${obj.condition} - ${obj.power} - ${obj.wins}\n`;
        }
        return firstLine;
    }
                
}

// INPUT 1 TEST
// const summerCamp = new SummerCamp('Jane Austin', 'Pancharevo Sofia 1137, Bulgaria');
// console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 200));
// console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));
// console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));
// console.log(summerCamp.registerParticipant('Leila Wolfe', 'childd', 200));

// INPUT 2 TEST
// const summerCamp = new SummerCamp('Jane Austin', 'Pancharevo Sofia 1137, Bulgaria');
// console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));


// INPUT 4 TEST
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());


