import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TW_CLASS } from '../const/tailwind.const';
import { BtnLinkType } from 'ngx-cygnus-ui/types';

@Component({
  selector: 'cygnus-button-link',
  imports: [RouterLink],
  templateUrl: './cygnus-button-link.component.html',
})
export class CygnusButtonLinkComponent {
  TW_CLASS = TW_CLASS; // esto fue creado para reemplazar @apply de tailwind, ya la documentación de tailwind 4 recomienda no usar @apply y se dice que no funciona muy bien en angular.

  btnLinkType = input<BtnLinkType>('btn-link');
  btnRouterLinkText = input<string>('');
}
