import { html } from "../../node_modules/lit-html/lit-html.js";
import * as memeService from "../services/memeService.js";


const memeTemplate = (meme) => html`
    <div class="user-meme">
        <p class="user-meme-title">${meme.title}</p>
        <img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}">
        <a class="button" href="/details/${meme._id}">Details</a>
    </div>
`;

const profileTemplate = (user, memes) => html`
    <!-- Profile Page ( Only for logged users ) -->
    <section id="user-profile-page" class="user-profile">
        <article class="user-info">
            <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
            <div class="user-content">
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</p>
                <p>My memes count: ${memes.length}</p>
            </div>
        </article>
        <h1 id="user-listings-title">User Memes</h1>
        <div class="user-meme-listings">
            <!-- Display : All created memes by this user (If any) --> 
            ${memes && memes.length > 0
                ? memes.map((meme) => memeTemplate(meme))
                : html`<p class="no-memes">No memes in database.</p>`
            
            }
            
        </div>
    </section>
`;

export const profileView = (ctx) => {
    memeService.getMemesByAuthorId(ctx.user._id)
        .then((memes) => {
            ctx.render(profileTemplate(ctx.user, memes));
        })
}