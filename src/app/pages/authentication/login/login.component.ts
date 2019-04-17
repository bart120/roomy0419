import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatInput } from '@angular/material';
import { UserLog } from 'src/app/models/user-log.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  @ViewChild('email')
  email: ElementRef;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  onLogin(password: string, event: MouseEvent): void {

    // console.log(this.email.nativeElement.value);
    // appel serveur OK
    const user: UserLog = new UserLog();
    user.login = this.email.nativeElement.value;
    user.token = 'GFGSDFGSGDSFGSHSGDGS5346HFDGSRT';
    // console.log(user);
    this.auth.updateUser(user);
  }

}
