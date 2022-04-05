import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { User } from "src/app/shared/interfaces";
import { Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";

const login_url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`

@Injectable()
export class AuthServices {



    constructor(
        private http: HttpClient
    ) {}

    get token(): string | null {
        const expDate = new Date(localStorage.getItem('fb-token-exp')!)
        if (new Date() > expDate ) {
            this.logout()
            return null
        }
        return localStorage.getItem('fb-token')!
    }

    login(user: User): Observable<any> {
        user.returnSecureToken = true
        return this.http.post(login_url, user)
            .pipe(
                tap(this.setToken)
            )
    }

    logout() {
        this.setToken(null)
    }

    isAuthenticated(): boolean {
        return Boolean(this.token)
    }

    // private setToken(response: FbAuthResponse) {
    private setToken(response: any) {
        if (response) {
            const expDate = new Date(
                new Date().getTime() 
                + parseInt(response.expiresIn) * 1000
            )
            localStorage.setItem('fb-token', response.idToken)
            localStorage.setItem('fb-token-exp', expDate.toString())
        } else {
            localStorage.clear()
        }
    }
}
