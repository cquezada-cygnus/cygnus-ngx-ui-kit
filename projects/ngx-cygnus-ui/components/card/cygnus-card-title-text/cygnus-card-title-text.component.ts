import { Component, input } from '@angular/core';
import { TW_CLASS } from '../const/tailwind.const';

import { IconColorText, IconTextSize, NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';

@Component({
  selector: 'cygnus-card-title-text',
  imports: [
    NgxCygnusIconsComponent,
  ],
  templateUrl: './cygnus-card-title-text.component.html',
})
export class CygnusCardTitleTextComponent {
  TW_CLASS = TW_CLASS;
  cardTitle = input<string>('');
  cardText = input<string>('');
  cardIcon = input<string>('');
  sizeTitle = input<string>('');
}
