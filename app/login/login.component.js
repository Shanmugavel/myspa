System.register(["angular2/core", './login', '../logger/logger.service', './login.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, login_1, logger_service_1, login_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(loginModel, loginSvc, _logger) {
                    this.loginModel = loginModel;
                    this.loginSvc = loginSvc;
                    this._logger = _logger;
                    this._logger.log('LoginComponent created');
                    this._logger.log('loginModel is ' + loginModel);
                    this.loginForm = loginModel;
                }
                LoginComponent.prototype.onSubmit = function () {
                    var _this = this;
                    alert("Form Submitted!");
                    this.loginSvc.login(this.loginForm).then(function (lModel) { _this.loginForm = lModel; _this._logger.log(_this.toString()); }).catch(function (errMsg) { return _this._logger.log(errMsg); });
                };
                LoginComponent.prototype.toString = function () {
                    return JSON.stringify(this.loginModel);
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: "my-login",
                        templateUrl: "./app/login/login.html",
                        providers: [login_service_1.LoginService, login_1.Login]
                    }), 
                    __metadata('design:paramtypes', [login_1.Login, login_service_1.LoginService, logger_service_1.Logger])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map