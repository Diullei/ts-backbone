/// <reference path="ts-definitions/DefinitelyTyped/backbone/backbone.d.ts" />
/// <reference path="ts-definitions/DefinitelyTyped/underscore/underscore.d.ts" />

class AppRouter extends Backbone.Router {
    routes = {
        "*actions": "defaultRoute"
    }

    constructor(){
    	super();
    	(<any>this)._bindRoutes();
    }

    defaultRoute() {
        document.write("Default Route Invoked");
    }
}

var app_router = new AppRouter();

Backbone.history.start();