class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

let finalArray = new Array;
let sampleInput = [
    'Philadephia|94.20|available', 
    'New York City|95.99|available', 
    'New York City|95.99|sold', 
    'Boston|126.20|departed'
]


for (let i=0; i< sampleInput.length; i++) {
    let current = sampleInput[i].split("|");
    finalArray.push(new Ticket(current[0], current[1], current[2]));
}

console.log(finalArray);