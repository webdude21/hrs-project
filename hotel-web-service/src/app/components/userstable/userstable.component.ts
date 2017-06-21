import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { NgRedux, select } from '@angular-redux/store';   // todo: NgRedux needed ?!
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { UsersTableActions } from '../../actions/users-table.actions';
import { IAppState } from '../../store/store';
import { IUserData } from './../../models/IUserData';


@Component({
    selector: 'app-userstable-component',
    templateUrl: './userstable.component.html',
    styleUrls: ['./userstable.component.less']
})
export class UsersTableComponent implements OnInit {
  usersTable: IUserData[] = [];
  colNames: string[] = [];

  @select(state => state.UsersTable) readonly UsersTable$: Observable<IUserData[]>;

 constructor(private usersTableActions: UsersTableActions) { }

 generateArray(obj: Object): string[] {
   return Object.keys(obj).map((key) => { return obj[key]; });
 }

 generateKeysArray(arr: Object): string[] {
    return Object.keys(arr);
  }

  ngOnInit() {
    // this.usersTableActions.loadUsertableData();  // replaced by resolver
    this.UsersTable$.subscribe( data => {
          if ( (data.constructor === Object) && !_.isEmpty( data ) ) {  // this check is not very necessary due to Resolver
              this.colNames = this.generateKeysArray(data[0]);
              this.usersTable = data;
              console.log(this.usersTable);
          }
   });
  }

}
