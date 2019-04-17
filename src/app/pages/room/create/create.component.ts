import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: []
})
export class CreateComponent implements OnInit {

  room: Room = new Room();
  priceValidator: FormControl =
    new FormControl('', [Validators.required, Validators.min(0), Validators.pattern(/^[0-9]*$/)]);

  constructor() { }

  ngOnInit() {
  }

  submit(form): void {
    console.warn(form);
    console.log(this.room);
  }

}
