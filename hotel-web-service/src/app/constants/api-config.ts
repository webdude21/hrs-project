import { InjectionToken } from '@angular/core';


export let API_CONFIG = new InjectionToken('sts.config');

export const APICONFIG = {
    apiUrl:         'http://localhost:8080',
    authUrl:        'http://localhost:8080/login',
    login:          '/login',
    logout:         '/logout',
    callbackHash:   '#access_token={0}',
    appRoot:        'http://localhost:4200'
};
