import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { MatSnackBar } from '@angular/material';
import { UserLog } from '../models/user-log.model';



@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

    user: UserLog = null;
    constructor(
        private auth: AuthenticationService,
        private snackBar: MatSnackBar) {
        this.auth.user.subscribe(
            u => this.user = u
        );
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        if (this.user != null) {
            return true;
        } else {
            this.snackBar.open('Accès interdit', 'OK', { duration: 5000 });
            return false;
        }

    }
}
