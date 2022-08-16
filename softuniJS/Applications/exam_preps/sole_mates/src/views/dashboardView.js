import { html } from "../../node_modules/lit-html/lit-html.js";
import * as shoeServices from "../services/shoeServices.js";

const shoesTemplate = (shoe) => html`
    <li class="card">
        <img src="${shoe.imageUrl}" alt="travis" />
        <p>
        <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
        </p>
        <p>
        <strong>Model: </strong
        ><span class="model">${shoe.model}</span>
        </p>
        <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
        <a class="details-btn" href="/details/${shoe._id}">Details</a>
    </li>
`;


const dashboardTemplate = (shoes) => html`
    <!-- Dashboard page -->
    <section id="dashboard">
        <h2>Collectibles</h2>
        <ul class="card-wrapper">
        <!-- Display a li with information about every post (if any)-->
        ${shoes && shoes.length > 0
            ? shoes.map((shoe) => shoesTemplate(shoe))
            : html`<h2>There are no items added yet.</h2>`
        }
        </ul>

    </section>
`;

export const dashboardView = (ctx) => {
    shoeServices.getAllShoes()
        .then((shoes) => {
            ctx.render(dashboardTemplate(shoes));
        })

}