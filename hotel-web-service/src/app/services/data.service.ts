import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';       // todo: check why in AE no need of this import ?!? 

export const URL_BASE = 'http://localhost:8080/';
export const URL_USERS_ALL = 'pub/users/all';
export const URL_USER = 'users/';

@Injectable()
export class DataService {

    constructor(private _http: Http) { }

    getAllUsers(body = {}): Observable<any> {
        return this._http
            .post((URL_BASE + URL_USERS_ALL), body, this.jwtHeadersPrepare())
            .map(response => {
                console.log('DataServcie.getAllUsers(): >>>>>>>', response.json());
                return response.json();
            })
            .catch(this.handleError);
    }

    getUserById(uid: string): Observable<any> {
        const urlEndPoint = URL_BASE + URL_USER + `?uid=${uid}`;
        return this._http
            .get(urlEndPoint, this.jwtHeadersPrepare() )
            .map(response => {
                console.log('DataServcie.getUserById(uid:string)): >>>>>>>', response.json());
                return response.json();
            })
            .catch(this.handleError);
    }

    private jwtHeadersPrepare(): RequestOptions {

        let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
        let options = new RequestOptions({headers: headers});

        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('access_token'));
        if (currentUser && currentUser.token) {             // todo: check .token prop exists??! 
            headers.append('Authorization', 'Bearer ' + currentUser.token );
        }
        return new RequestOptions({ headers: headers });
    }

    private handleError(error: Response) {
        // const errMessage = error.json() ? error.json().message : error;
        const errMessage = error;

        console.log(`Http ERROR: ${errMessage}`);
        return Observable.throw(errMessage);
    }


}


/* Interceptor usage (like data service) !!! ENABLE FIRST !!! 


// imports here 
// .......

@Injectable()
export class DataService {

  constructor(public http: HttpInterceptor) {};

  getData() {
    return this
      .http.get(`data?limit=20&offset=40`)
      // will hit the api on http://api.localhost.com:4000/data?limit=20&offset=40
      .map(res => res.json().data)
  }

}


 */
