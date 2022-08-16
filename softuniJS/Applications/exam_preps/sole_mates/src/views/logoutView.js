import * as authService from "../services/authServices.js";

export const logoutView = (ctx) => {
    authService.logout()
        .then((res) => {
            ctx.page.redirect('/dashboard');
        })
}