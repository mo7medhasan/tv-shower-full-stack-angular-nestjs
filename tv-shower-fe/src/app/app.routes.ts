import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';

export const routes: Routes = [
    { path: '',  redirectTo:"list",pathMatch:'full' }, 
      {
        path: 'list',
        // component:ListComponent
        loadComponent: ()=> import('./features/list/list.component').then(m => m.ListComponent),
      },   
    ]; 
    