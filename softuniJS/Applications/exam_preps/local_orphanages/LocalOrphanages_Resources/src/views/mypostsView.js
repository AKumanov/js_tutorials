import { html } from "../../node_modules/lit-html/lit-html.js";
import * as postService from "../services/postService.js";

const postTemplate = (post) => html`
    <div class="post">
        <h2 class="post-title">${post.title}</h2>
        <img class="post-image" src="${post.imageUrl}" alt="Material Image">
        <div class="btn-wrapper">
            <a href="/details/${post._id}" class="details-btn btn">Details</a>
        </div>
    </div>
`;

const myPostsTemplate = (posts) => html`
    <!-- My Posts -->
    <section id="my-posts-page">
        <h1 class="title">My Posts</h1>

        <!-- Display a div with information about every post (if any)-->
        <div class="my-posts">
            ${posts && posts.length > 0
                ? posts.map((post) => postTemplate(post))
                : html`<h1 class="title no-posts-title">You have no posts yet!</h1>`
            
            }
        
    </section>
`;

export const myPostsView = (ctx) => {
    postService.getPostsByAuthorId(ctx.user._id)
        .then((posts) => {
            console.log(posts)
            ctx.render(myPostsTemplate(posts));
        })
}