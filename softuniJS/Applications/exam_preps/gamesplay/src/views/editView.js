import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as validator from "../utils/validators.js"
import * as gamesService from "../services/gamesService.js"

const editTemplate = (game, submitHandler) => html `
    <!-- Edit Page ( Only for the creator )-->
    <section id="edit-page" class="auth">
        <form id="edit" @submit="${submitHandler}" method="PUT">
            <div class="container">

                <h1>Edit Game</h1>
                <label for="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" value="${game.title}">

                <label for="category">Category:</label>
                <input type="text" id="category" name="category" value="${game.category}">

                <label for="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" value="${game.maxLevel}">

                <label for="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" value="${game.imageUrl}">

                <label for="summary">Summary:</label>
                <textarea name="summary" id="summary">${game.summary}</textarea>
                <input class="btn submit" type="submit" value="Edit Game">

            </div>
        </form>
    </section>
`;



export const editView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const {
            title,
            category,
            maxLevel,
            imageUrl,
            summary
        } = Object.fromEntries(new FormData(e.currentTarget));

        if(!(validator.formValidator([title, category, maxLevel, imageUrl, summary]))) {
            alert('all form fields are required');
            return;
        }

        gamesService.updateGame(title, category, maxLevel, imageUrl, summary, ctx.params.id)
            .then(() => {
                ctx.page.redirect(`/details/${ctx.params.id}`)
            })
    }

    gamesService.getGame(ctx.params.id)
        .then((game) => {
            ctx.render(editTemplate(game, submitHandler));  

        })
};