import page  from "../node_modules/page/page.mjs"
import { renderContentMiddleware, renderNavigationMiddleware } from "./middlewares/navigationMiddleware.js"
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";

page(renderNavigationMiddleware);
page(renderContentMiddleware)

page('/', homeView);
page('/login', loginView);
page('/register', registerView);

page.start()