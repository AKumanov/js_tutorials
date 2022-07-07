import page from "../node_modules/page/page.mjs";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { renderContentMiddleware, renderNavigationMiddleware } from "./middlewares/renderMiddleware.js";
import { catalogView } from "./views/catalogView.js";
import { createView } from "./views/createView.js";
import { deleteVeiw } from "./views/deleteView.js";
import { detailsViews } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";
import { searchView } from "./views/searchView.js";

page(authMiddleware);
page(renderContentMiddleware);
page(renderNavigationMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/catalog', catalogView);
page('/create', createView);
page('/albums/:id', detailsViews);
page('/delete/:id', deleteVeiw);
page('/edit/:id', editView);
page('/search', searchView);

page.start();