import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-top-five',
  templateUrl: './top-five.component.html',
  styles: []
})
export class TopFiveComponent implements OnInit {

  rooms: Array<any> = null;

  constructor() { }

  ngOnInit() {
    this.rooms = [
      { name: 'Calliope', image: 'Calliope.jpg' },
      { name: 'Thalie', image: 'Thalie.jpg' },
      { name: 'Calliope', image: 'Calliope.jpg' },
      { name: 'Thalie', image: 'Thalie.jpg' }
    ];
  }

}
