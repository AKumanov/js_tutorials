import { html } from "../../node_modules/lit-html/lit-html.js";
import * as validator from "../utils/validator.js";
import * as authService from "../services/authService.js";
import * as errorMessage from "../utils/errorMessage.js";

const loginTemplate = (submitHandler) => html`
    <!-- Login Page ( Only for guest users ) -->
    <section id="login">
        <form id="login-form" @submit="${submitHandler}" method="POST">
            <div class="container">
                <h1>Login</h1>
                <label for="email">Email</label>
                <input id="email" placeholder="Enter Email" name="email" type="text">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn button" value="Login">
                <div class="container signin">
                    <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                </div>
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
            errorMessage.showErrorMessage(ctx.message, 'All fields are required!');
            return;
        }

        authService.login(email, password)
            .then((user) => {
                if (user.hasOwnProperty('code')) {
                    errorMessage.showErrorMessage(ctx.message, user.message);
                    return;
                }
                ctx.page.redirect('/all');
            })
    }
    ctx.render(loginTemplate(submitHandler));
}