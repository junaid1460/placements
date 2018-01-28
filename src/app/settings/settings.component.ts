import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent  {

  constructor(private loc: Location) { }
  goback = () => {this.loc.back(); };

}
