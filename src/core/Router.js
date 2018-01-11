export class Router {

    constructor() {
        this.routes = [];

        window.addEventListener('hashchange', this.checkRoute.bind(this));
    }

    addRoute(hash, func) {
        this.routes[hash] = func;
    }

    checkRoute() {
        const errorRouteIdentifier = '*';
        const currentHash = location.hash.slice(1);
        const matchedRoute = this.routes[currentHash] ? this.routes[currentHash] : this.routes[errorRouteIdentifier];
        matchedRoute();
    }
    
}