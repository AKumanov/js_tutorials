import { html } from "../../node_modules/lit-html/lit-html.js";
import * as validator from "../utils/validator.js";
import * as memeService from "../services/memeService.js";
import * as errorMessage from "../utils/errorMessage.js";


const createTemplate = (submitHandler) => html`
    <!-- Create Meme Page ( Only for logged users ) -->
    <section id="create-meme">
        <form id="create-form" @submit="${submitHandler}" method="POST">
            <div class="container">
                <h1>Create Meme</h1>
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title">
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                <label for="imageUrl">Meme Image</label>
                <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                <input type="submit" class="registerbtn button" value="Create Meme">
            </div>
        </form>
    </section>
`;

export const createMemeView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const {
            title,
            description,
            imageUrl
        } = Object.fromEntries(new FormData(e.currentTarget));

        if (!(validator.formValidator([title, description, imageUrl]))) {
            errorMessage.showErrorMessage(ctx.message, 'All fields are required!');

            return;
        }

        memeService.createMeme(title, description, imageUrl)
            .then((meme) => {
                if (meme.hasOwnProperty('code')) {
                    return;
                }
                ctx.page.redirect('/all');
            })
    }
    ctx.render(createTemplate(submitHandler));
}