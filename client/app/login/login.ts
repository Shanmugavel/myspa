
import {Injectable} from 'angular2/core'
import {Logger} from '../logger/logger.service'

@Injectable()
export class Login {
    public username:string;
    public password:string;
    public token:string;
    public isAuthenticated:boolean;
    
    constructor(private _logger:Logger){
        this.isAuthenticated = false;
        this._logger.log('Login  model created');
    }

    toString() : string {
        return JSON.stringify(this);
    }
}