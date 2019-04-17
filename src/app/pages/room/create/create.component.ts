import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room.model';
import { FormControl, Validators } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: []
})
export class CreateComponent implements OnInit {

  room: Room = new Room();
  priceValidator: FormControl =
    new FormControl('', [Validators.required, Validators.min(0), Validators.pattern(/^[0-9]*$/)]);

  pictures: Array<any> = [
    { id: 'Pegase.jpg', image: 'Image Pegase' },
    { id: 'Calliope.jpg', image: 'Image Calliope' },
    { id: 'Thalie.jpg', image: 'Image Thalie' }
  ];

  constructor(
    private serv: RoomService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
  }

  submit(form): void {
    console.warn(form);
    console.log(this.room);
    this.serv.addRoom(this.room).subscribe(
      data => {
        this.snackBar.open(`Enregistrement de la salle ${data.id}`, 'OK', { duration: 3000 });
        this.router.navigate(['rooms/details', data.id]);
      },
      err => this.snackBar.open(`Erreur lors de l'enregistrement`, 'OK', { duration: 3000 })
    );
  }

}
