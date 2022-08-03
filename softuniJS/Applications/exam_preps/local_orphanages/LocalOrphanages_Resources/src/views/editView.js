import { html } from "../../node_modules/lit-html/lit-html.js";
import * as postService from "../services/postService.js";
import * as validator from "../utils/validator.js";

const editPostTemplate = (post, submitHandler) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit-page" class="auth">
        <form id="edit" @submit="${submitHandler}" method="PUT">
            <h1 class="title">Edit Post</h1>

            <article class="input-group">
                <label for="title">Post Title</label>
                <input type="title" name="title" id="title" value="${post.title}">
            </article>

            <article class="input-group">
                <label for="description">Description of the needs </label>
                <input type="text" name="description" id="description" value="${post.description}">
            </article>

            <article class="input-group">
                <label for="imageUrl"> Needed materials image </label>
                <input type="text" name="imageUrl" id="imageUrl" value="${post.imageUrl}">
            </article>

            <article class="input-group">
                <label for="address">Address of the orphanage</label>
                <input type="text" name="address" id="address" value="${post.address}">
            </article>

            <article class="input-group">
                <label for="phone">Phone number of orphanage employee</label>
                <input type="text" name="phone" id="phone" value="${post.phone}">
            </article>

            <input type="submit" class="btn submit" value="Edit Post">
        </form>
    </section>
`;

export const editPostView = (ctx) => {
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
            return alert('All form fields are required');
        }

        postService.updatePost(title, description, imageUrl, address, phone, ctx.params.id)
            .then((post) => {
                ctx.page.redirect(`/details/${post._id}`);
            })


    }
    postService.getPostById(ctx.params.id)
        .then((post) => {
            
            ctx.render(editPostTemplate(post, submitHandler));
        })
}