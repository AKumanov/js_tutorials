import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as bookService from "../services/bookService.js";
import * as validator from "../utils/validators.js";

const editTemplate = (book, submithanlder) => html	`
    <!-- Edit Page ( Only for the creator )-->
    <section id="edit-page" class="edit">
        <form id="edit-form"method="PUT" @submit="${submithanlder}">
            <fieldset>
                <legend>Edit my Book</legend>
                <p class="field">
                    <label for="title">Title</label>
                    <span class="input">
                        <input type="text" name="title" id="title" value="${book.title}">
                    </span>
                </p>
                <p class="field">
                    <label for="description">Description</label>
                    <span class="input">
                        <textarea name="description"
                            id="description">${book.description}</textarea>
                    </span>
                </p>
                <p class="field">
                    <label for="image">Image</label>
                    <span class="input">
                        <input type="text" name="imageUrl" id="image" value="${book.imageUrl}">
                    </span>
                </p>
                <p class="field">
                    <label for="type">Type</label>
                    <span class="input">
                        <select id="type" name="type" value="Fiction">
                            <option value="Fiction" selected>${book.type}</option>
                            <option value="Romance">Romance</option>
                            <option value="Mistery">Mistery</option>
                            <option value="Classic">Clasic</option>
                            <option value="Other">Other</option>
                        </select>
                    </span>
                </p>
                <input class="button submit" type="submit" value="Save">
            </fieldset>
        </form>
    </section>

`;


export const editView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const {
            title,
            description,
            imageUrl,
            type
        } = Object.fromEntries(new FormData(e.currentTarget));

        if(!(validator.formValidator([title, description, imageUrl, type]))) {
            alert('all form fields are required..');
            return;
        }

        bookService.updateBook(title, description, imageUrl, type, ctx.params.id)
            .then(() => {
                ctx.page.redirect(`/details/${ctx.params.id}`);
            })


    }
    bookService.getOneBook(ctx.params.id)
        .then((book) => {
            ctx.render(editTemplate(book, submitHandler));

        })
}