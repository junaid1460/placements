import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CompanyComponent } from './student/company/company.component';
import { NewsComponent } from './student/news/news.component';
import { AdminComponent } from './admin/main/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { SidebarComponent } from './auth/sidebar/sidebar.component';
import { AuthGuard } from './services/auth.guard';
import { AuthComponent } from './auth/auth.component';
const routes: Routes  = [
    {
        path : 'login',
        component : LoginComponent,
        data: {state: 'left'}
    },
    {
        path : 'student',
        component: AuthComponent,
        data: {state: 'right'},
        children : [
            {
                path: '',
                redirectTo: 'news',
                pathMatch: 'full',
                data: {state: 'right'},
            },
            {
                path : 'news',
                component: NewsComponent,
                data: {state: 'right'},
            }, {
                path: 'companies',
                component: CompanyComponent,
                data: {state: 'right'},
            },
            {
                path: 'about',
                component: AboutComponent,
                data: {state: 'right'},
            },
            {
                path: 'help',
                component: HelpComponent,
                data: {state: 'right'},
            }
        ]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: {state: 'left'}
    },
    {
        path: 'settings',
        component: SettingsComponent,
        data: {state: 'left'}
    },
    {
        path: '**',
        redirectTo: ''
    }
];

export const appRoutes = RouterModule.forRoot(routes);
