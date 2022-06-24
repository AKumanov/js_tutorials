class LibraryCollection {

    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    __checkForBook(bookName, message) {
        if(!this.books.some((b => b.bookName === bookName))) throw new Error(message);
    }


    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) throw new Error('Not enough space in the collection.');
        
        const newBook = {
            bookName,
            bookAuthor,
            payed: false
        };

        this.books.push(newBook);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;

    }

    payBook(bookName) {
        this.__checkForBook(bookName, `${bookName} is not in the collection.`);
        
        const foundBook = this.books.find((b) => b.bookName === bookName);
        if(foundBook.payed) throw new Error(`${bookName} has already been paid.`);
        
        foundBook.payed = true;

        return `${bookName} has been successfully paid.`;
        
    }

    removeBook(bookName) {
        this.__checkForBook(bookName, `The book, you're looking for, is not found.`);

        const foundBook = this.books.find((b) => b.bookName === bookName);
        if(!foundBook.payed) throw new Error(`${bookName} need to be paid before removing from the collection.`);
        
        const index = this.books.indexOf(foundBook);
        this.books.splice(index, 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        const returnArr = [];
        if (!bookAuthor) {
            returnArr.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`)
            
            this.books.sort((a, b) => {
                if (a.bookName > b.bookName) return 1;
                return -1;
            })

            this.books.forEach((book) => {
                returnArr.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? "Has Paid": "Not Paid"}.`);
            })
        
        } else {
            if(!this.books.some((b) => b.bookAuthor === bookAuthor)) throw new Error(`${bookAuthor} is not in the collection.`);

            const foundBook = this.books.find((b) => b.bookAuthor === bookAuthor);
            returnArr.push(`${foundBook.bookName} == ${foundBook.bookAuthor} - ${foundBook.payed ? "Has Paid": "Not Paid"}.`)
        }

        return returnArr.join('\n');

    }
}
