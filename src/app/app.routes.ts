import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
const routes: Routes  = [
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'student',
        component : StudentComponent
    }
];

export const appRoutes = RouterModule.forRoot(routes);
