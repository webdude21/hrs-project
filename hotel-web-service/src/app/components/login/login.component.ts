import { Component } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.less']
})
export class LoginComponent {

    username = '';
    password = '';

    constructor( private _authService: AuthenticationService ) {}

    loginButtonClickHandler() {

        this._authService.login(this.username, this.password)
            .subscribe(
                res => console.log('res>>>', res),
                err => console.log('err>>>', err)
            );
    }

}
