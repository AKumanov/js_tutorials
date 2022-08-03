import * as postService from "../services/postService.js";

export const donateView = (ctx) => {
    console.log(ctx.params);
    postService.donate(ctx.params.id)
        .then((donation) => {
            console.log(donation);
            ctx.page.redirect(`/details/${ctx.params.id}`);
        })
}