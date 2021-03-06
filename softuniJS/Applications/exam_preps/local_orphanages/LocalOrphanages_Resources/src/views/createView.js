import { html } from "../../node_modules/lit-html/lit-html.js";
import * as postService from "../services/postService.js";
import * as validator from "../utils/validator.js";

const createPostTemplate = (submitHandler) => html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create-page" class="auth">
        <form id="create" @submit="${submitHandler}" method="POST">
            <h1 class="title">Create Post</h1>

            <article class="input-group">
                <label for="title">Post Title</label>
                <input type="title" name="title" id="title">
            </article>

            <article class="input-group">
                <label for="description">Description of the needs </label>
                <input type="text" name="description" id="description">
            </article>

            <article class="input-group">
                <label for="imageUrl"> Needed materials image </label>
                <input type="text" name="imageUrl" id="imageUrl">
            </article>

            <article class="input-group">
                <label for="address">Address of the orphanage</label>
                <input type="text" name="address" id="address">
            </article>

            <article class="input-group">
                <label for="phone">Phone number of orphanage employee</label>
                <input type="text" name="phone" id="phone">
            </article>

            <input type="submit" class="btn submit" value="Create Post">
        </form>
    </section>
`;

export const createPostView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const {
            title,
            description,
            imageUrl,
            address,
            phone
        } = Object.fromEntries(new FormData(e.currentTarget));

        if(!(validator.formValidator([title, description, imageUrl, address, phone]))) {
            alert('All fields are required!');
            return;
        }

        postService.createPost(title, description, imageUrl, address, phone)
            .then((post) => {
                ctx.page.redirect('/');
            })
    }
    ctx.render(createPostTemplate(submitHandler));
}