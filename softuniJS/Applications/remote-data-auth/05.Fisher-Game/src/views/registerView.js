import { html } from "../../node_modules/lit-html/lit-html.js"
import * as validator from "../services/validator.js"
import * as authService from "../services/authService.js";

const registerTemplate = (submitHandler) => html`
     <!-- Register -->
     <section id="register-view">
            <h2>Register</h2>
            <form id="register" @submit="${submitHandler}" method="POST">
                <label>Email: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <label>Repeat: <input type="password" name="rePass"></label>
                <p class="notification"></p>
                <button>Register</button>
            </form>
    </section>
`;

export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const {
            email,
            password,
            rePass
        } = Object.fromEntries(new FormData(e.currentTarget));

        if(!(validator.formValidator([email, password, rePass]))) {
            alert('all fields must be filled')
            return;
        }

        if (password !== rePass) {
            alert('password missmatch');
            return;
        }

        authService.register(email, password, rePass)
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