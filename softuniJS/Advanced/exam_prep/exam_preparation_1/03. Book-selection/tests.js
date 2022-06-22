const { bookSelection } = require('./solution');
const { expect } = require('chai');

describe('tests for bookSelection', () => {
  describe('test isGenreSuitable', () => {
    it('if genre equals Thriller and age is less or equal to 12 return proper message', () => {
      expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
    })

    it ('if genre equals Horror and age is less or equal to 12 return proper message', () => {
      expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
    })

    it('if age is above 12 return message', () => {
      expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal('Those books are suitable')
    })

    it('if age is above 12 return message', () => {
      expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal('Those books are suitable')
    })
  })

  describe('test isItAffordable', () => {
    it('budget is bigger than the price', () => {
      expect(bookSelection.isItAffordable(10, 12)).to.equal('Book bought. You have 2$ left');
    })

    it('budget is not enough', () => {
      expect(bookSelection.isItAffordable(12, 10)).to.equal('You don\'t have enough money');
    })

    it('input is not valid', () => {
      expect(() => bookSelection.isItAffordable('1', '1').to.throw('Invalid input!'));
    })
  })

  describe('test suitableTitles', () => {
    it('throws an error when books is not an array', () => {
      expect(() => bookSelection.suitableTitles('array', 'genre').to.throw('Invalid input!'));
    })

    it('throws an error when wantedGenre is not string', () => {
      expect(() => bookSelection.suitableTitles([{'title': 'The Davinci Code'}], 1).to.throw('Invalid input!'));
    })

    it('returns an array when the input is correct and genre matches', () => {
      const inputArr = [{'title': 'The Da Vinci Code', 'genre': 'Thriller'}];
      const returnArr = ['The Da Vinci Code']
      expect(bookSelection.suitableTitles(inputArr, 'Thriller')).to.deep.equal(returnArr);
    })

    it('returns empty array when genre doesn\'t match', () => {
      const inputArr = [{'title': 'The Da Vinci Code', 'genre': 'Thriller'}];
      expect(bookSelection.suitableTitles(inputArr, 'Crime')).to.deep.equal([]);
    })
    
  })
})