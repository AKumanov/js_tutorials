import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as albumService from "../services/albumService.js";
import * as validator from "../services/validators.js";

const searchTemplate = (submitHandler, user, albums) => html`
    <!--Search Page-->
    <section id="searchPage">
        <h1>Search by Name</h1>

        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
            <button class="button-list" @click="${submitHandler}">Search</button>
        </div>

        <h2>Results:</h2>

        <!--Show after click Search button-->
        <div class="search-result">

            ${albums && albums.length != 0
                ? albums.map((album) => (
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
                        html`
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
                : html`
                    <!--If there are no matches-->
                     <p class="no-result">No result.</p>
                `
                
            }

            <!--If have matches-->
            

            
        </div>
    </section>
`;

export const searchView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const query = e.currentTarget.parentElement.querySelector('input').value;

        if(!(validator.formValidator([query]))) {
            alert('input field must be filled');
            return;
        }

        albumService.getAlbumByQuery(query)
            .then((albums) => {
                let number = 1
                ctx.render(searchTemplate(submitHandler, ctx.user, albums, number));
            })
        }
        let albums = [];
        ctx.render(searchTemplate(submitHandler));
}