import { Component, OnInit } from '@angular/core';
import { WindowService } from '../services/window.service';
import { DBService } from '../services/db.service';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {

  constructor(public ws: WindowService,
              public db: DBService) { }

}
