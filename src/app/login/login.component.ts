import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css']
})
export class LoginComponent {
    constructor(private auth: AngularFireAuth) {
    }
}
