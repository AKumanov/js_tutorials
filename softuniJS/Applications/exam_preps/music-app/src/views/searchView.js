import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as validators from "../services/validators.js";
import * as albumService from "../services/albumService.js";
import * as authService from "../services/authService.js";

const searchTemplate = (buttonHandler, res, user) => html`
    <section id="searchPage">
        <h1>Search by Name</h1>

        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
            <button class="button-list" @click="${buttonHandler}">Search</button>
        </div>

        <h2>Results:</h2>
        ${res && res.length >= 1
            ?
            res.map(alb => { return(
                html`
                    <!--Show after click Search button-->
                    <div class="search-result">
                        <!--If have matches-->
                        <div class="card-box">
                            <img src="${alb.imgUrl}">
                            <div>
                                <div class="text-center">
                                    <p class="name">Name: ${alb.name}</p>
                                    <p class="artist">Artist: ${alb.artist}</p>
                                    <p class="genre">Genre: ${alb.genre}</p>
                                    <p class="price">Price: $${alb.price}</p>
                                    <p class="date">Release Date: ${alb.releaseDate}</p>
                                </div>

                                ${user
                                    ? 
                                        html`<div class="btn-group">
                                        <a href="/albums/${alb._id}" id="details">Details</a>
                                        </div>`
                                    : 
                                    nothing
                }
                            </div>
                        </div>
                `
            )})
            : 
            html`
            <div class="search-result">
            <p class="no-result">No result.</p>
            </div>`
        }
            
    </section>
`;

export const searchView = (ctx) => {

    const buttonHandler = (e) => {
        const query = e.currentTarget.parentElement.querySelector('input').value; 
        if (!(validators.validateForm([query]))) {
            alert('Search field is empty!');
            return;
        }

        albumService.searchAlbum(query)
            .then(res => {
                console.log(res);
                ctx.render(searchTemplate(buttonHandler, res, authService.getUser()))
            })
        }
        let res = []
        ctx.render(searchTemplate(buttonHandler));

}