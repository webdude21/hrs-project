import { environment } from './../../environments/environment';

const createLogger = require('redux-logger');

export let middleware = [];

if (environment.envName === 'dev') {
    middleware.push(
        createLogger({
            level: 'info',
            collapsed: true
        })
    );
}
