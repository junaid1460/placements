import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { env } from '../app.env';
import { Router, NavigationStart } from '@angular/router';
import { DBService } from './db.service';
import { Console } from '@angular/core/src/console';

@Injectable()
export class AuthService  {
    public users: Users = {
            admin: 1,
            guest: 2,
            student: 3
    };
    validRoutes: Set<String> = new Set([
        '/student/news', '/admin', '/student/companies', '/profile', '/settings', '/student/about', '/student/help'
    ]);
    childUrls: Set<String> = new Set([
        '/student/news', '/student/companies', '/student/about', '/student/help'
    ]);
    usertype: number = null;
    childRoute: String;
    constructor(public auth: AngularFireAuth, public router: Router,
        private db: DBService) {
        this.router.events.subscribe( route => {
            if ( route instanceof NavigationStart) {
                if (this.childUrls.has(route.url)) {
                    this.childRoute = route.url;
                }
            }
        });

        this.auth.authState.subscribe(e => {
            if (e) {
                this.db.isAdmin().subscribe(user => {
                    if (user && user.admin && user.admin === true) {
                        this.usertype = this.users.admin;
                        this.router.navigate(['/admin']);
                        return;
                    }
                    this.usertype = this.users.student;
                    const url = this.router.url;
                    if ( !this.validRoutes.has(url)) {
                        this.router.navigate(['/student/news']);
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
