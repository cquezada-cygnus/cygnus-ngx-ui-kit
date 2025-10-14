import { Component, input } from '@angular/core';
import { TW_CLASS } from '../const/tailwind.const';

@Component({
  selector: 'cygnus-card-title-text',
  imports: [],
  templateUrl: './cygnus-card-title-text.component.html',
})
export class CygnusCardTitleTextComponent {
  TW_CLASS = TW_CLASS;
  cardTitle = input<string>('');
  cardText = input<string>('');
}
