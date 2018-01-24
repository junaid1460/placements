import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import {Subject} from 'rxjs/Subject';
const mwidth = 700;
@Injectable()
export class WindowService  {
    containerClasses =  ['mobile', 'desktop'];
    private _mobile: boolean;
    layout: string;
    constructor() {
        Observable.fromEvent(window, 'resize').subscribe( e => {
            this.onResize();
        });
        this.onResize();
    }
    onResize() {
        let check = false;
        if (window.innerWidth > mwidth) {
                check = true;
            }
        if (this._mobile !== check) {
            this._mobile = check;
            this.layout = this.containerClasses[+this._mobile];
        }
    }
}


interface Layouts {
    true: string;
    false: string;
}

