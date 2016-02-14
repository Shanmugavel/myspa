System.register(['angular2/core', "angular2/router", "../logger/logger.service", "../common/auth.filter"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, logger_service_1, auth_filter_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (auth_filter_1_1) {
                auth_filter_1 = auth_filter_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent(_logger) {
                    this._logger = _logger;
                    this._logger.log("UserComponent Created");
                }
                UserComponent = __decorate([
                    core_1.Component({
                        selector: "my-user",
                        templateUrl: "./app/user/user.html"
                    }),
                    router_1.CanActivate(function () { return auth_filter_1.checkAuth(); }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_1.Logger])
                ], UserComponent);
                return UserComponent;
            })();
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map