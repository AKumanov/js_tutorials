import { render } from "../../node_modules/lit-html/lit-html.js";
import { navigationView } from "../views/navigationView.js";

const headerElement = document.querySelector(".header-content");
const mainElement = document.getElementById("root");

const renderContent = (templateResult) => {
    render(templateResult, mainElement);
}

export const renderMainContentMiddleware = (ctx, next) => {
    ctx.render = renderContent;
    next();
}



export const renderNavigationMiddleware = (ctx, next) => {
    render(navigationView(ctx), headerElement);
    next();
}