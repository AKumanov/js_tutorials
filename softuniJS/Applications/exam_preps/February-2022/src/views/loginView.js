import { html } from "../../node_modules/lit-html/lit-html.js"
import * as validator from "../services/validators.js"
import * as authService from "../services/authService.js";

const loginTemplate = (submitHandler) => html`
    <!-- Login Page -->
    <section id="login">
        <div class="container">
            <form id="login-form" method="post" @submit="${submitHandler}">
                <h1>Login</h1>
                <p>Please enter your credentials.</p>
                <hr>

                <p>Username</p>
                <input placeholder="Enter Username" name="username" type="text">

                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn" value="Login">
            </form>
            <div class="signin">
                <p>Dont have an account?
                    <a href="/register">Sign up</a>.
                </p>
            </div>
        </div>
    </section>
`;


export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        
        const {
            username,
            password
        } = Object.fromEntries(new FormData(e.currentTarget));

        if(!(validator.formValidator([username, password]))) {
            alert('all fields must be filled!');
            return;
        }

        authService.login(username, password)
            .then(() => {
                ctx.page.redirect('/');
            })

            .catch((err) => {
                alert(err)
                return;
            })
    }
    ctx.render(loginTemplate(submitHandler));
}