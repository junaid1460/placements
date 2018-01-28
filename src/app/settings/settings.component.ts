import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent  {

  constructor(private loc: Location, private auth: AuthService ) { }
  goback = () => {this.loc.back(); };
  signOut = () => {this.auth.auth.auth.signOut()}
}
