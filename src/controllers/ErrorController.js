import { Controller } from '../core/Controller';
import { View } from '../core/View';

export default class ErrorController extends Controller {
    test() {
        const html = '<h1>Error</h1>'
        
        View.render(html);
    }
}