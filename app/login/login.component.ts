import  {Component} from "angular2/core"
import {Login} from './login';
import {Logger} from '../logger/logger.service'
import {LoginService} from './login.service'

@Component( {
    selector : "my-login",
    templateUrl : "./app/login/login.html",
    providers : [LoginService]
} )
export class LoginComponent {
    
    public loginForm:Login;
    
    constructor(private _logger:Logger, private loginSvc : LoginService) {
        this._logger.log('LoginComponent created');
        this.loginForm = new Login();
    }
    
    onSubmit() : void {
        alert("Form Submitted!");
        this.loginForm = this.loginSvc.login(this.loginForm);
    }
}