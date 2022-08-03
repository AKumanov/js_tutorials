import { html } from "../../node_modules/lit-html/lit-html.js";
import * as validator from "../utils/validator.js";
import * as authService from "../services/authService.js";


const loginTemplate = (submitHandler) => html`
    <!-- Login Page (Only for Guest users) -->
    <section id="login-page" class="auth">
        <form id="login" @submit="${submitHandler}" method="POST">
            <h1 class="title">Login</h1>

            <article class="input-group">
                <label for="login-email">Email: </label>
                <input type="email" id="login-email" name="email">
            </article>

            <article class="input-group">
                <label for="password">Password: </label>
                <input type="password" id="password" name="password">
            </article>

            <input type="submit" class="btn submit-btn" value="Log In">
        </form>
    </section>
`;

export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        
        const {
            email,
            password
        } = Object.fromEntries(new FormData(e.currentTarget));
 
        if(!(validator.formValidator([email, password]))) {
            alert('All fields are required!');
            return;
        }

        authService.login(email, password)
            .then((user) => {
                if (user.hasOwnProperty('code')) {
                    return;
                }
                ctx.page.redirect('/');
            })
    }
    ctx.render(loginTemplate(submitHandler));
}