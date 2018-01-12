import { Router } from './core/Router';
import { controllers } from './controllers.js';

window.onload = () => {
    console.log("App is running");
    init();
};

const init = () => {
    const router = new Router();

    const homeController = new controllers.HomeController();
    router.addRoute('home', homeController.test);

    const postsController = new controllers.PostsController();
    router.addRoute('posts', postsController.showAll);
    router.addRoute('posts/:id', postsController.showOne);

    const errorController = new controllers.ErrorController();
    router.addRoute('*', errorController.test);

    router.checkRoute();
};