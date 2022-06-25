const { Person } = require('./PersonClass');

class Student extends Person {
    constructor(firstName, lastName, age, location, subjects) {
        super(firstName, lastName, age, location)
        this.subjects = subjects;    
    }
}
const st = new Student('Alexander', 'Kumanov', 17, 'Varna', 'Math');
