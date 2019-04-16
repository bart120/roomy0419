import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatToolbarModule, MatIconModule, MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatTableModule
} from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatMenuModule,
        MatInputModule,
        MatTableModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatMenuModule,
        MatInputModule,
        MatTableModule
    ]
})
export class MaterialModule { }
