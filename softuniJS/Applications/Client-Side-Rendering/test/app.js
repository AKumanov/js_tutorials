import {html, render} from './node_modules/lit-html/lit-html.js';

const greetTemplate = () => html`
    <h1>Greetings from the Greet Template</h1>

`;

const templateResult = greetTemplate();

const root = document.getElementById('root');

render(templateResult, root);

console.log('hello there!!');