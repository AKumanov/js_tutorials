import * as authService from "../services/authService.js";

export const logoutView = (ctx) => {
    authService.logout()
        .then((response) => {
            if (response.status === 403) {
                return;
            }
            ctx.page.redirect('/');
        })
}