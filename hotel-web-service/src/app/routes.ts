import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsersTableComponent } from './components/userstable/userstable.component';
import { AboutComponent } from './components/about/about.component';
import { UsersTableResolverService } from './services/userstable-resolver.service';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'userstable',
        component: UsersTableComponent,
        resolve: {
            UsersTable: UsersTableResolverService // property corresponds to Redux store (top-lvl?) tree property
        }
    },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);
