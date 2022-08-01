import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as gamesService from "../services/gamesService.js"

const detailsTemplate = (game, user, comments, submitHandler) => html`
     <!--Details Page-->
    <section id="game-details">
        <h1>Game Details</h1>
        <div class="info-section">

            <div class="game-header">
                <img class="game-img" src="${game.imageUrl}" />
                <h1>${game.title}</h1>
                <span class="levels">MaxLevel: ${game.maxLevel}</span>
                <p class="type">${game.category}</p>
            </div>

            <p class="text">
                ${game.summary}
            </p>

            <!-- Bonus ( for Guests and Users ) -->
            <div class="details-comments">
                <h2>Comments:</h2>
                <ul>
                    ${comments && comments.length > 0
                            
                        ? comments.map((comment) => (
                            html `
                            <li class="comment">
                                <p>Content: ${comment.comment}</p>
                            </li>
                        
                        `
                        )) 
                        : html `<p class="no-comment">No comments.</p>`

                    
                    }

                </ul>
                
            </div>

            ${user && user._id === game._ownerId
            
                ? html `
                    <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                    <div class="buttons">
                        <a href="/edit/${game._id}" class="button">Edit</a>
                        <a href="/delete/${game._id}" class="button">Delete</a>
                    </div>
                `
                : nothing
            }
            
        </div>

        <!-- Bonus -->
        <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
        ${user && user._id !== game._ownerId

            ? html `
                <article class="create-comment">
                    <label>Add new comment:</label>
                    <form class="form" @submit="${submitHandler}" method="POST">
                        <textarea name="comment" placeholder="Comment......"></textarea>
                        <input class="btn submit" type="submit" value="Add Comment">
                    </form>
                </article>
            `
            : nothing
        
        }

    </section>

`;


export const detailsView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const {comment} = Object.fromEntries(new FormData(e.currentTarget));
        gamesService.addComment(ctx.params.id, comment)
            .then(() => {
                ctx.page.redirect(`/details/${ctx.params.id}`)
            })
    }


    gamesService.loadComments(ctx.params.id)
        .then(comments => {
            gamesService.getGame(ctx.params.id)
                .then((game) => {
                ctx.render(detailsTemplate(game, ctx.user, comments, submitHandler));

            })
        })


    
}