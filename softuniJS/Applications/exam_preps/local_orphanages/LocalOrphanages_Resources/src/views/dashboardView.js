import { html } from "../../node_modules/lit-html/lit-html.js";
import * as postService from "../services/postService.js";


const singlePostTemplate = (post) => html`
    <div class="post">
        <h2 class="post-title">${post.title}</h2>
        <img class="post-image" src="${post.imageUrl}" alt="Kids clothes">
        <div class="btn-wrapper">
            <a href="/details/${post._id}" class="details-btn btn">Details</a>
        </div>
    </div>
`;


const dashboardTemplate = (posts) => html`
    <!-- Dashboard -->
    <section id="dashboard-page">
        <h1 class="title">All Posts</h1>

        <!-- Display a div with information about every post (if any)-->
        <div class="all-posts">
            ${posts && posts.length > 0
                ? posts.map((post) => singlePostTemplate(post))
                : html`<h1 class="title no-posts-title">No posts yet!</h1>`
            
            }
            
        </div>
        
    </section>
`;

export const dashboardView = (ctx) => {
    postService.getAllPosts()
        .then((posts) => {
            ctx.render(dashboardTemplate(posts));
        })
}