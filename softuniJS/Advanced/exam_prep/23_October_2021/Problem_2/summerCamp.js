class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500
        };
        this.listOfParticipants = [];
        this.POSSIBLE_GAMES = ['WaterBalloonFights', 'Battleship'];

    };

    registerParticipant(name, condition, money) {
        // possibe typeo in the error msg from Softuni;
        if(!(Object.keys(this.priceForTheCamp).includes(condition))) throw new Error('Unsuccessful registration at the camp.');
        // TODO: check if name in this.listOfParticipants --> what is the structure here?
        if(this.listOfParticipants.some(p => p.name === name)) return `The ${name} is already registered at the camp.`;

        // check if money are enough - money vary based on type (condition) => 

        if(money < this.priceForTheCamp[condition]) return `The money is not enough to pay the stay at the camp.`;

        const newParticipant = {
            name,
            condition,
            power: 100,
            wins: 0
        };
        this.listOfParticipants.push(newParticipant);
        return `The ${name} was successfully registered.`;
    
    }

    unregisterParticipant(name) {
        if(!this.listOfParticipants.some(x => x.name === name)) throw new Error(`The ${name} is not registered in the camp.`);

        const index = this.listOfParticipants.indexOf(this.listOfParticipants.find(p => p.name === name));
        this.listOfParticipants.splice(index, 1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame === 'Battleship') {
            if(!this.listOfParticipants.some(p => p.name === participant1)) throw new Error('Invalid entered name/s.');
            const playerOne = this.listOfParticipants.find(p => p.name === participant1);
            playerOne.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        } else {
            if(!this.listOfParticipants.some(p => p.name === participant1) || !this.listOfParticipants.some(p => p.name === participant2)) throw new Error('Invalid entered name/s.');
            const playerOne = this.listOfParticipants.find(p => p.name === participant1);
            const playerTwо = this.listOfParticipants.find(p => p.name === participant2);
            if(playerOne.condition !== playerTwо.condition) throw new Error('Choose players with equal condition.');
            if(playerOne.power > playerTwо.power) {
                playerOne.wins += 1
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if(playerTwо.power > playerOne.power) {
                playerTwо.wins += 1
                return `The ${participant2} is winner in the game ${typeOfGame}.`

            } else {
                return `There is no winner.`;
            }
        }
    }

    toString() {
        const returnArr = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];

        this.listOfParticipants.sort((a, b) => {
            if (a.wins < b.wins) return 1;
            return -1;
        });

       
        this.listOfParticipants.forEach((participant) => {
            returnArr.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`);
        })

        return returnArr.join('\n');
    }
}

module.exports = { SummerCamp };