import { Routes } from '@angular/router';
import { CreateComponent } from './pages/room/create/create.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ListComponent } from './pages/room/list/list.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'rooms',
        children: [
            { path: 'create', component: CreateComponent },
            { path: 'list', component: ListComponent }
        ]
    }
];
