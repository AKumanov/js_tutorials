import * as authService from "../services/authService.js";

export const logoutView = (ctx) => {
    authService.lougout()
        .then(() => {
            ctx.page.redirect('/');
        })
}