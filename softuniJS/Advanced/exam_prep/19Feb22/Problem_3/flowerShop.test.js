const { flowerShop } = require('./flowerShop');
const { expect } = require('chai');

describe('tests for flowerShop object', () => {
    describe('test calcPrifeOfFlowers(flower: str, price: int, quantity: int)', () => {
        it('raises error when invalid flower param is passed', () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, 2, 3)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', '2', 3)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', 2, '3')).to.throw('Invalid input!');
        })

        it('returns proper message when correct params are passed', () => {
            const price = 2
            const quantity = 5
            const flower = 'Rose';
            const expectedResult = `You need $${(price * quantity).toFixed(2)} to buy ${flower}!`
            expect(flowerShop.calcPriceOfFlowers(flower, price, quantity)).to.equal(expectedResult); 
        })
    });

    describe('test checkFlowersAvailable(flower: str, gardenArr: [])', () => {
        // TODO: possibly check for the input
        it('returns proper message when flower is in the arr', () => {
            const gardenArr = ['Rose', 'Lily', 'Orchid']
            const flower = 'Lily';
            const expectedResult = `The ${flower} are available!`;
            expect(flowerShop.checkFlowersAvailable(flower, gardenArr)).to.equal(expectedResult);
        })
        it('returns proper message when flower is not in arr', () => {
            const gardenArr = ['Rose', 'Orchid']
            const flower = 'Lily';
            const expectedResult = `The ${flower} are sold! You need to purchase more!`;
            expect(flowerShop.checkFlowersAvailable(flower, gardenArr)).to.equal(expectedResult);
        })
    });

    describe('test sellFlowers(gardenArr: [], space: int)', () => {
        // validate input
        it('raises an error when invalid input type is passed', () => {
            expect(() => flowerShop.sellFlowers('arr', 2)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['Flower1'], '2')).to.throw('Invalid input!');
        })
        // validate index
        it('raises error when the space (index) is outside the bound of the arr', () => {
            const gardenArr = ['Rose', 'Lily', 'Orchid']
            expect(() => flowerShop.sellFlowers(gardenArr, -1)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(gardenArr, gardenArr.length + 1)).to.throw('Invalid input!');
        })
        it('returns a string containing the joined arr absent of the index item', () => {
            const gardenArr = ['Rose', 'Lily', 'Orchid'];
            const space = 1;
            const expectedResult = 'Rose / Orchid';
            expect(flowerShop.sellFlowers(gardenArr, space)).to.equal(expectedResult);
        })

    });
})