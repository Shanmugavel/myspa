
import {Injectable} from 'angular2/core'
import {Logger} from '../logger/logger.service'

@Injectable()
export class Login {
    public username:string;
    public password:string;
    public token:string;
    
    constructor(private _logger:Logger){
        this._logger.log('Login  model created');
    }

}