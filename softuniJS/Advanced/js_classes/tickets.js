
function tickets(args, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    
    const ticketHolder = [];
    args.forEach((arg) => {
        let [destination, price, status] = arg.split('|');
        price = Number(price);
        ticketHolder.push(new Ticket(destination=destination, price=price, status=status));
    })

    ticketHolder.sort((a, b) => {
        if(a[criteria] < b[criteria]) return - 1;
        return 1;
    })

    return ticketHolder;
}

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
))