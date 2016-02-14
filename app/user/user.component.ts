import {Component, Injectable} from 'angular2/core'
import {Logger} from '../logger/logger.service'

@Component( {
    selector : "my-user",
    templateUrl : "./app/user/user.html"
} )
@Injectable()
export class UserComponent {
    constructor(private _logger:Logger) {
       this._logger.log("UserComponent Created"); 
    }
}