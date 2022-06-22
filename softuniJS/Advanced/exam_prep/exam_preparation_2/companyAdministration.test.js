const { companyAdministration } = require('./companyAdministration');
const { expect } = require('chai');

describe('tests for companyAdministration object', () => {
    describe('test hiringEmployee', () => {
        it('throws error when position is not Programmer', () => {
            expect(() => companyAdministration.hiringEmployee('name', 'position', 5)).to.throw('We are not looking for workers for this position.');
        })

        it('return not approved if years are less than 3', () => {
            expect(companyAdministration.hiringEmployee('name', 'Programmer', 2)).to.equal('name is not approved for this position.');
        })
        it('returns success if all params are valid', () => {
            expect(companyAdministration.hiringEmployee('name', 'Programmer', 3)).to.equal('name was successfully hired for the position Programmer.');
        })

    });

    describe('test calculateSalary', () => {
        it('throws error when hours are not a number', () => {
            expect(() => companyAdministration.calculateSalary('12')).to.throw('Invalid hours');
        })

        it('throws error when hours are not a positive number', () => {
            expect(() => companyAdministration.calculateSalary(-10)).to.throw('Invalid hours');
        })

        it('returns 60 when 4 hours are passed', () => {
            expect(companyAdministration.calculateSalary(4)).to.equal(60);
        })

        it('returns 161 * 15 + 1000 when 160 hours are passed', () => {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        })

        it('returns 0 when 0 hours are passed', () => {
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
        })

    });

    describe('test firedEmployee', () => {
        it('throws error when employees param is not an array', () => {
            expect(() => companyAdministration.firedEmployee('employee', 0)).to.throw('Invalid input');
        })

        it('throws error when arr is empty', () => {
            expect(() => companyAdministration.firedEmployee([], 1)).to.throw('Invalid input');
        })

        it('throws error when index above bound', () => {
            expect(() => companyAdministration.firedEmployee(['Alex', 'George'], 3)).to.throw('Invalid input');
        })

        it('throws error when index below bound', () => {
            expect(() => companyAdministration.firedEmployee(['Alex', 'George'], -1)).to.throw('Invalid input');
        })

        it('throws error when index is not a number', () => {
            expect(() => companyAdministration.firedEmployee(['Petar'], '1')).to.throw('Invalid input');
        })

        it('throws error when index is floating point', () => {
            expect(() => companyAdministration.firedEmployee(['Petar'], 1.5)).that.throw('Invalid input');
        })

        it('returns array absent the positioned item from index when params are true', () => {
            expect(companyAdministration.firedEmployee(['Petar', 'Ivan', 'Georgi'], 1)).to.equal('Petar, Georgi');
        })

        it('removed item is not in returned string', () => {
            expect(companyAdministration.firedEmployee(['Petar', 'Ivan', 'Georgi'], 1)).does.not.include('Ivan');
        })
    });
})
