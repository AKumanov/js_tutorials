import { html } from "../../node_modules/lit-html/lit-html.js";
import * as validator from "../utils/validator.js";
import * as memeService from "../services/memeService.js";
import * as errorMessage from "../utils/errorMessage.js";


const editMemeTemplate = (meme, submitHandler) => html`
    <!-- Edit Meme Page ( Only for logged user and creator to this meme )-->
    <section id="edit-meme">
        <form id="edit-form" @submit="${submitHandler}" method="PUT">
            <h1>Edit Meme</h1>
            <div class="container">
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title" .value="${meme.title}">
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description" .value="${meme.description}">
                        
                    </textarea>
                <label for="imageUrl">Enter Meme ImageUrl</label>
                <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value="${meme.imageUrl}">
                <input type="submit" class="registerbtn button" value="Edit Meme">
            </div>
        </form>
    </section>
`;

export const editMemeView = (ctx) => {
    memeService.getMemeById(ctx.params.id)
        .then((meme) => {
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

                memeService.editMeme(title, description, imageUrl, ctx.params.id)
                    .then((meme) => {
                        ctx.page.redirect(`/details/${meme._id}`);
                    })
            }
            ctx.render(editMemeTemplate(meme, submitHandler));
        })
}