import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';

@Injectable({
    providedIn: 'root'
})
export class RoomService {
    getTopFive(): Array<Room> {
        return [
            { name: 'Calliope', image: 'Calliope.jpg' },
            { name: 'Thalie', image: 'Thalie.jpg' }
        ] as Array<Room>;
    }
}
