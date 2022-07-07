import { html } from "../../node_modules/lit-html/lit-html.js";

const homeNav = html`
    <a id="home" class="active">Home</a>
    <div id="user">
        <a id="logout" href="javascript:void(0)">Logout</a>
    </div>
`

const loginNav = html`
    <div id="guest">
        <a id="login" href="/login">Login</a>
        <a id="register" href="/register">Register</a>
    </div>
`;

const navigationTemplate = (user) => html`
    <nav>
        ${user
            ? homeNav
            : loginNav
        }
        
        <p class="email">Welcome, <span>${user}</span></p>
    </nav>
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}