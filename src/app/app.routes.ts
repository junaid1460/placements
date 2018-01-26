import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CompanyComponent } from './student/company/company.component';
import { NewsComponent } from './student/news/news.component';

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
        path: '**',
        redirectTo: 'news'
    }
];

export const appRoutes = RouterModule.forRoot(routes);
