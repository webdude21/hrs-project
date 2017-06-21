import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { DataService } from '../services/data.service';
import { UsersTableActions } from '../actions/users-table.actions';

@Injectable()
export class UsersTableResolverService implements Resolve<any> {

    constructor(
        private usersTableActions: UsersTableActions,
        private dataService: DataService
        ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dataService.getAllUsers()
            .do( data => {
                            console.log('users-table-epics.service.ts.loadUsersTableData: >>>>> ', data);
                            this.usersTableActions.usersTableDataLoaded(data);
                            return data; // todo: TEST WHATIF THIS IS COMMENTED?
            })
            .catch(error => Observable.of({type: 'ERROR'}));
    }

}
