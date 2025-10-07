import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { CygnusButtonComponent, CygnusButtonLinkComponent } from 'ngx-cygnus-ui/components/button';
import { CygnusInputComponent } from 'ngx-cygnus-ui/components/input';
import { InputColor } from 'ngx-cygnus-ui/types';
import { TW_CLASS } from '../const/tailwind.const';

@Component({
  selector: 'cygnus-card-login',
  imports: [
    RouterLink,
    NgxCygnusIconsComponent,
    CygnusInputComponent,
    CygnusButtonComponent,
    CygnusButtonLinkComponent,
  ],
  templateUrl: './cygnus-card-login.component.html',
})
export class CygnusCardLoginComponent {

  TW_CLASS = TW_CLASS; // esto fue creado para reemplazar @apply de tailwind, ya la documentación de tailwind 4 recomienda no usar @apply y se dice que no funciona muy bien en angular.

  CYGNUS_LOGO_COLOR: string = '#cc5224';

  textHint = signal<string>('');

  inputColor = signal<InputColor>('base');

}
