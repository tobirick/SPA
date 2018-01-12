export class Router {

    constructor() {
        this.routes = [];

        window.addEventListener('hashchange', this.checkRoute.bind(this));
    }

    addRoute(url, func) {
        const completeUrl = url.split('/');
        const hash = completeUrl[0];

        this.routes[hash] = {func, params: {}};

        if(completeUrl.length > 1) {
            for(let i = 1; i < completeUrl.length; i++) {
                this.routes[hash].params[completeUrl[i].replace(':', '')] = null;
            }
        }
    }

    checkRoute() {
        const completeUrl = location.hash.slice(1).split('/');

        const errorRouteIdentifier = '*';
        const matchedRoute = this.routes[completeUrl[0]] ? this.routes[completeUrl[0]] : this.routes[errorRouteIdentifier];

        let counter = 1;
        for (let param in matchedRoute.params) {
            matchedRoute.params[param] = completeUrl[counter];
            counter++;
        }

        matchedRoute.func(matchedRoute.params);
    }
    
}