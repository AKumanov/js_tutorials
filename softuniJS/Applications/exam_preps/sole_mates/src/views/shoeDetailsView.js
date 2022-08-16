import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as shoeService from "../services/shoeServices.js";

const shoeDetailsTemplate = (shoe, user) => html`
    <!-- Details page -->
    <section id="details">
        <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src="${shoe.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
            <p>
            Model: <span id="details-model">${shoe.model}</span>
            </p>
            <p>Release date: <span id="details-release">${shoe.release}</span></p>
            <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
            <p>Value: <span id="details-value">${shoe.value}</span></p>
        </div>

        ${user && user._id == shoe._ownerId
            ? html`
                <div id="action-buttons">
                    <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
                    <a href="/delete/${shoe._id}" id="delete-btn">Delete</a>
                </div>
            `
            : nothing

        }
        
        </div>
    </section>
`;

export const shoeDetailsView = (ctx) => {
    shoeService.getShoeById(ctx.params.id)
        .then((shoe) => {
            ctx.render(shoeDetailsTemplate(shoe, ctx.user));
        })
}