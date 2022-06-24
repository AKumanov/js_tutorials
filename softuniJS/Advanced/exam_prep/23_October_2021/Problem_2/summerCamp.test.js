const { SummerCamp } = require('./summerCamp');
const { expect } = require('chai');

describe('test SummerCamp class', () => {
    describe('test registerParticipant', () => {
        it('throws error when condition not valid', () => {
            const camp = new SummerCamp('Alex', 'Sofia');
            expect(() => camp.registerParticipant('Vladimir', 'condition', 20)).to.throw('Unsuccessful registration at the camp.');
        })

        it('returns a message if participant is already in the camp', () => {
            const camp = new SummerCamp('Alex', 'Sofia');
            camp.registerParticipant('Alexander', 'student', 350);
            expect(camp.registerParticipant('Alexander', 'student', 450)).to.equal(`The Alexander is already registered at the camp.`);
        })

        it('return proper message if money are not enough to register participant', () => {
            const camp = new SummerCamp('Alex', 'Sofia');
            expect(camp.registerParticipant('Alexander', 'student', 100)).to.equal('The money is not enough to pay the stay at the camp.');
        })

        it('registers successfully with proper params and updates arr', () => {
            const camp = new SummerCamp('Alex', 'Sofia');
            const expectedStructure = [
                {
                    name: "Alexander",
                    condition: "student",
                    power: 100,
                    wins: 0,
                }
            ]
            expect(camp.registerParticipant('Alexander', 'student', 450)).to.equal('The Alexander was successfully registered.');
            expect(camp.listOfParticipants.length).to.equal(1);
            expect(camp.listOfParticipants).to.deep.equal(expectedStructure);
        })
    })

    describe('test unregisterParticipant ', () => {
        it('throws an error if participant is not registered', () => {
            const camp = new SummerCamp('Alex', 'Sofia');
            expect(() => camp.unregisterParticipant('Alexander')).to.throw('The Alexander is not registered in the camp.');
        })
        it('removes participant from arr and returns message', () => {
            const camp = new SummerCamp('Alex', 'Sofia');
            camp.registerParticipant('Alexander', 'student', 450);
            const expectedMessage = 'The Alexander removed successfully.';
            const beforeArrLength = camp.listOfParticipants.length;
            expect(camp.unregisterParticipant('Alexander')).to.equal(expectedMessage);
            expect(camp.listOfParticipants.length).to.not.equal(beforeArrLength);
        })
    })
    
    describe('test timeToPlay', () => {
        it('throws an error if any of the participants are not in the arr', () => {
            const camp = new SummerCamp('Alex', 'Sofia');
            camp.registerParticipant('Alexander', 'student', 450);
            camp.registerParticipant('Vladimir', 'student', 450);
            expect(() => camp.timeToPlay('WaterBalloonFights', 'participant1', 'Vladimir')).to.throw('Invalid entered name/s.');
            expect(() => camp.timeToPlay('WaterBalloonFights', 'Alexander', 'participant2')).to.throw('Invalid entered name/s.');
        })

        it('throws an error if both participants conditions doesnt match', () => {
            const camp = new SummerCamp('Alex', 'Sofia');
            camp.registerParticipant('Alexander', 'student', 450);
            camp.registerParticipant('Vladimir', 'child', 450);
            expect(() => camp.timeToPlay('WaterBalloonFights', 'Alexander', 'Vladimir')).to.throw('Choose players with equal condition.');
        })

        it('if game is Battleship returns proper message and increase power prop of participant by 20', () => {
            const camp = new SummerCamp('Alex', 'Sofia');
            camp.registerParticipant('Alexander', 'student', 450);
            expect(camp.timeToPlay('Battleship', 'Alexander')).to.equal('The Alexander successfully completed the game Battleship.');
            const participant = camp.listOfParticipants.find(p => p.name === 'Alexander');
            expect(participant.power).to.equal(120);
        })

        it('if game is WBF, the winner is the player with greater power, returns proper msg and increase wins', () => {
            const camp = new SummerCamp('Alex', 'Sofia');
            camp.registerParticipant('Alexander', 'student', 450);
            camp.registerParticipant('Vladimir', 'student', 450);
            expect(camp.timeToPlay('WaterBalloonFights', 'Alexander', 'Vladimir')).to.equal('There is no winner.');

        })

        it('if game is WBF, player One is the winner, wins increased by 1', () => {
            const camp = new SummerCamp('Alex', 'Sofia');
            camp.registerParticipant('Alexander', 'student', 450);
            camp.registerParticipant('Vladimir', 'student', 450);
            camp.timeToPlay('Battleship', 'Alexander');
            expect(camp.timeToPlay('WaterBalloonFights', 'Alexander', 'Vladimir')).to.equal('The Alexander is winner in the game WaterBalloonFights.');
            const alexander = camp.listOfParticipants.find(p => p.name === 'Alexander');
            expect(alexander.wins).to.equal(1);
            const vladimir = camp.listOfParticipants.find(p => p.name === 'Vladimir');
            expect(vladimir.wins).to.equal(0);
        })

        it('if game is WBF, player Two is the winner, wins increased by 1', () => {
            const camp = new SummerCamp('Alex', 'Sofia');
            camp.registerParticipant('Alexander', 'student', 450);
            camp.registerParticipant('Vladimir', 'student', 450);
            camp.timeToPlay('Battleship', 'Vladimir');
            const alexander = camp.listOfParticipants.find(p => p.name === 'Alexander');
            const vladimir = camp.listOfParticipants.find(p => p.name === 'Vladimir');
            expect(vladimir.power).to.equal(120);
            expect(camp.timeToPlay('WaterBalloonFights', 'Alexander', 'Vladimir')).to.equal('The Vladimir is winner in the game WaterBalloonFights.');
            expect(alexander.wins).to.equal(0);
            expect(vladimir.wins).to.equal(1);
        })
    })
    
    describe('test toString', () => {
        it('returns proper message', () => {
            const camp = new SummerCamp('Alex', 'Sofia');
            camp.registerParticipant('Alexander', 'student', 450);
            camp.registerParticipant('Vladimir', 'student', 450);
            camp.timeToPlay('Battleship', 'Alexander');
            camp.timeToPlay('WaterBalloonFights', 'Alexander', 'Vladimir')
            const arrResult = ['Alex will take 2 participants on camping to Sofia', 'Alexander - student - 120 - 1', 'Vladimir - student - 100 - 0'];
            const expectedResult = 'Alex will take 2 participants on camping to Sofia\nAlexander - student - 120 - 1\nVladimir - student - 100 - 0';
            expect(camp.toString()).to.equal(arrResult.join('\n'));
        })
    })
})  