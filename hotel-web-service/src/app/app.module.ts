import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
// import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';

import { middleware } from './store/index';
import { environment } from './../environments/environment';
import { rootReducer, IAppState, INITIAL_STATE } from './store/store';
import { ACTIONS } from './actions';
import { SERVICES } from './services';
import { EPICS } from './epics';
import { EpicsService } from './epics/epics';
import { routing } from './routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { UsersTableComponent } from './components/userstable/userstable.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      UsersTableComponent,
      LoginComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      NgReduxModule,
      routing
      // NgReduxRouterModule
    ],
    providers: [
      ACTIONS,
      SERVICES,
      EPICS
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
      private ngRedux: NgRedux<IAppState>,
      // private ngReduxRouter: NgReduxRouter,
      private devTools: DevToolsExtension,
      private epics: EpicsService
    ) {

      middleware.push(epics.createEpics());

      this.ngRedux.configureStore(
          rootReducer,
          INITIAL_STATE,
          middleware,
          environment.envName === 'dev' && devTools.isEnabled() ? [devTools.enhancer()] : []
      );

      // ngReduxRouter.initialize();
  }
}
