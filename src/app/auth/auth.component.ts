import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { WindowService } from '../services/window.service';

@Component({
    selector: 'app-auth',
    templateUrl : './auth.component.html',
    styleUrls: ['auth.component.css'],
    encapsulation : ViewEncapsulation.None
})
export class AuthComponent {
    constructor(public auth: AuthService,
                public ws: WindowService) {
    }
    signOut() {
        this.auth.auth.auth.signOut();
    }
}
