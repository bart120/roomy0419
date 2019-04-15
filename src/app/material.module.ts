import { NgModule } from '@angular/core';
import {
    MatToolbarModule, MatIconModule, MatButtonModule,
    MatCardModule,
    MatGridListModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule
    ]
})
export class MaterialModule { }
