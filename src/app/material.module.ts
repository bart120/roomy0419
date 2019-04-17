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
    MatTableModule,
    MatSelectModule,
    MatSnackBar,
    MatSnackBarModule
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
        MatTableModule,
        MatSelectModule,
        MatSnackBarModule
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
        MatTableModule,
        MatSelectModule,
        MatSnackBarModule
    ]
})
export class MaterialModule { }
