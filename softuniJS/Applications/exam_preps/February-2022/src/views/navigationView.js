import { html } from "../../node_modules/lit-html/lit-html.js"

const guestUsers = html`
    <!-- Guest users -->
    <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
`;

const loggedUsers = (user) => html`
    <!-- Logged users -->
    <div id="profile">
        <a>Welcome ${user.email}</a>
        <a href="#">My Listings</a>
        <a href="#">Create Listing</a>
        <a href="/logout">Logout</a>
    </div>
`;

const navigationTemplate = (user) => html`
     <nav>
        <a class="active" href="#">Home</a>
        <a href="#">All Listings</a>
        <a href="#">By Year</a>
        ${user
            ? loggedUsers(user)
            : guestUsers
        }
        
    </nav>
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}