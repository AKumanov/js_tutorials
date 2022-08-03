import { html } from "../../node_modules/lit-html/lit-html.js";

const guestLinks = html`
     <!-- Guest users -->
     <div id="guest">
        <a class="button" href="/login">Login</a>
        <a class="button" href="/register">Register</a>
    </div>
`;

const userLinks = (user) => html`
    <!-- Logged-in users -->
    <div id="user">
        <span>Welcome, ${user.email}</span>
        <a class="button" href="/mybooks">My Books</a>
        <a class="button" href="/add-book">Add Book</a>
        <a class="button" href="/logout">Logout</a>
    </div>
`;

const navigationTemplate = (user) => html`
    <nav class="navbar">
        <section class="navbar-dashboard">
            <a href="/dashboard">Dashboard</a>
           ${user
            ? userLinks(user)
            : guestLinks
            }
            
        </section>
    </nav>
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}