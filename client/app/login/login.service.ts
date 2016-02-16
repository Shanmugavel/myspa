import {Injectable} from 'angular2/core'
import {Login} from './login'
import {Logger} from '../logger/logger.service'

@Injectable()
export class LoginService {
    
    constructor(private _logger:Logger) {
        this._logger.log('Login Service Created!');
    }
    
    login( loginModel : Login) : Promise<any> {
        loginModel.token = Math.random().toString();
        if ("shan" === loginModel.username && "password" === loginModel.password) {
            loginModel.isAuthenticated = true;
            this._logger.log(loginModel.toString())
            return  Promise.resolve(loginModel);
        }
        this._logger.log(loginModel.toString());
        return  Promise.reject("Invalid Credentials!");
    }

}