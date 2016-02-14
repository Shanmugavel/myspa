import  {Component} from "angular2/core"
import {Logger} from "../logger/logger.service"

@Component( {
    selector : "my-home",
    templateUrl : "./app/home/home.html"
} )
export class HomeComponent {
    constructor(private _logger:Logger) {
        this._logger.log('HomeComponent created');
    }
}