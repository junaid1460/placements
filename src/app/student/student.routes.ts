import { RouterModule, Routes} from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { NewsComponent } from './news/news.component';
import { StudentComponent } from './student.component';

const routes: Routes  = [
    {
        path: '',
        component: StudentComponent
    },
    {
        path : 'news',
        component: NewsComponent
    },
    {
        path: 'companies',
        component: CompanyComponent
    }
];

export const studentRoutes = RouterModule.forChild(routes);
