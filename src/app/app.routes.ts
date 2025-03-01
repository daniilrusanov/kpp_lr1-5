import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'cloud',
    loadComponent: () => import('./cloud/cloud.page').then( m => m.CloudPage)
  },
  {
    path: 'abstract-class',
    loadComponent: () => import('./abstract-class/abstract-class.page').then( m => m.AbstractClassPage)
  },
];
