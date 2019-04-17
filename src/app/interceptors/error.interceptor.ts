import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private router: Router,
        private auth: AuthenticationService,
        private snack: MatSnackBar) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(err => {
                console.warn(err);
                if (err.status == '401') {
                    console.warn('401');
                    this.auth.updateUser(null);
                    this.router.navigate(['authentication/login']);
                    this.snack.open('Vous devez vous connecter', 'OK', { duration: 3000 });
                    // location.reload(true);
                }

                const error = err.error.message || err.statusText;
                return throwError(error);
            })
        );
    }

}
