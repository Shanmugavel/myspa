import {Component, Injectable} from 'angular2/core'
import {CanActivate} from "angular2/router"
import {Logger} from "../logger/logger.service"
import {checkAuth} from "../common/auth.filter"

@Component( {
    selector : "my-user",
    templateUrl : "./app/user/user.html"
} )
@CanActivate(() => checkAuth())
@Injectable()
export class UserComponent {
    constructor(private _logger:Logger) {
       this._logger.log("UserComponent Created"); 
    }
}