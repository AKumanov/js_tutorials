import { html } from "../../node_modules/lit-html/lit-html.js";
import * as validator from "../utils/validator.js";
import * as shoeServices from "../services/shoeServices.js";

const editShoeTemplate = (shoe, submitHandler) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
        <h2>Edit item</h2>
        <form class="edit-form" @submit="${submitHandler}" method="PUT">
            <input
            type="text"
            name="brand"
            id="shoe-brand"
            placeholder="Brand"
            .value="${shoe.brand}"
            />
            <input
            type="text"
            name="model"
            id="shoe-model"
            placeholder="Model"
            .value="${shoe.model}"
            />
            <input
            type="text"
            name="imageUrl"
            id="shoe-img"
            placeholder="Image url"
            .value="${shoe.imageUrl}"
            />
            <input
            type="text"
            name="release"
            id="shoe-release"
            placeholder="Release date"
            .value="${shoe.release}"
            />
            <input
            type="text"
            name="designer"
            id="shoe-designer"
            placeholder="Designer"
            .value="${shoe.designer}"
            />
            <input
            type="text"
            name="value"
            id="shoe-value"
            placeholder="Value"
            .value="${shoe.value}"
            />

            <button type="submit">post</button>
        </form>
        </div>
    </section>
`;

export const editShoeView = (ctx) => {
    shoeServices.getShoeById(ctx.params.id)
        .then((shoe) => {
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

                shoeServices.updateShoe(brand, model, imageUrl, release, designer, value, ctx.params.id)
                    .then((shoe) => {
                        ctx.page.redirect(`/details/${shoe._id}`);
                    })
            }
            ctx.render(editShoeTemplate(shoe, submitHandler));

        })
}