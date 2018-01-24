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
        this.auth.authState.subscribe(e => {
            if (e) {
                this.router.navigate(['/student']);
            } else {
                this.router.navigate(['/login']);
            }
        });
    }
}
