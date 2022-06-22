class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        // TODO - check capacity
        if(this.books.length + 1 > this.capacity) throw new Error('Not enough space in the collection.');

        // add Book
        const newBook = {
            bookName,
            bookAuthor,
            payed: false
        }
        this.books.push(newBook)

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        if(!(this.books.some(b => b.bookName === bookName))) throw new Error(`${bookName} is not in the collection.`);

        const foundBook = this.books.find(b => b.bookName === bookName);
        if(foundBook.payed) throw new Error(`${bookName} has already been paid.`);

        foundBook.payed = true;
        return `${bookName} has been successfully paid.`;

    }

    removeBook(bookName) {
        if(!(this.books.some(b => b.bookName === bookName))) throw new Error(`The book, you're looking for, is not found.`);

        const foundBook = this.books.find(b => b.bookName === bookName);
        if(!foundBook.payed) throw new Error(`${bookName} need to be paid before removing from the collection.`);

        for (let i=0; i < this.books.length; i++) {
            if (this.books[i].bookName === bookName) {
                this.books.splice(i, 1)
            }
        }
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        const returnArr = []; 
        if(bookAuthor) {
            if(!this.books.some(b => b.bookAuthor === bookAuthor)) throw new Error(`${bookAuthor} is not in the collection.`);

            for (let book of this.books) {
                if (book.bookAuthor === bookAuthor) {
                    returnArr.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? "Has Paid" : "Not Paid"}.`)
                }
            }

        } else {
            returnArr.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`)

            this.books.sort((a, b) => {
                if (a.bookName > b.bookName) return 1
                return -1
            })
            this.books.forEach(b => {
                returnArr.push(`${b.bookName} == ${b.bookAuthor} - ${b.payed ? "Has Paid" : "Not Paid"}.`)
            })

        }
        return returnArr.join('\n');
    }
}

