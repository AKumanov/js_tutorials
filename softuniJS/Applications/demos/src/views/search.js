import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as musicService from "../services/musicService.js"
import * as validator from "../utils/validator.js"

const albumTemplate = (album, user) => html`
    <!--If have matches-->
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
                ? html`
                    <div class="btn-group">
                        <a href="/details/${album._id}" id="details">Details</a>
                    </div>
                `
                :nothing
            }
            
        </div>
    </div>
`;

const searchTemplate = (clickHandle, albums, user) => html`
    <section id="searchPage">
        <h1>Search by Name</h1>

        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
            <button class="button-list" @click="${clickHandle}">Search</button>
        </div>

        <h2>Results:</h2>

        <!--Show after click Search button-->
        <div class="search-result">
            ${albums && albums.length > 0
                ? albums.map((album) => albumTemplate(album, user))
                : html `<!--If there are no matches-->
                        <p class="no-result">No result.</p>`
            
            }
            
        </div>
    </section>
`;


export const searchView = (ctx) => {
    const clickHandle = (e) => {
        const query = e.currentTarget.parentElement.querySelector('#search-input').value
        if(!(validator.formValidator([query]))) {
            alert('field is required');
            return;
        }

        musicService.searchAlbum(query)
            .then((albums) => {
                ctx.render(searchTemplate(clickHandle, albums, ctx.user));

            })
    }
    ctx.render(searchTemplate(clickHandle));

}