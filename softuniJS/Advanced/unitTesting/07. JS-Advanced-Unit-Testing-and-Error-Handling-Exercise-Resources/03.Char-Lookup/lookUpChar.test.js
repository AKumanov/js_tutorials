const { lookupChar } = require('./lookUpChar');
const { expect } = require('chai');

describe('test lookup char functionality', () => {
    const VALID_STRING = 'test';
    const VALID_INDEX = 0;
    const VALID_OUTCOME = VALID_STRING[VALID_INDEX];
    const INVALID_INDEX_MESSAGE = 'Incorrect index';

    // Happy case
    it('returns t if valid index and string are passed', () => {
        expect(lookupChar(VALID_STRING, VALID_INDEX)).to.equal(VALID_OUTCOME);
    });

    it('returns char at specified index', () => {
        expect(lookupChar(VALID_STRING, 1)).to.equal('e');
    })

    it('returns incorrect index if string is empty', () => {
        expect(lookupChar('', 2)).to.equal(INVALID_INDEX_MESSAGE);
    })

    it('returns undefined if second param is missing', () => {
        expect(lookupChar(VALID_STRING)).to.equal(undefined);
    })

     // check type of input

    it('returns undefined if first param not string', () => {
        expect(lookupChar(2, 1)).to.be.undefined;
    })

    it('returns undefined if first param is not string', () => {
        expect(lookupChar([1, 2], 1)).to.be.undefined;
    })

    it('returns undefined if type of second param not integer', () => {
        expect(lookupChar(VALID_STRING, 'invalid')).to.be.undefined;
    })

    it('returns undefined if second param is not integer', () => {
        expect(lookupChar(VALID_STRING, '1')).to.be.undefined;
    })

    it('returns undefined if second param is floating point', () => {
        expect(lookupChar(VALID_STRING, 3.5)).to.be.undefined;
    })

    it('returns undefined if second param is not primitive', () => {
        expect(lookupChar(VALID_STRING, [1, 2, 3])).to.be.undefined;
    })

    // check higher - lower bound of index param

    it('returns Invalid index if index below lower bound', () => {
        expect(lookupChar(VALID_STRING, -1)).to.equal(INVALID_INDEX_MESSAGE)
    });

    it('returns Invalid index if index below lower bound', () => {
        expect(lookupChar(VALID_STRING, -2)).to.equal(INVALID_INDEX_MESSAGE);
    })

    it('returns Invalid index if index above highest bound', () => {
        expect(lookupChar(VALID_STRING, VALID_STRING.length)).to.equal(INVALID_INDEX_MESSAGE);
    });

})