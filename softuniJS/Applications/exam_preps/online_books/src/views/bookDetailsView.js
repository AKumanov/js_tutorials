import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as bookService from "../services/bookService.js";


const bookDetailsTemplate = (book, user, delHandler) => html`
    <!-- Details Page ( for Guests and Users ) -->
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${book.title}</h3>
            <p class="type">Type: ${book.type}</p>
            <p class="img"><img src="${book.imageUrl}"></p>
            <div class="actions">
                ${user && user._id === book._ownerId
                    ? html`
                        <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                        <a class="button" href="/edit/${book._id}">Edit</a>
                        <a class="button" href="#" @click="${delHandler}">Delete</a>
                    `
                    : nothing
                }
                

                <!-- Bonus -->
                <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                ${user && user._id !== book._ownerId

                    ? html`<a class="button" href="#">Like</a>`
                    : nothing
                
                }
                

                <!-- ( for Guests and Users )  -->
                <div class="likes">
                    <img class="hearts" src="/images/heart.png">
                    <span id="total-likes">Likes: 0</span>
                </div>
                <!-- Bonus -->
            </div>
        </div>
        <div class="book-description">
            <h3>Description:</h3>
            <p>${book.description}</p>
        </div>
    </section>
`;

export const bookDetailsView = (ctx) => {
    bookService.getBookById(ctx.params.id)
        .then((book) => {
            const delHandler = (e) => {
                e.preventDefault();
                
                let confirmed = confirm(`Are you sure you want to delete book ${book.title}?`)

                if (confirmed) {
                    bookService.deleteBook(book._id)
                        .then(() => {
                            ctx.page.redirect('/dashboard');
                        })
                }
            }
            ctx.render(bookDetailsTemplate(book, ctx.user, delHandler));
        })
}