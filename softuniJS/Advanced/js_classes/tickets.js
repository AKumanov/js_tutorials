const arr1 = ['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed']


const str1 = 'status';

class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = parseFloat(price);
        this.status = status;
    }
}


function manageTickets(ticketDescription, status) {
    const result = [];
    ticketDescription.forEach((ticket) => {
        let [destination, price, status] = ticket.split("|");
        result.push(new Ticket(destination, price, status));
    })

    if (status === "destination") {
        result.sort((a, b) => {
            if (a.destination < b.destination) return -1
            return 1
        })
    } else if(status === "price") {
        result.sort((a, b) => {
            if (a.price < b.price) return -1
            return -1
        })

    } else if (status === "status") {
        result.sort((a, b) => {
            if (a.status < b.status) return -1
            return 1
        })
    }
    return result
}

console.log(manageTickets(arr1, str1));