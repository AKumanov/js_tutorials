import * as authService from "../services/authServices.js";

export const authenticationMiddleware = (ctx, next) => {
    ctx.user = authService.getUser();
    next();
}