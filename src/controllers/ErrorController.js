import { Controller } from '../core/Controller';
import { View } from '../core/View';

export default class ErrorController extends Controller {
    test() {
        const data = {
            title: 'Error',
            body: 'das ist leider ein error'
        }
        View.render('error', data);
    }
}