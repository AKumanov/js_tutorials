import { html } from "../../node_modules/lit-html/lit-html.js";
import * as bookService from "../services/bookService.js";

const homeTemplate = (books) => html`
    <!-- Dashboard Page ( for Guests and Users ) -->
    <section id="dashboard-page" class="dashboard">
        <h1>Dashboard</h1>
        <!-- Display ul: with list-items for All books (If any) -->
        <ul class="other-books-list">
        ${books && books.length > 0
            ? books.map((book) => (
                html`
                    <li class="otherBooks">
                        <h3>${book.title}</h3>
                        <p>Type: ${book.type}</p>
                        <p class="img"><img src="${book.imageUrl}"></p>
                        <a class="button" href="/details/${book._id}">Details</a>
                    </li>`
            ))
            : html `<p class="no-books">No books in database!</p>`

        }
            

        </ul>
        <!-- Display paragraph: If there are no books in the database -->
        
    </section>

`;

export const homeView = (ctx) => {
    bookService.getAllBooks()
        .then((books) => {
            ctx.render(homeTemplate(books));
        })
}