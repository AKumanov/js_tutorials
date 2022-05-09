class Circle {
    static #INVALID_RADIUS = 'Radius must be a number'

    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this._radius
    }

    set radius(value) {
        if (typeof value != 'number') {
            throw new TypeError(Circle.#INVALID_RADIUS);
        }
        this._radius = value;
    }

    get diameter() {
        return this._radius * 2;
    }

    get area() {
        return this._radius ** 2 * Math.PI;
    }

    set diameter(value) {
        if (typeof value != 'number') {
            throw new TypeError('Diameter must be a number')    
        }
        this._radius = value / 2;
    }
}

const c = new Circle(4);
console.log('Instance ', c);
console.log('Radius ', c.radius)
console.log('Diameter ', c.diameter);
console.log('Area ', c.area);
c.radius = 4;
console.log('Area ', c.area);

// c.setDiameter(5)
// console.log(c)