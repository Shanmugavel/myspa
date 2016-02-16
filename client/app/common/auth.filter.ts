
import {Router} from 'angular2/router'
import {appInjector} from './app.injector'

export function checkAuth() : boolean {
    var isAuthenticatedUser = false;
    if("true" === sessionStorage.getItem("isAuthenticated")) {
        isAuthenticatedUser = true;
    } else {
        let router : Router = appInjector().get(Router);
        router.navigate(['Login']);
    }
    return isAuthenticatedUser;
}

export function verified() : void {
     sessionStorage.setItem("isAuthenticated", "true");
}

export function isAuthenticatedUser() : boolean {
    var isAuthenticatedUser = false;
    if("true" === sessionStorage.getItem("isAuthenticated")) {
        isAuthenticatedUser = true;
    }
    return isAuthenticatedUser;
}