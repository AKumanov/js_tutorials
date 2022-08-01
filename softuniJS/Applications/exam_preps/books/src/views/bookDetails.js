import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as bookService from "../services/bookService.js";


const bookDetailsTemplate = (book, user, likeHandler, likes) => html`
    <!-- Details Page ( for Guests and Users ) -->
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${book.title}</h3>
            <p class="type">Type: ${book.type}</p>
            <p class="img"><img src="${book.imageUrl}"></p>
            <div class="actions">
                ${user && user._id === book._ownerId
                    ? html `
                        <a class="button" href="/edit/${book._id}">Edit</a>
                        <a class="button" href="/delete/${book._id}">Delete</a>
                    `
                    : nothing
                }
                ${user && user._id !== book._ownerId
                
                    ? html `<a class="button" href="#" @click="${likeHandler}">Like</a>`
                    : nothing
                }
                
                <!-- ( for Guests and Users )  -->
                <div class="likes">
                    <img class="hearts" src="/images/heart.png">
                    <span id="total-likes">Likes: ${likes}</span>
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
    
    bookService.getOneBook(ctx.params.id)
        .then((book) => {
            let likes = document.querySelector('likes');
            console.log(likes)
            const likeHandler = (e) => {
                e.preventDefault();
                likes ++
                
            }
            ctx.render(bookDetailsTemplate(book, ctx.user, likeHandler, likes));
        })
}