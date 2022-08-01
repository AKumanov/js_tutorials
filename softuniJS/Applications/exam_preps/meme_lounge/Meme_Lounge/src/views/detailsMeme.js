import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as memeService from "../services/memeService.js";

const detailsMemeTemplate = (meme, user, deleteHandler) => html`
    <!-- Details Meme Page (for guests and logged users) -->
    <section id="meme-details">
        <h1>Meme Title: ${meme.title}</h1>
        
        <div class="meme-details">
            <div class="meme-img">
                <img alt="meme-alt" src="${meme.imageUrl}">
            </div>
            <div class="meme-description">
                <h2>Meme Description</h2>
                <p>
                    ${meme.description}
                </p>
                ${user && user._id === meme._ownerId
                    ? html`
                        <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
                    <a class="button warning" href="/edit/${meme._id}">Edit</a>
                    <button class="button danger" @click="${deleteHandler}">Delete</button>`
                    
                    : nothing
                }
                
            </div>
        </div>
    </section>
`;

export const detailsMemeView = (ctx) => {
    memeService.getMemeById(ctx.params.id)
        .then((meme) => {
            const deleteHandler = () => {
                let confirmed = confirm(`Are you sure you want to delete meme: ${meme.title} ?`)

                if (confirmed) {
                    memeService.deleteMeme(meme._id)
                    .then(() => {
                        ctx.page.redirect('/all');
                    })
                }
                
            }
            ctx.render(detailsMemeTemplate(meme, ctx.user, deleteHandler));
        })
}