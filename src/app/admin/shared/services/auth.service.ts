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

    get token(): string {
        return ''
    }

    login(user: User): Observable<any> {
        return this.http.post(login_url, user)
            .pipe(
                tap(this.setToken)
            )
    }

    logout() {
    }

    isAuthenticated(): boolean {
        return Boolean(this.token)
    }

    // private setToken(response: FbAuthResponse) {
    private setToken(response: any) {
        console.log('setToken response', response)
    }

}