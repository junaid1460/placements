import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { WindowService } from '../../services/window.service';
@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.css']
})
export class DeskComponent {
  constructor(public auth: AuthService,
              public ws: WindowService) {
  }
  signOut() {
      this.auth.auth.auth.signOut();
  }
}
