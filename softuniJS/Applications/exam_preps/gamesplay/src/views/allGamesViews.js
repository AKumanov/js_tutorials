import { html } from "../../node_modules/lit-html/lit-html.js"
import * as gamesService from "../services/gamesService.js";
import { gameTemplate } from "./gameTemplate.js";

const allGamesTemplate = (games) => html`
     <!-- Catalogue -->
     <section id="catalog-page">
            <h1>All Games</h1>
            <!-- Display div: with information about every game (if any) -->
            ${games && games.length > 0
                ? games.map((game) => (
                    gameTemplate(game)
                ))

                : html `<h3 class="no-articles">No articles yet</h3>`

            }
            
        </section>
`;

export const allGamesView = (ctx) => {
    gamesService.getAllGames()
        .then((games) => {
            ctx.render(allGamesTemplate(games));
        })
}