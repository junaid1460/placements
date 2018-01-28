import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { WindowService } from '../services/window.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth: AuthService,
    public ws: WindowService) {
}

}
