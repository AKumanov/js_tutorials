import page from "../node_modules/page/page.mjs";
import { authenticationMiddleware } from "./middlewares/authMiddleware.js";
import { renderContentMiddleware, renderNavigationMiddleware } from "./middlewares/renderContent.js";
import { addBookView } from "./views/addBookView.js";
import { bookDetailsView } from "./views/bookDetailsView.js";
import { dashboardView } from "./views/dashboardView.js";
import { editBookView } from "./views/editBookView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { myBooksView } from "./views/myBooksView.js";
import { registerView } from "./views/registerView.js";


page(authenticationMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);

page('/add-book', addBookView);
page('/dashboard', dashboardView);
page('/details/:id', bookDetailsView);
page('/edit/:id', editBookView);
page('/mybooks', myBooksView);

page.start();