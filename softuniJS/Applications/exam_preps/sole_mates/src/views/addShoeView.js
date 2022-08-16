import { html } from "../../node_modules/lit-html/lit-html.js";
import * as validator from "../utils/validator.js";
import * as shoeServices from "../services/shoeServices.js";

const addShoeTemplate = (submitHandler) => html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
        <div class="form">
        <h2>Add item</h2>
        <form class="create-form" @submit="${submitHandler}" method="POST">
            <input
            type="text"
            name="brand"
            id="shoe-brand"
            placeholder="Brand"
            />
            <input
            type="text"
            name="model"
            id="shoe-model"
            placeholder="Model"
            />
            <input
            type="text"
            name="imageUrl"
            id="shoe-img"
            placeholder="Image url"
            />
            <input
            type="text"
            name="release"
            id="shoe-release"
            placeholder="Release date"
            />
            <input
            type="text"
            name="designer"
            id="shoe-designer"
            placeholder="Designer"
            />
            <input
            type="text"
            name="value"
            id="shoe-value"
            placeholder="Value"
            />

            <button type="submit">post</button>
        </form>
        </div>
    </section>
`;

export const addShoeView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const {
            brand,
            model,
            imageUrl,
            release,
            designer,
            value
        } = Object.fromEntries(new FormData(e.currentTarget));


        if (!(validator.formValidator([brand, model, imageUrl, release, designer, value]))) {
            alert('all fields are required!');
            return;
        }

        shoeServices.addShoe(brand, model, imageUrl, release, designer, value)
            .then((shoe) => {
                ctx.page.redirect('/dashboard');
            })
    }
    ctx.render(addShoeTemplate(submitHandler));
}