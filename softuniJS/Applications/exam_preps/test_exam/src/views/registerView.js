import { html } from "../../node_modules/lit-html/lit-html.js";
import * as validator from "../services/validators.js";
import * as authService from "../services/authService.js";

const registerTemplate = (submitHandler) => html`
      <!--Registration-->
    <section id="registerPage">
        <form @submit="${submitHandler}" method="POST">
            <fieldset>
                <legend>Register</legend>

                <label for="email" class="vhide">Email</label>
                <input id="email" class="email" name="email" type="text" placeholder="Email">

                <label for="password" class="vhide">Password</label>
                <input id="password" class="password" name="password" type="password" placeholder="Password">

                <label for="conf-pass" class="vhide">Confirm Password:</label>
                <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

                <button type="submit" class="register">Register</button>

                <p class="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
                </p>
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

        const rePass = entries['conf-pass']
        
        if(!(validator.formValidator([email, password, rePass]))) {
            alert('all fields must be filled');
            return;
        }

        if(password !== rePass) {
            alert('password missmatch');
            return;
        }
        
        authService.register(email, password)
            .then((user) => {
                if(!user) return;
                    
                ctx.page.redirect('/');
            })

    }


    ctx.render(registerTemplate(submitHandler));
}