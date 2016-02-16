import {Component} from "angular2/core"
import {Router} from "angular2/router"
import {Login} from './login';
import {Logger} from '../logger/logger.service'
import {LoginService} from './login.service'
import {verified} from '../common/auth.filter'

@Component( {
    selector : "my-login",
    templateUrl : "./app/login/login.html",
    providers : [LoginService, Login]
} )
export class LoginComponent {
    
    public loginForm:Login;
    
    constructor(private _router: Router, private loginModel:Login, private loginSvc : LoginService, private _logger:Logger) {
        this._logger.log('LoginComponent created');
        this._logger.log('loginModel is '+loginModel);
        this.loginForm = loginModel;
    }
    
    onSubmit() : void {
        this.loginSvc.login(this.loginForm)
        .then( lModel => {
            this.loginForm = lModel;  
            verified();
            this._router.navigate(['Home']);
        })
        .catch( errMsg => this._logger.log(errMsg));
    }
    
}