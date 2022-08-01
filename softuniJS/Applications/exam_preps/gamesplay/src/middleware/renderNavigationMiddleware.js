import { render } from "../../node_modules/lit-html/lit-html.js";
import { navigationView } from "../views/navigationView.js";

const headerElement = document.querySelector('.header-content');
const mainElement = document.querySelector('#main-content');

const renderContent = (templateResult) => {
    render(templateResult, mainElement);
}



export const navigationMiddleware = (ctx, next) => {
    render(navigationView(ctx), headerElement);
    next();
}

export const renderContentMiddleware =(ctx, next) => {
    ctx.render = renderContent;
    next();
}

