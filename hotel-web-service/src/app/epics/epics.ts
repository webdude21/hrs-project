import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { Injectable } from '@angular/core';

import { UsersTableEpicsService } from './users-table-epics.service';


@Injectable()
export class EpicsService {

    combinedEpics = combineEpics(
        // this.usersTableEpicsService.loadUsersTableData
    );

    constructor(private usersTableEpicsService: UsersTableEpicsService) { }

    createEpics() {
        return createEpicMiddleware(this.combinedEpics);
    }
}
