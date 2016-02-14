import {Component} from 'angular2/core';
import {LoginComponent} from "./login/login.component"
import {HomeComponent} from "./home/home.component"

@Component({
    selector: 'my-spa',
    templateUrl : "./app/app.html",
    directives : [LoginComponent, HomeComponent]
    
})

export class AppComponent { }
