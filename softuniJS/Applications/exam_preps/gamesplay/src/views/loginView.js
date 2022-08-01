import { html } from "../../node_modules/lit-html/lit-html.js"
import * as validator from "../utils/validators.js";
import * as authService from "../services/authService.js";

const loginTemplate = (submitHandler) => html`
    <!-- Login Page ( Only for Guest users ) -->
    <section id="login-page" class="auth">
        <form id="login" @submit="${submitHandler}" method="POST">

            <div class="container">
                <div class="brand-logo"></div>
                <h1>Login</h1>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

                <label for="login-pass">Password:</label>
                <input type="password" id="login-password" name="password">
                <input type="submit" class="btn submit" value="Login">
                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </div>
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
            alert('all form fields are required');
            return;
        }

        // TODO: make the login request and save user data / accessToken in localstorage
        authService.login(email, password)
            .then(() => {
                ctx.page.redirect('/');
            })
            .catch((err) => {
                alert(err);
                return;
            })
    }

    ctx.render(loginTemplate(submitHandler));
}