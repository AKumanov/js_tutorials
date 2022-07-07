import { html } from "../../node_modules/lit-html/lit-html.js";
import * as albumService from "../services/albumService.js";


const deleteTemplate = (yesHandler, noHandler) => html`
    <div>
        <h2>Are you sure that you want to delete the record?</h2>
        <button @click="${yesHandler}">Yes</button>
        <button @click="${noHandler}">Cancel</button>
    </div>
`;  

export const deleteView = (ctx) => {

    const yesHandler = (e) => {
        albumService.deleteAlbum(ctx.params.id)
            .then((res) => {
                console.log(res);
            })
        ctx.page.redirect('/catalog');
    }

    const noHandler = (e) => {
        ctx.page.redirect(`/albums/${ctx.params.id}`);
        

    }
    ctx.render(deleteTemplate(yesHandler, noHandler))
}