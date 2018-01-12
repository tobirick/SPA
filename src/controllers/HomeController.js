import { Controller } from '../core/Controller';
import { View } from '../core/View';

export default class HomeController extends Controller {
    test() {
        const data = {
            title: 'Tobi',
            body: 'huhu'
        }
        View.render('index', data);
    }
}