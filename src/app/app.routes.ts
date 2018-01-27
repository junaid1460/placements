import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CompanyComponent } from './student/company/company.component';
import { NewsComponent } from './student/news/news.component';
import { AdminComponent } from './admin/main/admin.component';

import { AuthGuard } from './services/auth.guard';
const routes: Routes  = [
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'news',
        component: NewsComponent
    },
    {
        path: 'companies',
        component: CompanyComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

export const appRoutes = RouterModule.forRoot(routes);
