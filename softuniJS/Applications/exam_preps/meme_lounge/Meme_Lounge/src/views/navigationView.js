import { html } from "../../node_modules/lit-html/lit-html.js";

const guestLinks = html`
    <!-- Guest users -->
    <div class="guest">
        <div class="profile">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
        <a class="active" href="/">Home Page</a>
    </div>
`;

const userLinks = (user) => html`
        <!-- Logged users -->
    <div class="user">
        <a href="/create">Create Meme</a>
        <div class="profile">
            <span>Welcome, ${user.email}</span>
            <a href="/profile">My Profile</a>
            <a href="/logout">Logout</a>
        </div>
    </div>
`;

const navigationTemplate = (user) => html`
    <a href="/all">All Memes</a>
    ${user
        ? userLinks(user)
        : guestLinks
    }
    
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}