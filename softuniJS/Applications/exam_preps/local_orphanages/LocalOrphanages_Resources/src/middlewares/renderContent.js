import { render } from "../../node_modules/lit-html/lit-html.js";
import { navigationView } from "../views/navigationView.js";

const headerElement = document.querySelector('.header-content');
const mainContentElement = document.querySelector('#main-content');

const renderContent = (templateResult) => {
    render(templateResult, mainContentElement);
}

export const renderContentMiddleware = (ctx, next) => {
    ctx.render = renderContent;
    next();
}

export const renderNavigationMiddleware = (ctx, next) => {
    render(navigationView(ctx), headerElement);
    next();
}