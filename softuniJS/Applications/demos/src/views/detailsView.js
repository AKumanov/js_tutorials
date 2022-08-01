import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as musicService from "../services/musicService.js"

const detailsTemplate = (album, user) => html`
    <section id="detailsPage">
        <div class="wrapper">
            <div class="albumCover">
                <img src="${album.imgUrl}">
            </div>
            <div class="albumInfo">
                <div class="albumText">

                    <h1>Name: ${album.name}</h1>
                    <h3>Artist: ${album.artist}</h3>
                    <h4>Genre: ${album.genre}</h4>
                    <h4>Price: $${album.price}</h4>
                    <h4>Date: ${album.releaseDate}</h4>
                    <p>Description: ${album.description}</p>
                </div>
                
                ${user && user._id == album._ownerId
                    ? html `
                        <!-- Only for registered user and creator of the album-->
                        <div class="actionBtn">
                            <a href="/edit/${album._id}" class="edit">Edit</a>
                            <a href="/delete/${album._id}" class="remove">Delete</a>
                        </div>
                    `
                    : nothing
                }
                
            </div>
        </div>
    </section>
`;

export const detailsView = (ctx) => {
    musicService.getAlbumById(ctx.params.id)
        .then((album) => {
            console.log(album);
            console.log(ctx.user._id)
            ctx.render(detailsTemplate(album, ctx.user));
        })
}
