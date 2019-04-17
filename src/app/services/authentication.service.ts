import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { UserLog } from '../models/user-log.model';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private subject: BehaviorSubject<UserLog> = new BehaviorSubject<UserLog>(null);

    constructor() {
        this.updateUser(JSON.parse(sessionStorage.getItem('USER')));
    }

    get user(): Observable<UserLog> {
        return this.subject.asObservable();
    }

    updateUser(user: UserLog): void {
        if (user == null) {
            sessionStorage.removeItem('USER');
            this.subject.next(null);
        } else {
            sessionStorage.setItem('USER', JSON.stringify(user));
            this.subject.next(user);
        }
    }
}
