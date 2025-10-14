import { Component, input } from '@angular/core';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { TW_CLASS } from '../const/tailwind.const';

@Component({
  selector: 'cygnus-card-icon-text',
  imports: [
    NgxCygnusIconsComponent
  ],
  templateUrl: './cygnus-card-icon-text.component.html',
})
export class CygnusCardIconTextComponent {
  TW_CLASS = TW_CLASS;

  iconSize  = input<string>('');
  iconColor = input<string>('');
  iconRoute = input<string>('');
  cardText  = input<string>('');

}
