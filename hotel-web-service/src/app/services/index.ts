import { Http, XHRBackend, RequestOptions } from '@angular/http';

import { DataService } from './data.service';
import { UsersTableResolverService } from './userstable-resolver.service';
import { AuthenticationService } from './authentication.service';
import { AlertService } from './alert.service';
// import { InterceptedHttp } from './http.interceptor';
import { httpFactory } from './http.factory';
import { AuthGuard } from './auth-guard.service';

export const SERVICES = [
    DataService,
    UsersTableResolverService,
    AlertService,
    AuthGuard,
    AuthenticationService
    // InterceptedHttp,
    // {
    //     provide: Http,
    //     useFactory: httpFactory,
    //     deps: [XHRBackend, RequestOptions]
    // }
];
