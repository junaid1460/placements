import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { WindowService } from '../../services/window.service';
import { animation2 as animation, getState } from '../../app.animation';
@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.css'],
  animations: [animation('inneranim1')]
})
export class DeskComponent {
  constructor(public auth: AuthService,
              public ws: WindowService) {
  }
  signOut() {
      this.auth.auth.auth.signOut();
  }
  getState = (o) => (getState(o));
}
