import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  rooms: Array<Room> = null;
  cols: Array<string> = ['name', 'price'];

  constructor(private roomServ: RoomService) { }

  ngOnInit() {
    this.roomServ.getRooms().subscribe(
      data => this.rooms = data,
      err => alert(err.message)
    );
  }

}
