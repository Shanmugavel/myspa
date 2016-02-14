import  {Component} from "angular2/core"
import {Login} from './login';
import {Logger} from '../logger/logger.service'
import {LoginService} from './login.service'

@Component( {
    selector : "my-login",
    templateUrl : "./app/login/login.html",
    providers : [LoginService, Login]
} )
export class LoginComponent {
    
    public loginForm:Login;
    
    constructor(private loginModel:Login, private loginSvc : LoginService, private _logger:Logger) {
        this._logger.log('LoginComponent created');
        this._logger.log('loginModel is '+loginModel);
        this.loginForm = loginModel;
    }
    
    onSubmit() : void {
        alert("Form Submitted!");
        this.loginSvc.login(this.loginForm).then( lModel => {this.loginForm = lModel;  this._logger.log(this.toString())}).catch( errMsg => this._logger.log(errMsg));
    }
    
        
    toString() : string {
        return JSON.stringify(this.loginModel);
    }
}