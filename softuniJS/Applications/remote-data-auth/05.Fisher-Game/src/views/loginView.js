import { html } from "../../node_modules/lit-html/lit-html.js"
import * as authService from "../services/authService.js";
import * as validator from "../services/validator.js";

const loginTemplate = (submitHandler) => html`
     <!-- Login -->
    <section id="login-view">
        <h2>Login</h2>
        <form id="login" @submit="${submitHandler}" method="POST">
            <label>Email: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <p class="notification"></p>
            <button>Login</button>
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
            alert('all fields must be filled')
            return;
        }

        authService.login(email, password)
            .then(() => {
                ctx.page.redirect('/');
            })
            .catch((err) =>{
                alert(err);
                return;
            })
    }

    ctx.render(loginTemplate(submitHandler));
}