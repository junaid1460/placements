import { Component } from '@angular/core';
import { WindowService } from '../../services/window.service';
@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent {
    constructor(public ws: WindowService) {
    }

}
