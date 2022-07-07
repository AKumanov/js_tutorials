import { html } from "../../node_modules/lit-html/lit-html.js";

const homeTemplate = () => html`
     <!-- Home Page -->
     <section id="home-view">
        <fieldset id="main">
            <legend>Catches</legend>
            <div id="catches">
                <div class="catch">
                    <label>Angler</label>
                    <input type="text" class="angler" value="Paulo Admorim">
                    <label>Weight</label>
                    <input type="text" class="weight" value="636">
                    <label>Species</label>
                    <input type="text" class="species" value="Atlantic Blue Marlin">
                    <label>Location</label>
                    <input type="text" class="location" value="Vitoria, Brazil">
                    <label>Bait</label>
                    <input type="text" class="bait" value="trolled pink">
                    <label>Capture Time</label>
                    <input type="number" class="captureTime" value="80">
                    <button class="update" data-id="07f260f4-466c-4607-9a33-f7273b24f1b4">Update</button>
                    <button class="delete" data-id="07f260f4-466c-4607-9a33-f7273b24f1b4">Delete</button>
                </div>
            </div>
        </fieldset>
        <aside>
            <button class="load">Load</button>
            <form id="addForm">
                <fieldset>
                    <legend>Add Catch</legend>
                    <label>Angler</label>
                    <input type="text" name="angler" class="angler" />
                    <label>Weight</label>
                    <input type="number" name="weight" class="weight" />
                    <label>Species</label>
                    <input type="text" name="species" class="species" />
                    <label>Location</label>
                    <input type="text" name="location" class="location" />
                    <label>Bait</label>
                    <input type="text" name="bait" class="bait" />
                    <label>Capture Time</label>
                    <input type="number" name="captureTime" class="captureTime" />
                    <button disabled class="add">Add</button>
                </fieldset>
            </form>
        </aside>
    </section>
`;


export const homeView = (ctx) => {
    ctx.render(homeTemplate());
}