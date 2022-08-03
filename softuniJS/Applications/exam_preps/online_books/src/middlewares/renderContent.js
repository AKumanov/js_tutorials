import { render } from "../../node_modules/lit-html/lit-html.js";
import { navigationView } from "../views/navigationView.js";

const navigationElement = document.querySelector('#site-header');
const contentElement = document.querySelector('#site-content');

const renderContent = (templateResult) => {
    render(templateResult, contentElement)
}


export const renderNavigationMiddleware = (ctx, next) => {
    render(navigationView(ctx), navigationElement);
    next();
}

export const renderContentMiddleware = (ctx, next) => {
    ctx.render = renderContent;
    next();
}