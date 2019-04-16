import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-top-five',
  templateUrl: './top-five.component.html',
  styles: []
})
export class TopFiveComponent implements OnInit {

  // private serv: RoomService;
  rooms: Array<Room> = null;

  constructor(private serv: RoomService) {
    // this.serv = serv;
  }

  ngOnInit() {
    /*this.rooms = [
      { name: 'Calliope', image: 'Calliope.jpg' },
      { name: 'Thalie', image: 'Thalie.jpg' },
      { name: 'Calliope', image: 'Calliope.jpg' },
      { name: 'Thalie', image: 'Thalie.jpg' }
    ];*/
    this.serv.getTopFive().subscribe((data) => {
      this.rooms = data;
    });
  }

}
