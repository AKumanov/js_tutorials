import { html } from "../../node_modules/lit-html/lit-html.js";
import * as validator from "../utils/validators.js"
import * as gamesService from "../services/gamesService.js"

const createTemplate = (submitHandler) => html`
    
    <!-- Create Page ( Only for logged-in users ) -->
    <section id="create-page" class="auth">
        <form id="create" @submit="${submitHandler}" method="POST">
            <div class="container">

                <h1>Create Game</h1>
                <label for="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" placeholder="Enter game title...">

                <label for="category">Category:</label>
                <input type="text" id="category" name="category" placeholder="Enter game category...">

                <label for="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

                <label for="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

                <label for="summary">Summary:</label>
                <textarea name="summary" id="summary"></textarea>
                <input class="btn submit" type="submit" value="Create Game">
            </div>
        </form>
    </section>
`;


export const createView = (ctx) => {
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
            alert('all fields are required.');
            return;
        }
        gamesService.createGame(title, category, maxLevel, imageUrl, summary)
            .then(() => {
                ctx.page.redirect('/');
            })
            .catch((err) => {
                alert(err);
                return;
            })
    }

    ctx.render(createTemplate(submitHandler));
};