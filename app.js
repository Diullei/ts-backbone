var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AppRouter = (function (_super) {
    __extends(AppRouter, _super);
    function AppRouter() {
        _super.call(this);
        this.routes = {
            "*actions": "defaultRoute"
        };
        (this)._bindRoutes();
    }
    AppRouter.prototype.defaultRoute = function () {
        document.write("Default Route Invoked");
    };
    return AppRouter;
})(Backbone.Router);
var app_router = new AppRouter();
Backbone.history.start();
