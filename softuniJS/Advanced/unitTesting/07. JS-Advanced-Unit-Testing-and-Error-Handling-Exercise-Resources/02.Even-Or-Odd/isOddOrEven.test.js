const { isOddOrEven } = require('./isOddOrEven');
const { expect } = require('chai')

describe('it works', () => {
    it('returns undefined when the arg is not string', () => {
        expect(isOddOrEven(1)).to.equal(undefined);
    });

    it('returns undefined when no args are passed', () => {
        expect(isOddOrEven()).to.be.undefined;
    })

    it('returns even when an even length string is passed', () => {
        expect(isOddOrEven('test')).to.equal('even');
        
    });

    it('returns odd when the arg\'s length is odd', () => {
        expect(isOddOrEven('odd')).to.equal('odd');
    });

})