import * as authService from "../services/authService.js";

export const logoutView = (ctx) => {
    authService.logout(ctx.user)
    .then(() => {
        ctx.page.redirect('/');
    })
}