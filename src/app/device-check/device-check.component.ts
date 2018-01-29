import { Component } from '@angular/core';
import { WindowService } from '../services/window.service';
@Component({
  selector: 'app-device-check',
  templateUrl: './device-check.component.html',
  styleUrls: ['./device-check.component.css']
})
export class DeviceCheckComponent {

  constructor(public ws: WindowService) { }

}
