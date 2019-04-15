import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TopFiveComponent } from './top-five/top-five.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [ListComponent, TopFiveComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TopFiveComponent
  ]
})
export class RoomModule { }
