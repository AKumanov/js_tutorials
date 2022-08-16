import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../services/authServices.js";
import * as validator from "../utils/validator.js";

const loginTemplate = (submitHandler) => html`
    <!-- Login Page (Only for Guest users) -->
    <section id="login">
        <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit="${submitHandler}" method="POST">
            <input type="text" name="email" id="email" placeholder="email" />
            <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            />
            <button type="submit">login</button>
            <p class="message">
            Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
        </div>
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
            alert('all fields are required!');
            return;
        }

        authService.login(email, password)
            .then((user) => {
                if (user.hasOwnProperty('code')) {
                    alert(user.message);
                    return;
                }
                ctx.page.redirect('/dashboard');
            })
    } 
    ctx.render(loginTemplate(submitHandler));
}