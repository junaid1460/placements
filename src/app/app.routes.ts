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
    },
    {
        path : 'student',
        component: AuthComponent,
        children : [
            {
                path: '',
                redirectTo: 'news',
                pathMatch: 'full'
            },
            {
                path : 'news',
                component: NewsComponent
            }, {
                path: 'companies',
                component: CompanyComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'help',
                component: HelpComponent
            }
        ]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

export const appRoutes = RouterModule.forRoot(routes);
