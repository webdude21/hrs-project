import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { APICONFIG } from '../constants/api-config';


@Injectable()
export class AuthenticationService {

    public token: string;

    constructor(private _http: Http) {
        // set token if saved in local storage
        let currentUser = JSON.parse(localStorage.getItem('access_token'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean>{
        // let body = JSON.parse(`{"username": "${username}", "password": "${password}"}`);
        // let body = `{"username": "${username}", "password": "${password}"}`;
        let body = JSON.stringify({username, password});

        return this._http.post(APICONFIG.authUrl, body)
            .map((response: Response) => {
              console.log(response.headers.get("Authorization"));

                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;

                console.log('>>> AUTHENTICATION SERVICE.ts: ', response);
                if (token) {
                    // set token property
                    this.token = token;

                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('access_token', JSON.stringify({ username: username, token: token }));

                    // successful login
                    return true;
                } else {
                    // failed login
                    return false;
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('access_token');
    }
}
