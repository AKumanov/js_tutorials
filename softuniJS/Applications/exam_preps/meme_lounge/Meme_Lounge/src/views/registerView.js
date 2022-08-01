import { html } from "../../node_modules/lit-html/lit-html.js";
import * as validator from "../utils/validator.js";
import * as authService from "../services/authService.js";
import * as errorMessage from "../utils/errorMessage.js";


const registerTemplate = (submitHandler) => html`
    <!-- Register Page ( Only for guest users ) -->
    <section id="register">
        <form id="register-form" @submit="${submitHandler}" method="POST">
            <div class="container">
                <h1>Register</h1>
                <label for="username">Username</label>
                <input id="username" type="text" placeholder="Enter Username" name="username">
                <label for="email">Email</label>
                <input id="email" type="text" placeholder="Enter Email" name="email">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
                <label for="repeatPass">Repeat Password</label>
                <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
                <div class="gender">
                    <input type="radio" name="gender" id="female" value="female">
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="male" value="male" checked>
                    <label for="male">Male</label>
                </div>
                <input type="submit" class="registerbtn button" value="Register">
                <div class="container signin">
                    <p>Already have an account?<a href="/login">Sign in</a>.</p>
                </div>
            </div>
        </form>
    </section>
`;

export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const {
            username,
            email,
            password,
            repeatPass,
            gender
        } = Object.fromEntries(new FormData(e.currentTarget));

        if(!(validator.formValidator([username, email, password, repeatPass, gender]))) {
            errorMessage.showErrorMessage(ctx.message, 'All fields are required!');
            return;
        }
        if (!(validator.passwordValidator(password, repeatPass))) {
            errorMessage.showErrorMessage(ctx.message, 'Password Missmatch');
            
            return;
        }

        authService.register(username, email, password, gender)
            .then((user) => {
                if (user.hasOwnProperty('code')) {
                    errorMessage.showErrorMessage(ctx.message, user.message);
                    return;
                }
                ctx.page.redirect('/all');
            })

    }
    ctx.render(registerTemplate(submitHandler));
}