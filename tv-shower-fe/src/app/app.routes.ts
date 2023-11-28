import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './features/list/list.component';

export const routes: Routes = [

  {
    path: 'list',
    component:ListComponent,
  },   { path: '',   component:AppComponent }, 
]; 
