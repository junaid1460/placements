import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { WindowService } from '../services/window.service';
import { animation, getState } from '../app.animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [animation('anim')]
})
export class AppComponent {
  constructor(public auth: AuthService,
    public ws: WindowService) {
}
  getState = (o) => (getState(o));
}
