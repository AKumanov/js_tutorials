const { mathEnforcer } = require('./mathEnforcer');
const {expect, closeTo} = require('chai');

describe('testing of the math Enforcer logic', () => {
    describe('addFive', () => {
        it('object has addFive propertiy', () => {
            expect(mathEnforcer.hasOwnProperty('addFive')).to.equal(true);
        })

        it('returns five when 0 is passed', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
        })

        it('adds five to a correctly given integer', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        })

        it('adds five to a floating point number', () => {
            expect(mathEnforcer.addFive(3.14)).closeTo(8.14, 0.01);
        })
        
        it('adds five to a negative integer', () => {
        expect(mathEnforcer.addFive(-5)).to.equal(0);
        })
    
        it('returns undefined if num is not integer', () => {
        expect(mathEnforcer.addFive('5')).to.be.undefined;
        })
    
        it('returns undefined if num is not passed as param', () => {
        expect(mathEnforcer.addFive()).to.be.undefined;
        })

    })

    describe('subtractTen', () => {
        it('object has subtractTen property', () => {
            expect(mathEnforcer.hasOwnProperty('subtractTen')).to.equal(true);
        })

        it('returns -10 when 0 is passed', () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        })

        it('subtracts ten to a correctly given integer', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        })

        it('subtracts ten to a floating point number', () => {
            expect(mathEnforcer.subtractTen(13.14)).closeTo(3.14, 0.01);
        })
        
        it('subtracts ten to a negative integer', () => {
        expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        })
    
        it('returns undefined if passed param is not an integer', () => {
        expect(mathEnforcer.subtractTen('10')).to.be.undefined;
        })
    
        it('returns undefined if num is not passed as a param', () => {
        expect(mathEnforcer.subtractTen()).to.be.undefined;
        })
        
    })

    describe('sum', () => {
        it('object has sum property', () => {
            expect(mathEnforcer.hasOwnProperty('sum')).to.equal(true);
        })
        it('returns 10 if 8 and 2 are passed as input params' ,() => {
            expect(mathEnforcer.sum(8, 2)).to.equal(10);
        })

        it('returns 0 when 0 and 0 are passed', () => {
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
        })

        it('sums two floating point numbers', () => {
            expect(mathEnforcer.sum(13.14, 13.14)).closeTo(26.28, 0.01);
        })
    
        it('returns 0 if -10 and +10 are passed as input params', () => {
        expect(mathEnforcer.sum(-10, 10)).to.equal(0);
        })
    
        it('returns -20 if -10 and -10 are passed as input params', () => {
        expect(mathEnforcer.sum(-10, -10)).to.equal(-20);
        })
    
        it('returns undefined if first param is not integer', () => {
        expect(mathEnforcer.sum('2', 8)).to.be.undefined;
        })
    
        it('returns undefined if second param is not integer', () => {
        expect(mathEnforcer.sum(2, '8')).to.be.undefined;
        })
    
        it('returns undefined if both params are strings', () => {
        expect(mathEnforcer.sum('test', 'test')).to.equal(undefined);
        })
    
        it('returns undefined if only one param is passed', () => {
        expect(mathEnforcer.sum(1)).to.equal(undefined);
        })
    
        it('returns undefined if no params are passed', () => {
        expect(mathEnforcer.sum()).to.equal(undefined);
        })
    
        it('returns 4.14 if 4 and 0.14 are passed', () => {
        expect(mathEnforcer.sum(4, 0.14)).to.equal(4.14);
        })


    })

    it('object does not have test property', () => {
        expect(mathEnforcer.hasOwnProperty('test')).to.equal(false);
    })

})