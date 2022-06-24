const { flowerShop } = require('./flowerShop');
const { expect } = require('chai');

describe('test for flowerShop object', () => {
    describe('test calcPriceFlowers', () => {
        it('throws error on invalid input', () => {
            expect(() => flowerShop.calcPriceOfFlowers(['flower'], 10, 10)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', '10', 10)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', '10', 10.5)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', 10, '10')).to.throw('Invalid input!');
        })

        it('returns proper message when input valid', () => {
            const flower = 'Rose';
            const price = 10;
            const quantity = 10;
            const result = (price * quantity).toFixed(2);
            const validInput = `You need $${result} to buy ${flower}!`;
            expect(flowerShop.calcPriceOfFlowers(flower, price, quantity)).to.equal(validInput);
        })

        it('returns wrong message when input valid forgotten toFixed(2)', () => {
            const flower = 'Rose';
            const price = 10;
            const quantity = 10;
            const result = (price * quantity);
            const validInput = `You need $${result} to buy ${flower}!`;
            expect(flowerShop.calcPriceOfFlowers(flower, price, quantity)).to.not.equal(validInput);
        })
        
    });

    describe('test checkFlowersAvailable', () => {
        
    });
    
    describe('test sellFlowers', () => {

    });
    
})