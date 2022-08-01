import page from "../node_modules/page/page.mjs";
import { authenticationMiddleware } from "./middlewares/authMiddleware.js";
import { errorMessage, renderContentMiddleware, renderNavigationMiddleware } from "./middlewares/renderContent.js";
import { allMemesView } from "./views/allMemesView.js";
import { createMemeView } from "./views/createMeme.js";
import { detailsMemeView } from "./views/detailsMeme.js";
import { editMemeView } from "./views/editMeme.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { profileView } from "./views/profileView.js";
import { registerView } from "./views/registerView.js";
import { welcomeView } from "./views/welcomeView.js";


page(authenticationMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);
page(errorMessage);

page('/', welcomeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);

page('/all', allMemesView);

page('/create', createMemeView);
page('/details/:id', detailsMemeView);
page('/edit/:id', editMemeView);

page('/profile', profileView);

page.start();