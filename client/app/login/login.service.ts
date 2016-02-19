import {Injectable} from 'angular2/core'
import {Http, Headers} from 'angular2/http'
import {Login} from './login'
import {Logger} from '../logger/logger.service'

@Injectable()
export class LoginService {
    
    constructor(private _logger:Logger, private http: Http) {
        this._logger.log('Login Service Created!');
    }
    
    login( loginModel : Login) : Promise<any> {
         var headers = new Headers();
        headers.append('Content-Type', 'application/json');
  
        loginModel.token = Math.random().toString();
        if ("shan" === loginModel.username && "password" === loginModel.password) {
            loginModel.isAuthenticated = true;
            this._logger.log(loginModel.toString());
            //this.http.post('http://localhost:3000/slogin', JSON.stringify(loginModel), { headers :  headers})
            //.map(res => res).do(data =>console.log('data'+data) );
            return  Promise.resolve(loginModel);
        }
        this._logger.log(loginModel.toString());
        return  Promise.reject("Invalid Credentials!");
    }

}