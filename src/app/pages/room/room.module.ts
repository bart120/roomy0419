import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TopFiveComponent } from './top-five/top-five.component';
import { MaterialModule } from 'src/app/material.module';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [ListComponent, TopFiveComponent, CreateComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TopFiveComponent
  ]
})
export class RoomModule { }
