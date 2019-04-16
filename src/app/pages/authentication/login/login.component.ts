import { Component, OnInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  @ViewChild('email')
  email: MatInput;

  constructor() { }

  ngOnInit() {
  }

  onLogin(password: string, event: MouseEvent): void {

    console.log(event);
  }

}
