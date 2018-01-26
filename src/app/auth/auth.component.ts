import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
    selector: 'app-root',
    templateUrl : './auth.component.html',
    styleUrls: ['auth.component.css']
})
export class AuthComponent {
    constructor(public auth: AuthService) {

    }
    signOut() {
        this.auth.auth.auth.signOut();
    }
}
