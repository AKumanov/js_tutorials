import { render } from "../../node_modules/lit-html/lit-html.js";
import { nagivationView } from "../views/navigationView.js";

const headerElement = document.querySelector('.header-content');

const contentElement = document.querySelector('#main-content');

export const renderNavigationMiddleware = (ctx, next) => {
    render(nagivationView(ctx), headerElement);    
    next();
}

const renderContent = (templateRusult) => {
    render(templateRusult, contentElement)
}

export const renderContentMiddleware = (ctx, next) => {
    ctx.render = renderContent;
    next();
}