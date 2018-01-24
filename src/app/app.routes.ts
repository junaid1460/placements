import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login.component';
import { AppComponent } from './app.component';
const routes: Routes  = [
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'student',
        component : AppComponent
    }
];

export const appRoutes = RouterModule.forRoot(routes);
