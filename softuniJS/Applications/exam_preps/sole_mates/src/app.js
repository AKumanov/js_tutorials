import page from "../node_modules/page/page.mjs";
import { authenticationMiddleware } from "./middleware/authMiddleware.js";
import { renderMainContentMiddleware, renderNavigationMiddleware } from "./middleware/renderContent.js";
import { addShoeView } from "./views/addShoeView.js";
import { dashboardView } from "./views/dashboardView.js";
import { deleteShoeView } from "./views/deleteShoeView.js";
import { editShoeView } from "./views/editShoeView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";
import { searchView } from "./views/searchView.js";
import { shoeDetailsView } from "./views/shoeDetailsView.js";

// MIDDLEWARES
page(authenticationMiddleware);
page(renderNavigationMiddleware);
page(renderMainContentMiddleware);

//HOME PAGE
page('/', homeView);
page('/dashboard', dashboardView);

// AUTHENTICATION URLS
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);

// CRUD URLS
page('/add', addShoeView);
page('/details/:id', shoeDetailsView);
page('/edit/:id', editShoeView);
page('/delete/:id', deleteShoeView);

// SEARCH [BONUS] FUNCTIONALITY
page('/search', searchView);

page.start();