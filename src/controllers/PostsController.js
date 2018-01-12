import { Controller } from '../core/Controller';
import { View } from '../core/View';

export default class PostsController extends Controller {
    showAll() {
        const data = {
            title: 'Das sind alle posts',
            body: 'huhu'
        }
        View.render('posts', data);
    }

    showOne(params) {
        const data = {
            title: 'Das ist eine Postseite',
            body: 'huhu',
            id: params.id
        }
        View.render('post', data);
    }
}