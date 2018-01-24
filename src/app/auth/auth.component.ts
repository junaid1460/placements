import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { env } from '../app.env';
import { Router} from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl : './auth.component.html',
    styleUrls: ['auth.component.css']
})
export class AuthComponent {
    constructor(private auth: AngularFireAuth, private router: Router) {
        if (this.auth.auth.currentUser == null) {
            this.router.navigate(['/login']);
        }
        document.title = env.app.name;
    }
}
