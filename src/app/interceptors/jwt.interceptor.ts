import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { UserLog } from '../models/user-log.model';

@Injectable({
    providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
    user: UserLog;

    constructor(private auth: AuthenticationService) {
        this.auth.user.subscribe(
            u => this.user = u
        );
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.user != null) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.user.token}`
                }
            });
        }
        return next.handle(req);
    }
}
