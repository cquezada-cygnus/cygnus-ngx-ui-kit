import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./index-cygnus-ui/index-cygnus-ui.component').then( (c) => c.IndexCygnusUiComponent )
  },
  {
    path: 'alerts',
    loadComponent: () => import('./alert-content/alert-content.component').then( (c) => c.AlertContentComponent )
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
    path: 'cards',
    loadComponent: () => import('./card-content/card-content.component').then( (c) => c.CardContentComponent )
  },
  {
    path: 'collapsible',
    loadComponent: () => import('./collapsible-content/collapsible-content.component').then( (c) => c.CollapsibleContentComponent )
  },
  {
    path: 'checkboxes',
    loadComponent: () => import('./checkbox-content/checkbox-content.component').then( (c) => c.CheckboxContentComponent )
  },
  {
    path: 'dropdown',
    loadComponent: () => import('./dropdown-content/dropdown-content.component').then( (c) => c.DropdownContentComponent )
  },
  {
    path: 'lists',
    loadComponent: () => import('./list-content/list-content.component').then( (c) => c.ListContentComponent )
  },
  {
    path: 'inputs',
    loadComponent: () => import('./input-content/input-content.component').then( (c) => c.InputContentComponent )
  },
  {
    path: 'modals',
    loadComponent: () => import('./modal-content/modal-content.component').then( (c) => c.ModalContentComponent )
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
    path: 'popovers',
    loadComponent: () => import('./popover-content/popover-content.component').then( (c) => c.PopoverContentComponent )
  },
  {
    path: 'radiobuttons',
    loadComponent: () => import('./radio-button-content/radio-button-content.component').then( (c) => c.RadioButtonContentComponent )
  },
  {
    path: 'sidebar',
    loadComponent: () => import('./sidebar-content/sidebar-content.component').then( (c) => c.SidebarContentComponent )
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
    path: 'toggles',
    loadComponent: () => import('./toggle-content/toggle-content.component').then( (c) => c.ToggleContentComponent )
  },
  {
    path: 'tooltips',
    loadComponent: () => import('./tooltip-content/tooltip-content.component').then( (c) => c.TooltipContentComponent )
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
