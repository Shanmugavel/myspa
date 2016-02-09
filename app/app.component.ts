import {Component} from 'angular2/core';
import {LoginComponent} from "./my-login/my-login.component"
@Component({
    selector: 'my-spa',
    templateUrl : "./app/app.html",
    directives : [LoginComponent]
    
})

export class AppComponent { }
