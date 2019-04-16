import { Routes } from '@angular/router';
import { CreateComponent } from './pages/room/create/create.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ListComponent } from './pages/room/list/list.component';
import { NotfoundComponent } from './pages/home/notfound/notfound.component';
import { RoomModule } from './pages/room/room.module';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'notfound', component: NotfoundComponent },
    {
        path: 'rooms',
        children: [
            { path: 'create', component: CreateComponent },
            { path: 'list', component: ListComponent }
        ]
    },
    /* { path: 'authentication', loadChildren: () => RoomModule },*/
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: 'notfound' }

];