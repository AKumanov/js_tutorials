
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `Hello, my name is ${this.name}`
    }
};

const person1 = new Person("Alexander", 30);
person1.height = 185
console.log(person1)
console.log(person1.sayHello())