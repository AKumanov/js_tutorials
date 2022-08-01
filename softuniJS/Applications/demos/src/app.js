import page from "../node_modules/page/page.mjs";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { renderContentMiddleware, renderNavigationMiddleware } from "./middlewares/renderContentMiddleware.js";
import { catalogView } from "./views/catalogView.js";
import { createView } from "./views/crateView.js";
import { deleteView } from "./views/deleteView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";
import { searchView } from "./views/search.js";

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);



page('/', homeView);
// AUTH SERVICE
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
// CRUD OPERATIONS
page('/catalog', catalogView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/delete/:id', deleteView);

//BONUS
page('/search', searchView);


page.start();