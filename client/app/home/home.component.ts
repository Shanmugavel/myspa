import {Component} from "angular2/core"
import {CanActivate} from "angular2/router"
import {Logger} from "../logger/logger.service"
import {checkAuth} from "../common/auth.filter"

@Component( {
    selector : "my-home",
    templateUrl : "./app/home/home.html"
} )
@CanActivate(() => checkAuth())
export class HomeComponent {
    constructor(private _logger:Logger) {
        this._logger.log('HomeComponent created');
    }
}