import { html } from "../../node_modules/lit-html/lit-html.js";
import * as validator from "../utils/validator.js";
import * as authService from "../services/authService.js";

const registerTemplate = (submitHandler) => html`
    <!-- Register Page ( Only for Guest users ) -->
    <section id="register-page" class="register">
        <form id="register-form" method="POST" @submit="${submitHandler}">
            <fieldset>
                <legend>Register Form</legend>
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
                <p class="field">
                    <label for="repeat-pass">Repeat Password</label>
                    <span class="input">
                        <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                    </span>
                </p>
                <input class="button submit" type="submit" value="Register">
            </fieldset>
        </form>
    </section>
`;

export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const {
            email,
            password,
            ...entries
        } = Object.fromEntries(new FormData(e.currentTarget))
        const repeatPass = entries['confirm-pass'];

        if(!(validator.formValidator([email, password, repeatPass]))) {
            alert('All fields are required!');
            return;
        }

        if(!(validator.passwordValidator(password, repeatPass))) {
            alert('Password missmatch!');
            return;
        }

        authService.register(email, password)
            .then((user) => {
                if (user.hasOwnProperty('code')) {
                    alert(user.message);
                    return;
                }
                ctx.page.redirect('/dashboard');
            })
    }
    ctx.render(registerTemplate(submitHandler));
}