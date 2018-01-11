export class View {
    static render(html) {
        document.getElementById('app').innerHTML = html;
    }
}