import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: []
})
export class DetailComponent implements OnInit {

  room: Room = null;
  constructor(
    private serv: RoomService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    this.serv.getRoom(id).subscribe(
      data => this.room = data,
      err => {
        this.router.navigate(['notfound']);
        // alert(err.message);
      }
    );
  }

}
