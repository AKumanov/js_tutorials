const { carService } = require('./03. Car service_Resources');
const { expect } = require('chai');

describe('tests for     ', () => {
    describe('test isItExpensive', () => {
        it('returns proper msg if param is Engine or Transmission', () => {
            const engineTransExpectedReturn = 'The issue with the car is more severe and it will cost more money';
            expect(carService.isItExpensive('Engine')).to.equal(engineTransExpectedReturn);
            expect(carService.isItExpensive('Transmission')).to.equal(engineTransExpectedReturn);
        })
        it('returns diff msg is param is NOT Engine or Transmission', () => {
            const expectedReturnMsg = 'The overall price will be a bit cheaper';
            expect(carService.isItExpensive('other')).to.equal(expectedReturnMsg);
        })
    })
    describe('test disco                                                    unt', () => {
        it('throws error if params are not of type Number', () => {
            expect(() => carService.discount('10', 100)).to.throw('Invalid input');
            expect(() => carService.discount(10, '100')).to.throw('Invalid input');
            expect(() => carService.discount(10.5, '100')).to.throw('Invalid input');
        })

        it('cannot apply discount if numberOfParts is >= 2', () => {
            expect(carService.discount(2, 10)).to.equal('You cannot apply a discount');
            expect(carService.discount(1, 10)).to.equal('You cannot apply a discount');
            expect(carService.discount(0, 10)).to.equal('You cannot apply a discount');
        })

        it('returns you saved 15 if 2 > numberOfParts <= 7', () => {
            const totalPrice = 100
            const savedMoney =  100 * 0.15;
            const returnMessage = `Discount applied! You saved ${savedMoney}$`
            expect(carService.discount(3, totalPrice)).to.equal(returnMessage);
            expect(carService.discount(7, totalPrice)).to.equal(returnMessage);
        })
        it('returns you saved 30 if 7 > numberOfParts', () => {
            const totalPrice = 100;
            const savedMoney = 100 * 0.30;
            const returnMessage = `Discount applied! You saved ${savedMoney}$`;
            expect(carService.discount(8, totalPrice)).to.equal(returnMessage);
            expect(carService.discount(10, totalPrice)).to.equal(returnMessage);
        })
    })
    describe('test partsToBuy', () => {
        // partsCatalog = [{part, price}]
        it('throws error if both params are not arrays', () => {
            expect(() => carService.partsToBuy('partsCatalog', [])).to.throw('Invalid input');
            expect(() => carService.partsToBuy([], 'neededParts')).to.throw('Invalid input');
        })
        it('returns 0 if partsCatalog is empty', () => {
            expect(carService.partsToBuy([], ['blowoff valve'])).to.equal(0);
        })

        it('calculates correctly and returns the total price for parts', () => {
            const totalPrice = 60;
            const neededParts = ["valve", "aspirator", "airconditioning"];
            const partsCatalog = [{"part": "valve","price": 30, "part": "aspirator", "price":  10, "part": "airconditioning", "price": 60}];
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(totalPrice);
        })
    })
    
})