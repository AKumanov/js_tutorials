import { html } from "../../node_modules/lit-html/lit-html.js"

const guestLinks = html`
    <!-- Guest users -->
    <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
`;

const userLinks = html`
    <!-- Logged-in users -->
    <div id="user">
        <a href="/create">Create Game</a>
        <a href="/logout">Logout</a>
    </div>
`;


const navigationTemplate = (user) => html`
    <!-- Navigation -->
    <h1><a class="home" href="/">GamesPlay</a></h1>
        <nav>
            <a href="/all">All games</a>
            ${user
                ? userLinks
                : guestLinks
            }
            
        </nav>
`;

export const navigationView = (ctx) => {

    return navigationTemplate(ctx.user);
};