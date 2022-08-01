import { html } from "../../node_modules/lit-html/lit-html.js";
import * as validator from "../utils/validators.js";
import * as authService from "../services/authService.js"

const registerTemplate = (submitHandler) => html`
 <!-- Register Page ( Only for Guest users ) -->
    <section id="register-page" class="content auth">
        <form id="register" @submit="${submitHandler}" method="POST">
            <div class="container">
                <div class="brand-logo"></div>
                <h1>Register</h1>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="maria@email.com">

                <label for="pass">Password:</label>
                <input type="password" name="password" id="register-password">

                <label for="con-pass">Confirm Password:</label>
                <input type="password" name="confirm-password" id="confirm-password">

                <input class="btn submit" type="submit" value="Register">

                <p class="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
                </p>
            </div>
        </form>
    </section>
`;

export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        
        const {
            email,
            password,
            ...enries
        } = Object.fromEntries(new FormData(e.currentTarget));
        const rePass = enries['confirm-password'];
        
        if(!(validator.formValidator([email, password, rePass]))) {
            alert('all form fields are required');
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
            .catch((err) => {
                alert(err);
                return;
            })

    }

    ctx.render(registerTemplate(submitHandler));
}