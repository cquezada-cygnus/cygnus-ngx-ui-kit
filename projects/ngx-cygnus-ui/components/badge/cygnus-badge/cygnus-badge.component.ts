import { Component, input } from '@angular/core';
import { TW_CLASS } from '../const/tailwind.const';

@Component({
  selector: 'cygnus-badge',
  imports: [],
  templateUrl: './cygnus-badge.component.html',
})
export class CygnusBadgeComponent {
  TW_CLASS = TW_CLASS; // esto fue creado para reemplazar @apply de tailwind, ya la documentación de tailwind 4 recomienda no usar @apply y se dice que no funciona muy bien en angular.

  badgeText = input<string>('');

}
