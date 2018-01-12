import { Controller } from '../core/Controller';
import { View } from '../core/View';

export default class ErrorController extends Controller {
    test() {
        const data = {
            title: 'Error',
            body: 'errorororororro'
        }
        View.render('index', data);
    }
}