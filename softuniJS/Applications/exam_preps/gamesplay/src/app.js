import page from "../node_modules/page/page.mjs";
import { authMiddleware } from "./middleware/authMiddleware.js";
import { navigationMiddleware, renderContentMiddleware } from "./middleware/renderNavigationMiddleware.js";
import { allGamesView } from "./views/allGamesViews.js";
import { createView } from "./views/createView.js";
import { deleteView } from "./views/deleteView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";


page(authMiddleware);
page(navigationMiddleware);
page(renderContentMiddleware);


page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/all', allGamesView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/delete/:id', deleteView);


page.start();