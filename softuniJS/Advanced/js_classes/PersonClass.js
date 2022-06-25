class Person {
    INVALID_NAME_MESSAGE = "name must be of type string only";
    INVALID_AGE_MESSAGE = 'First name must be at least 5 symbols long';
    
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    get firstName() {
        return this._firstName
    }

    set firstName(value) {
        if(!(typeof value === 'string')) throw new Error(this.INVALID_NAME_MESSAGE);

        if(!(value.length >= 5)) throw new Error(this.INVALID_AGE_MESSAGE);

        this._firstName = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if(value < 18) throw new Error('You are too young to go to college');

        this._age = value;
    }
}

module.exports = { Person };