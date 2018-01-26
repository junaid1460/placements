import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentModule } from './student/student.module';
const routes: Routes  = [
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'student',
        loadChildren: 'app/student/student.module#StudentModule'
    }
];

export const appRoutes = RouterModule.forRoot(routes);
