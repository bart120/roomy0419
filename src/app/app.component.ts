import { Component, OnInit } from '@angular/core';
import { UserLog } from './models/user-log.model';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Roomy';
  user: UserLog = null;

  constructor(
    private auth: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.auth.user.subscribe(
      (u: UserLog) => this.user = u
    );
  }

  logout(): void {
    this.auth.updateUser(null);
    this.router.navigate(['home']);
  }
}
