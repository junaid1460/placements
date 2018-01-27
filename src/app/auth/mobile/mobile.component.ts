import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { WindowService } from '../../services/window.service';
import { env } from '../../app.env';
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
    constructor(public auth: AuthService,
                public ws: WindowService) {
    }
    signOut() {
        this.auth.auth.auth.signOut();
    }

}
