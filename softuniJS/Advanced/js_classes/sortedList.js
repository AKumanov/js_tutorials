class List {
    constructor() {
        this.state = [];
        this.size = 0;
    }

    _sortState() {
        this.state.sort((a, b) => {
            if (a > b) return 1
            return - 1;
        });
    }
  
    add(element) {
        this.state.push(element);
        this.size += 1;
        this._sortState();
    }

    remove(index) {
        if(index < 0 || index > this.state.length) throw new Error('List index out of bounds');
        if(index !== -1) {
         this.state.splice(index, 1);
         this.size -= 1;
        }
        this._sortState();


    }

    get(index) {
        this._sortState();
        if(index < 0 || index > this.state.length) throw new Error('List index out of bounds');
        return this.state[index];
    }

}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
