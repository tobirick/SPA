import { Controller } from '../core/Controller';
import { View } from '../core/View';

export default class HomeController extends Controller {
    test() {
        const html = '<h1>Home</h1>'

        View.render(html);
    }
}