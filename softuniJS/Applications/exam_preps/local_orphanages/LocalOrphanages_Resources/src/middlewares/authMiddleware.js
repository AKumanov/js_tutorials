import * as authService from "../services/authService.js";

export const authUserMiddleware = (ctx, next) => {
    ctx.user = authService.getUser();
    next();
}