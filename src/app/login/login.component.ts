import { Component, ViewEncapsulation} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { WindowService } from '../services/window.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
@Component({
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css'],
    encapsulation : ViewEncapsulation.Emulated
})
export class LoginComponent {
    standalone: any = {standalone : true};
    containerClass: string;
    constructor(private auth: AngularFireAuth,
        public ws: WindowService,
        private snck: MatSnackBar,
        private router: Router
    ) {
        this.username = '';
        this.password = '';
    }
    username: string ;
    password: string ;
    signIn() {
        if ((this.username === '') || (this.password === '')) {
            this.snck.open('Please enter username and password!', null, {duration : 3000 });
            return;
        }
        this.snck.open('Signing in!',
                null, {duration : 1000}
                );
        this.auth.auth.signInWithEmailAndPassword(this.username, this.password)
            .then(action => {
                this.router.navigate(['/']);
            }, err => {
                this.snck.open('Not able to sign in!. Check email and password',
                null, {duration : 1000}
                );
            });
    }

}
