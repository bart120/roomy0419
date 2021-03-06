import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TopFiveComponent } from './top-five/top-five.component';
import { MaterialModule } from 'src/app/material.module';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { DetailComponent } from './detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, TopFiveComponent, CreateComponent, DetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PipeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TopFiveComponent
  ]
})
export class RoomModule { }
