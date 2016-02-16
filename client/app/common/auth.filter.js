System.register(['angular2/router', './app.injector'], function(exports_1) {
    var router_1, app_injector_1;
    function checkAuth() {
        var isAuthenticatedUser = false;
        if ("true" === sessionStorage.getItem("isAuthenticated")) {
            isAuthenticatedUser = true;
        }
        else {
            var router = app_injector_1.appInjector().get(router_1.Router);
            router.navigate(['Login']);
        }
        return isAuthenticatedUser;
    }
    exports_1("checkAuth", checkAuth);
    function verified() {
        sessionStorage.setItem("isAuthenticated", "true");
    }
    exports_1("verified", verified);
    function isAuthenticatedUser() {
        var isAuthenticatedUser = false;
        if ("true" === sessionStorage.getItem("isAuthenticated")) {
            isAuthenticatedUser = true;
        }
        return isAuthenticatedUser;
    }
    exports_1("isAuthenticatedUser", isAuthenticatedUser);
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_injector_1_1) {
                app_injector_1 = app_injector_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=auth.filter.js.map