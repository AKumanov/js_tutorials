import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as musicService from "../services/musicService.js"

const albumTemplate = (album, user) => html`
    <div class="card-box">
        <img src="${album.imgUrl}">
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: $${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>
            ${user
                ? html `
                    <div class="btn-group">
                        <a href="/details/${album._id}" id="details">Details</a>
                    </div>
                `
                : nothing
            }
            
        </div>
    </div>
`;

const catalogTemplate = (albums, user) => html`
    <section id="catalogPage">
        <h1>All Albums</h1>

        ${albums && albums.length > 0
            ? albums.map((album) => (albumTemplate(album, user))) 
            
            : html `<p>No Albums in Catalog!</p>`
        
        }

    </section>

`;

export const catalogView = (ctx) => {
    musicService.getAllAlbums()
        .then((albums) => {
            ctx.render(catalogTemplate(albums, ctx.user));
        })
   
}