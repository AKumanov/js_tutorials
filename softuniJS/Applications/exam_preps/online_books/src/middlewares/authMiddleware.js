import * as authService from "../services/authService.js";

export const authenticationMiddleware = (ctx, next) => {
    ctx.user = authService.getUser();
    next();
}