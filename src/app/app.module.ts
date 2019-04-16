import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RoomModule } from './pages/room/room.module';
import { routes } from './app.routes';
import { HomeModule } from './pages/home/home.module';
import { RoomService } from './services/room.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HomeModule,
    RoomModule
  ],
  providers: [/*{ provide: RoomService, useClass: RoomService }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
