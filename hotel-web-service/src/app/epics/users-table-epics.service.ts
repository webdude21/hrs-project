import { Injectable } from '@angular/core';
// import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import * as _ from 'lodash';

import { IAppState } from './../store/store';
import { UsersTableActions } from '../actions/users-table.actions';
import { DataService } from '../services/data.service';


@Injectable()
export class UsersTableEpicsService {

    constructor(
        // private ngRedux: NgRedux<IAppState>,
        private dataService: DataService,
        private usersTableActions: UsersTableActions
    ) { }


    // this epic is activated by OnInit on UsersTable, however it was deprecated by Resolver implemenathin, hence commented
    /*
    loadUsersTableData = (action$) => {
        return action$
            .ofType(UsersTableActions.LOAD_USERSTABLE_DATA)
            .mergeMap( ({uid}) => {         // <<< what's created in userTableActions.loadUsertableData comes here
                return this.dataService.getAllUsers()
                        .do( data => {
                            console.log('users-table-epics.service.ts.loadUsersTableData: >>>>> ', data);
                            this.usersTableActions.usersTableDataLoaded(data);
                            return data; // todo: TEST WHATIF THIS IS COMMENTED?
                        })
                        .catch(error => Observable.of({type: 'ERROR'}));
            });
    }
    */
}
