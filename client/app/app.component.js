System.register(['angular2/core', 'angular2/router', './login/login.component', './home/home.component', './user/user.component', './common/auth.filter'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, login_component_1, home_component_1, user_component_1, auth_filter_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (auth_filter_1_1) {
                auth_filter_1 = auth_filter_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.auth = auth_filter_1.isAuthenticatedUser;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-spa',
                        templateUrl: "./app/app.html",
                        directives: [login_component_1.LoginComponent, home_component_1.HomeComponent, user_component_1.UserComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent, useAsDefault: true },
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent },
                        { path: '/user', name: 'User', component: user_component_1.UserComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map