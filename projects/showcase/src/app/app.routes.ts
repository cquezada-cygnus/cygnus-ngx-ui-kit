import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./index-cygnus-ui/index-cygnus-ui.component').then( (c) => c.IndexCygnusUiComponent )
  },
  {
    path: 'badges',
    loadComponent: () => import('./badge-content/badge-content.component').then( (c) => c.BadgeContentComponent )
  },
  {
    path: 'buttons',
    loadComponent: () => import('./button-content/button-content.component').then( (c) => c.ButtonContentComponent )
  },
  {
    path: 'checkboxes',
    loadComponent: () => import('./checkbox-content/checkbox-content.component').then( (c) => c.CheckboxContentComponent )
  },
  {
    path: 'cards',
    loadComponent: () => import('./card-content/card-content.component').then( (c) => c.CardContentComponent )
  },
  {
    path: 'inputs',
    loadComponent: () => import('./input-content/input-content.component').then( (c) => c.InputContentComponent )
  },
  {
    path: 'navbar',
    loadComponent: () => import('./navbar-content/navbar-content.component').then( (c) => c.NavbarContentComponent ),
    children: [
      {
        path: 'card',
        loadComponent: () => import('./card-content/card-content.component').then( (c) => c.CardContentComponent )
      },
      {
        path: 'login-01',
        loadComponent: () => import('./login-content/login-content.component').then( (c) => c.LoginContentComponent )
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: 'selectores',
    loadComponent: () => import('./select-content/select-content.component').then( (c) => c.SelectContentComponent )
  },
  {
    path: 'selectores-search',
    loadComponent: () => import('./select-search-content/select-search-content.component').then( (c) => c.SelectSearchContentComponent )
  },
  {
    path: 'login',
    loadComponent: () => import('./login-content/login-content.component').then( (c) => c.LoginContentComponent )
  },
  {
    path: '**',
    redirectTo: ''
  }
];
