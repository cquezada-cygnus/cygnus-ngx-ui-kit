import { Component, signal } from '@angular/core';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { CygnusButtonComponent } from 'ngx-cygnus-ui/components/button';
import { CygnusInputComponent } from 'ngx-cygnus-ui/components/input';
import { InputColor } from 'ngx-cygnus-ui/types';

@Component({
  selector: 'cygnus-card-login',
  imports: [
    NgxCygnusIconsComponent,
    CygnusInputComponent,
    CygnusButtonComponent
  ],
  templateUrl: './cygnus-card-login.component.html',
})
export class CygnusCardLoginComponent {

  textHint = signal<string>('');

  inputColor = signal<InputColor>('base');

}
