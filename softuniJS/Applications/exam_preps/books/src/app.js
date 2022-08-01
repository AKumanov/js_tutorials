import page from "../node_modules/page/page.mjs";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { renderContentMiddleware, renderNavigationMiddleware } from "./middlewares/renderContentMiddleware.js";
import { addView } from "./views/addView.js";
import { bookDetailsView } from "./views/bookDetails.js";
import { deleteView } from "./views/deleteView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { myBooksView } from "./views/myBooksView.js";
import { registerView } from "./views/registerView.js";

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/', homeView);
// authentication
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
// crud operations
page('/add', addView);
page('/details/:id', bookDetailsView);
page('/edit/:id', editView);
page('/delete/:id', deleteView);
page('/my-books', myBooksView);


page.start();