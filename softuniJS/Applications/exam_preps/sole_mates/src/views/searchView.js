import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as validator from "../utils/validator.js";
import * as shoeServices from "../services/shoeServices.js";

const shoeTemplate = (shoe, user) => html`
    <!-- Display a li with information about every post (if any)-->
    <li class="card">
        <img src="${shoe.imageUrl}" alt="travis" />
        <p>
            <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
        </p>
        <p>
            <strong>Model: </strong
            ><span class="model">${shoe.model}</span>
        </p>
        <p><strong>Value:</strong><span class="value">${shoe.release}</span>$</p>
        ${user
            ? html`<a class="details-btn" href="/details/${shoe._id}">Details</a>`
            : nothing
        }
        
    </li>
`;

const searchTemplate = (submitHandler, shoes, user) => html`
    <!-- Search Page (Only for logged-in users) -->
    <section id="search">
        <h2>Search by Brand</h2>

        <form class="search-wrapper cf" @submit="${submitHandler}" method="GET">
        <input
            id="#search-input"
            type="text"
            name="search"
            placeholder="Search here..."
            required
        />
        <button type="submit">Search</button>
        </form>

        <h3>Results:</h3>

        <div id="search-container">
        <ul class="card-wrapper">
           ${shoes && shoes.length > 0
            ? shoes.map((shoe) => shoeTemplate(shoe, user))
            : html`<h2>There are no results found.</h2>`
        }
        </ul>
        </div>
    </section>
`;

export const searchView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const {
            search
        } = Object.fromEntries(new FormData(e.currentTarget));

        if (!(validator.formValidator([search]))) {
            alert('Search field is required');
            return;
        }

        shoeServices.getShoeByQuery(search)
            .then((shoes) => {
                ctx.render(searchTemplate(submitHandler, shoes, ctx.user));
            })
        }
        ctx.render(searchTemplate(submitHandler));
}