import { Component, OnInit } from '@angular/core';
import { WindowService } from '../services/window.service';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(public ws: WindowService,
    public db: DBService) { }


}
