import { html } from "../../node_modules/lit-html/lit-html.js";
import * as validator from "../utils/validators.js";
import * as authService from "../services/authService.js";

const loginTemplate = (submitHandler) => html`
    <!-- Login Page ( Only for Guest users ) -->
    <section id="login-page" class="login">
        <form id="login-form" method="POST" @submit="${submitHandler}">
            <fieldset>
                <legend>Login Form</legend>
                <p class="field">
                    <label for="email">Email</label>
                    <span class="input">
                        <input type="text" name="email" id="email" placeholder="Email">
                    </span>
                </p>
                <p class="field">
                    <label for="password">Password</label>
                    <span class="input">
                        <input type="password" name="password" id="password" placeholder="Password">
                    </span>
                </p>
                <input class="button submit" type="submit" value="Login">
            </fieldset>
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
            alert('all fields are required.');
            return;
        }

        authService.login(email, password)
            .then(() => {
                ctx.page.redirect('/');
            })
    }

    ctx.render(loginTemplate(submitHandler));
};