import * as bookService from "../services/bookService.js";

export const deleteView = async (ctx) => {
    const book = await bookService.getOneBook(ctx.params.id)

    let confirmed = confirm(`Are you sure you want to delete the book: ${book.title}?`)

    if(confirmed) {
        await bookService.deleteBook(book._id)
        ctx.page.redirect('/');
    }
}