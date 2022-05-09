const firstTestInput = {
    model: 'VW Gold II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14,
};

const secondInput = {
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17,

}
let car = {}



function createCar(firstTestInput) {
    const smallEngine = {
        power: 90,
        volume: 1800,
    };
    
    const normalEngine = {
        power: 120,
        volume: 2400,
    };
    
    const monsterEngine = {
        power: 200,
        volume: 3500,
    };
    
    let car = {};
    car.model = firstTestInput.model;
    if (firstTestInput.power <= 90) {
        car.engine = smallEngine;
    } else if (firstTestInput.power <= 120) {
        car.engine = normalEngine;
    } else {
        car.engine = monsterEngine;
    }

    if (firstTestInput.carriage === 'hatchback') {
        car.carriage = {
            type: firstTestInput.carriage,
            color: firstTestInput.color,
        };
    } else {
        car.carriage = {
            type: firstTestInput.carriage,
            color: firstTestInput.color,
        };
    }
    if (firstTestInput.wheelsize % 2 == 0) {
        const wheelsSize = Number(firstTestInput.wheelsize - 1);
        car.wheels = [wheelsSize, wheelsSize, wheelsSize, wheelsSize];
    } else {
        car.wheels = [Number(firstTestInput.wheelsize), Number(firstTestInput.wheelsize), Number(firstTestInput.wheelsize), Number(firstTestInput.wheelsize)];
    }
    return car;
}

const myCar = createCar(secondInput);
console.log(myCar.carriage);
console.log(myCar);

