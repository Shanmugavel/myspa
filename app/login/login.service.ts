import {Injectable} from 'angular2/core'
import {Login} from './login'
import {Logger} from '../logger/logger.service'

@Injectable()
export class LoginService {
    
    constructor(private _logger:Logger) {
        this._logger.log('Login Service Created!');
    }
    
    login( loginModel : Login) : Login {
        this._logger.log('UserName::'+loginModel.username);
        this._logger.log('Password::'+loginModel.password);
        loginModel.token = Math.random().toString();
        this._logger.log('Token::'+loginModel.token)
        return  loginModel;
    }
}