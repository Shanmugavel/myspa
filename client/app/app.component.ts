import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {LoginComponent} from './login/login.component'
import {HomeComponent} from './home/home.component'
import {UserComponent} from './user/user.component'
import {isAuthenticatedUser} from './common/auth.filter'

@Component({
    selector: 'my-spa',
    templateUrl : "./app/app.html",
    directives : [LoginComponent, HomeComponent, UserComponent, ROUTER_DIRECTIVES]
    
})
@RouteConfig([
    { path : '/login', name : 'Login', component : LoginComponent, useAsDefault : true},
    { path : '/home', name : 'Home', component : HomeComponent},
    { path : '/user', name : 'User', component : UserComponent}
    ])
export class AppComponent { 
     auth = isAuthenticatedUser;
    
    /*isAuthenticatedUser() : boolean {
        var isAuthenticatedUser = false;
        if("true" === sessionStorage.getItem("isAuthenticated")) {
            isAuthenticatedUser = true;
        }
        return isAuthenticatedUser;
    }*/
}
