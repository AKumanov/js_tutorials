import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../services/authServices.js";
import * as validator from "../utils/validator.js";

const registerTemplate = (submitHandler) => html`
    <!-- Register Page (Only for Guest users) -->
    <section id="register">
        <div class="form">
        <h2>Register</h2>
        <form class="login-form" @submit="${submitHandler}" method="POST">
            <input
            type="text"
            name="email"
            id="register-email"
            placeholder="email"
            />
            <input
            type="password"
            name="password"
            id="register-password"
            placeholder="password"
            />
            <input
            type="password"
            name="re-password"
            id="repeat-password"
            placeholder="repeat password"
            />
            <button type="submit">login</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
        </div>
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
        const rePass = entries['re-password'];

        if (!(validator.formValidator([email, password, rePass]))) {
            alert('all fields are required!');
            return;
        }

        if (!(validator.passwordValidator(password, rePass))) {
            alert('password mismatch!');
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