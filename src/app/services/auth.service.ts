import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { env } from '../app.env';
import { Router} from '@angular/router';
import { DBService } from './db.service';

@Injectable()
export class AuthService  {
    public users: Users = {
            admin: 1,
            guest: 2,
            student: 3
    };

    usertype: number = this.users.admin;
    constructor(public auth: AngularFireAuth, private router: Router,
        private db: DBService) {
        this.auth.authState.subscribe(e => {
            if (e) {
                this.db.isAdmin().subscribe(user => {
                    if (user.admin && user.admin === true) {
                        this.usertype = this.users.admin;
                        this.router.navigate(['/admin']);
                        return;
                    }
                    this.usertype = this.users.student;
                    const url = this.router.url;
                    if (url === '' || url === '/login') {
                        this.router.navigate(['/news']);
                    }
                    this.db.subscribe();
                });
            } else {
                this.usertype = this.users.guest;
                this.router.navigate(['/login']);
                this.db.unsubscribe();
            }
        });
    }

}

interface Users {
    admin: number;
    guest: number;
    student: number;
}
