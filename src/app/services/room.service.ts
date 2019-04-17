import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, timer } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RoomService {

    constructor(private http: HttpClient) { }

    getTopFive(): Observable<Array<Room>> {
        return timer(0, 10000).pipe(
            mergeMap(() => this.http.get<Array<Room>>(environment.urlRooms)
                .pipe(map(data => data.sort((a, b) => a.name > b.name ? 1 : -1).slice(0, 5))))
        );
        // return this.http.get<Array<Room>>(environment.urlRooms);
        /*console.log('fin gettopfive');
        return null;*/
    }

    getRooms(): Observable<Array<Room>> {
        return this.http.get<Array<Room>>(environment.urlRooms);
    }

    getRoom(id: number): Observable<Room> {
        return this.http.get<Room>(`${environment.urlRooms}/${id}`);
    }

    addRoom(room: Room): Observable<Room> {
        return this.http.post<Room>(environment.urlRooms, room);
    }
}
