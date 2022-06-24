const { library } = require('./library');
const { expect } = require('chai');

describe('test for library', () => {
    describe('test calcPriceOfBook', () => {
        it('throws an error on invalid input', () => {
            expect(() => library.calcPriceOfBook('nameOfBook', 'year')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(['nameOfBook'], 1990)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('bookName', 1880.32)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(123, 1880.32)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(123, -300)).to.throw('Invalid input');
        });
        it('doesnt give a discount and returns 20', () => {
            expect(library.calcPriceOfBook('BookName', 1990)).to.equal('Price of BookName is 20.00');
        })
        it('gives 50% discount, making the price 10', () => {
            expect(library.calcPriceOfBook('BookName', 1980)).to.equal('Price of BookName is 10.00');
        })
        it('gives 50% discount if price is less than 1980', () => {
            expect(library.calcPriceOfBook('BookName', 1300)).to.equal('Price of BookName is 10.00');
        })
    })

    describe('test findBook', () => {
        it('throws error if arr length is 0', () => {
            expect(() => library.findBook([], ' desiredBook')).to.throw('No books currently available');
        })

        it('returns not found if the desired book is not in the arr', () => {
            expect(library.findBook(['Troy', 'Life Style'], 'bookName')).to.equal('The book you are looking for is not here!');
        })

        it('returns the passed book from the array', () => {
            expect(library.findBook(['Troy', 'Life is Simple'], 'Troy')).to.equal('We found the book you want.');
        })


    })

    describe('test arrangeTheBooks', () => {
        it('throws error on invalid integer', () => {
            expect(() => library.arrangeTheBooks('countBooks')).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-10)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(3.5)).to.throw('Invalid input');
        })

        it('returns error message when room not enough for books', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        })

        it('returns ok message with correct input below 40', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        })
    })
})