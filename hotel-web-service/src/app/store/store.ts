// import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { UsersTableReducer } from './users-table.reducer';
import { IUserData } from './../models/IUserData';

export interface IAppState {
    UsersTable?: IUserData[];
 }

export const INITIAL_STATE: IAppState = {
    UsersTable: []
 };

export const rootReducer = combineReducers({
    // reducers go here ...
    // router: routerReducer
    // !!!!! this means that the reducer (UsersTableReducer) populates IAppState of UsersTable
    UsersTable: UsersTableReducer
});
