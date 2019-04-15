import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TopFiveComponent } from './top-five/top-five.component';

@NgModule({
  declarations: [ListComponent, TopFiveComponent],
  imports: [
    CommonModule
  ]
})
export class RoomModule { }
