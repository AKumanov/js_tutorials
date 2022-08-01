import * as authService from "../services/authService.js";



export const authMiddleware = (ctx, next) => {
    const user = authService.getUser();
    ctx.user = user;
    next();
}