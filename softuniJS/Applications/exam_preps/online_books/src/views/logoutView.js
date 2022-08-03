import * as authService from "../services/authService.js";

export const logoutView = (ctx) => {
    authService.logout()
        .then((response) => {
            ctx.page.redirect('/dashboard');
        })
}