import { Injectable } from '@angular/core';
import { AuthService as as} from './auth.service';
import { CanActivate } from '@angular/router';
import { env } from '../app.env';
@Injectable()
export class AuthGuard implements  CanActivate {
    constructor(private auth: as) {

    }
    canActivate() {
        if (this.auth.usertype === this.auth.users.admin) {
            return true;
        }
        return false;
    }
}
