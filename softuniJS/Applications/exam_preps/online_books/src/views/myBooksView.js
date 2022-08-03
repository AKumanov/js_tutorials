import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as bookService from "../services/bookService.js";


const bookTemplate = (book) => html`
<li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <a class="button" href="/details/${book._id}">Details</a>
    </li>
`;


const myBooksTemplate = (books, user) => html`
     <!-- My Books Page ( Only for logged-in users ) -->
     <section id="my-books-page" class="my-books">
        <h1>My Books</h1>
        <!-- Display ul: with list-items for every user's books (if any) -->
        <ul class="my-books-list">
            ${books && books.length > 0
                ? books.map((book) => bookTemplate(book))
                : html`<p class="no-books">No books in database!</p>`
                
            }
            
        </ul>

    </section>
`;

export const myBooksView = (ctx) => {
    bookService.getBooksByAuthorId(ctx.user._id)
        .then((books) => {
            ctx.render(myBooksTemplate(books, ctx.user));
        })
}