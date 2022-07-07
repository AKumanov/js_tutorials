import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as albumService from "../services/albumService.js";
import * as authService from "../services/authService.js";

const catalogTemplate = (albums, user) =>html`
     <section id="catalogPage">
         <h1>All Albums</h1>
        ${albums.length === 0
            ? html` <p>No Albums in Catalog!</p>`
            :
            albums.map((al) => (
            html`<div class="card-box">
            <img src="${al.imgUrl}">
            <div>
                <div class="text-center">
                    <p class="name">Name: ${al.name}</p>
                    <p class="artist">Artist: ${al.artist}</p>
                    <p class="genre">Genre: ${al.genre}</p>
                    <p class="price">Price: $${al.price}</p>
                    <p class="date">Release Date: ${al.releaseDate}</p>
                </div>
                ${user
                    ? 
                        html`<div class="btn-group">
                        <a href="/albums/${al._id}" id="details">Details</a>
                        </div>`
                    : 
                    nothing
                }
                
            </div>
        </div>`

        ))}

        </section>
`;

export const catalogView = (ctx) => {
    albumService.getAllAlbums()
        .then(albums => {
            ctx.render(catalogTemplate(albums, authService.getUser()));
        })

}