class Player {
    constructor(firstName, lastName, number) {
        Object.assign(this, {
            firstName,
            lastName,
            number
        })
    }
};

const lampard = new Player("Frank", "Lampard", 30);

class Person {
    RACE = "Human"
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.race = this.RACE;

    }
    // overritten string method
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }


    // using static methods for internall configuration of the class state, not the class instance 
    static cheer() {
        console.log("Woo hoo!")
        console.log(this)
    }

}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');

console.log(person.race)