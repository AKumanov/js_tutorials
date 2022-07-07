import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as albumService from "../services/albumService.js";

const catalogTemplate = (user, albums) => html`
    <!--Catalog-->
    <section id="catalogPage">
        <h1>All Albums</h1>
        ${albums.length === 0
            ? html`<p>No Albums in Catalog!</p>`
            :
            albums.map((album) => (
                html`
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
                                ?
                                html `
                                    <div class="btn-group">
                                        <a href="/albums/${album._id}" id="details">Details</a>
                                    </div>
                                `
                                : nothing
                            }
                            
                        </div>
                    </div>
                `
            ))
        
        }
        


        <!--No albums in catalog-->
        

    </section>
`;

export const catalogView = (ctx) => {
    albumService.getAllAlbums()
        .then((albums) => {
            ctx.render(catalogTemplate(ctx.user, albums));
        })

}