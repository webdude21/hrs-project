import { Action } from 'redux';
import { UsersTableActions } from '../actions/users-table.actions';
import { IUserData } from '../models/IUserData';

export const INITIAL_STATE: IUserData[] = [];         // !!!!!!!!!!!!!!

function storeUsersTableData_0(state, action) {
    return Object.assign({}, state, action.uid);        // .uid because action loadbyUid should be reusable
}

function storeUsersTableData(state, action) {
    // return Object.assign( {}, state, {UsersTable: action.data} );    // !!!!!!!!!!!!!(compare with next row)
    return Object.assign( {}, state, action.data );
// }
}

export function UsersTableReducer(
    state: IUserData = INITIAL_STATE,
    action: Action
    ) {
    switch (action.type) {

        case UsersTableActions.LOAD_USERSTABLE_DATA:
            return storeUsersTableData_0(state, action);      // todo: maybe not needed

        case UsersTableActions.USERSTABLE_DATA_LOADED:
            return storeUsersTableData(state, action);

        default:
            return state;
    }
}
