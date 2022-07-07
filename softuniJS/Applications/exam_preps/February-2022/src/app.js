import page from "../node_modules/page/page.mjs";
import { renderContentMiddleware, renderNavigationMiddleware } from "./middlewares/renderMiddleware.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import {authMiddleware} from "./middlewares/authMiddleware.js";
import { logoutView } from "./views/logoutView.js";
import { allListingsView } from "./views/allListingsView.js";


page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);


page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/listings', allListingsView);

page.start();