import page from "../node_modules/page/page.mjs";
import { authUserMiddleware } from "./middlewares/authMiddleware.js";
import { renderContentMiddleware, renderNavigationMiddleware } from "./middlewares/renderContent.js";
import { createPostView } from "./views/createView.js";
import { dashboardView } from "./views/dashboardView.js";
import { deleteView } from "./views/deleteView.js";
import { postDetailsView } from "./views/detailsView.js";
import { donateView } from "./views/donateView.js";
import { editPostView } from "./views/editView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { myPostsView } from "./views/mypostsView.js";
import { registerView } from "./views/registerView.js";

// MIDDLEWARES
page(authUserMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

// AUTHENTICATION
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);

//HOME PAGE
page('/', dashboardView);

//CRUD OPERATIONS
page('/create', createPostView);
page('/details/:id', postDetailsView);
page('/edit/:id', editPostView);
page('/delete/:id', deleteView);
page('/myposts', myPostsView);

// BONUS
page('/donate/:id', donateView);

page.start()