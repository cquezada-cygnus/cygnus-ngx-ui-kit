import { Component, input } from '@angular/core';
import { TW_CLASS } from '../const/tailwind.const';

@Component({
  selector: 'cygnus-button-link',
  imports: [],
  templateUrl: './cygnus-button-link.component.html',
})
export class CygnusButtonLinkComponent {
  TW_CLASS = TW_CLASS; // esto fue creado para reemplazar @apply de tailwind, ya la documentación de tailwind 4 recomienda no usar @apply y se dice que no funciona muy bien en angular.

  btnLinkText = input<string>('');
}
