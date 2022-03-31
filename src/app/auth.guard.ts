import { Injectable } from "@angular/core";
import { 
    ActivatedRouteSnapshot, 
    CanActivate, 
    CanActivateChild, 
    Router, 
    RouterStateSnapshot, 
    UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router 
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.isAuthenticated().then(isAuth => {
            if(isAuth) {
                return true
            } else {
                this.router.navigate(['/'], {
                    queryParams: {
                        auth: false
                    }
                })
            }
            return false
        })
    }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(childRoute, state)
    }

}
