import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as postService from "../services/postService.js";

const postDetailsTemplate = (post, user, donations, result) => html`
    <section id="details-page">
        <h1 class="title">Post Details</h1>

        <div id="container">
            <div id="details">
                <div class="image-wrapper">
                    <img src="${post.imageUrl}" alt="Material Image" class="post-image">
                </div>
                <div class="info">
                    <h2 class="title post-title">${post.title}</h2>
                    <p class="post-description">Description: ${post.description}</p>
                    <p class="post-address">Address: ${post.address}</p>
                    <p class="post-number">Phone number: ${post.phone}</p>
                    <p class="donate-Item">Donate Materials: ${donations}</p>
                    ${user && user._id === post._ownerId
                        ? html`<div class="btns">
                                <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                                <a href="/delete/${post._id}" class="delete-btn btn">Delete</a>
                            </div>`
                        : nothing
                    }
                    ${user && user._id !== post._ownerId && result === 0
                        ? html`
                            <div class="btns">
                                <!--Bonus - Only for logged-in users ( not authors )-->
                                <a href="/donate/${post._id}" class="donate-btn btn">Donate</a>
                            </div>
                        `
                        : nothing
                    }
                </div>
            </div>
        </div>
    </section>
`;

export const postDetailsView = (ctx) => {
    
    postService.getPostById(ctx.params.id)
        .then((post) => {
            postService.getPostDonations(ctx.params.id)
                .then((donations) => {
                    postService.getPostDonationsByUser(ctx.params.id, ctx.user._id)
                        .then((result) => {
                            ctx.render(postDetailsTemplate(post, ctx.user, donations, result));
                        })
                })
        })
}