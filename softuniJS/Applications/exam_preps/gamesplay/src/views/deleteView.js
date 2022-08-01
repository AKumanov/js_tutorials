import * as gamesService from "../services/gamesService.js";

export const deleteView = async (ctx) => {
    try {
        const game = await gamesService.getGame(ctx.params.id)

        let confirmed = confirm(`Do you want to delete the game: ${game.title}`);

        if(confirmed) {
            await gamesService.deleteGame(game._id);
            ctx.page.redirect('/');
        }
    } catch (err) {
        alert(err);
    }

};