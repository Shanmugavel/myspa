System.register(['angular2/core', 'angular2/http', '../logger/logger.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, logger_service_1;
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            LoginService = (function () {
                function LoginService(_logger, http) {
                    this._logger = _logger;
                    this.http = http;
                    this._logger.log('Login Service Created!');
                }
                LoginService.prototype.login = function (loginModel) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    loginModel.token = Math.random().toString();
                    if ("shan" === loginModel.username && "password" === loginModel.password) {
                        loginModel.isAuthenticated = true;
                        this._logger.log(loginModel.toString());
                        this.http.post('http://localhost:3000/slogin', JSON.stringify(loginModel), { headers: headers })
                            .map(function (res) { return res; }).do(function (data) { return console.log('data' + data); });
                        return Promise.resolve(loginModel);
                    }
                    this._logger.log(loginModel.toString());
                    return Promise.reject("Invalid Credentials!");
                };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_1.Logger, http_1.Http])
                ], LoginService);
                return LoginService;
            })();
            exports_1("LoginService", LoginService);
        }
    }
});
//# sourceMappingURL=login.service.js.map