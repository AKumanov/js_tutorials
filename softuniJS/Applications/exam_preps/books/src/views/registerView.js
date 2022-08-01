import { html } from "../../node_modules/lit-html/lit-html.js";
import * as validator from "../utils/validators.js";
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
        } = Object.fromEntries(new FormData(e.currentTarget));
        const rePass = entries['confirm-pass'];
        console.log(email, password, rePass);

        if(!(validator.formValidator([email, password, rePass]))) {
            alert('all fields are required..');
            return;
        }
        if(password !== rePass) {
            alert('password missmatch');
            return;
        }

        authService.register(email, password)
            .then(() => {
                ctx.page.redirect('/');
            })

    }
    ctx.render(registerTemplate(submitHandler));
}