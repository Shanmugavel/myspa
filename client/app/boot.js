System.register(['angular2/platform/browser', 'angular2/router', 'angular2/http', './app.component', './logger/logger.service', './common/app.injector'], function(exports_1) {
    var browser_1, router_1, http_1, app_component_1, logger_service_1, app_injector_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (app_injector_1_1) {
                app_injector_1 = app_injector_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, logger_service_1.Logger]).then(function (appRef) {
                app_injector_1.appInjector(appRef.injector);
            });
        }
    }
});
//# sourceMappingURL=boot.js.map