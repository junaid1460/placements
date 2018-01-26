import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { env } from '../app.env';
import { Router} from '@angular/router';
import { DBService } from './db.service';

@Injectable()
export class AuthService  {
    loggedIn: Boolean = false;
    constructor(public auth: AngularFireAuth, private router: Router,
        private db: DBService) {
        this.auth.authState.subscribe(e => {
            if (e) {
                this.loggedIn = true;
                const url = this.router.url;
                if (url === '' || url === '/login') {
                    this.router.navigate(['/news']);
                }
                this.db.subscribe();
            } else {
                this.loggedIn = false;
                this.router.navigate(['/login']);
                this.db.unsubscribe();
            }
        });
    }

}

