class List {
    constructor() {
        this.state = [];
        this.size = 0;
    }

    get size() {
        return this.state.length
    }

    set size(temp) {
        return this.state.length;
    }

    add(element) {
        this.state.push(element);
    }

    remove(index) {
        if (index >= 0 && index < this.state.length) {
            this.state.splice(index, 1);
        } else {
            throw new Error("List index out of range");
        }
    }

    get(index) {
        if (index >= 0 && index < this.state.length) {
            return this.state[index];
        } else {
            throw new Error("List index out of range");
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);