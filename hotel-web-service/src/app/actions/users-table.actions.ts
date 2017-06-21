import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';

import { IAppState } from './../store/store';


@Injectable()
export class UsersTableActions {
    static LOAD_USERSTABLE_DATA = 'userstable/LOAD_USERSTABLE_DATA';
    static USERSTABLE_DATA_LOADED = 'userstable/USERSTABLE_DATA_LOADED';

    constructor(private ngRedux: NgRedux<IAppState>) {}

    loadUsertableData(uid: string = '') {
        this.ngRedux.dispatch({
            type: UsersTableActions.LOAD_USERSTABLE_DATA,
            uid
        });
    }

    usersTableDataLoaded(data: any) {        // todo: Interface?
        this.ngRedux.dispatch({
            type: UsersTableActions.USERSTABLE_DATA_LOADED,
            data
        });
    }
}
