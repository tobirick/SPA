import Mustache from 'mustache';

export class View {
    static async render(view, data = "") {
        const template = require(`../views/${view}.html`);
        const rendered = template(data);

        const domEl = document.getElementById('app');
        domEl.innerHTML = rendered;
    }
}