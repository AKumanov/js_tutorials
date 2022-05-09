class List {
    constructor(body=[]) {
        this.body = body;
        this.size = this.get_size(); 
    }
    add (element) {
        this.body.push(element);
    }

    remove(index) {
        this.body.splice(index, 1);
    
    }

    get(index) {
        return this.body[index];
    }

    get_size() {
        return this.body.length;
    }
}

let l = new List();
l.add(5);
console.log(l.size);