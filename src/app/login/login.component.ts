import { Component} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { WindowService } from '../services/window.service';
@Component({
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css']
})
export class LoginComponent {
    containerClass: string;
    constructor(private auth: AngularFireAuth, private ws: WindowService) {
    }

}
