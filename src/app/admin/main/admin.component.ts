import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    templateUrl : './admin.component.html',
    styleUrls : ['./admin.component.css']
})
export class AdminComponent {
    constructor(public auth: AuthService) {
    }
    signOut() {
        this.auth.auth.auth.signOut();
    }
}
