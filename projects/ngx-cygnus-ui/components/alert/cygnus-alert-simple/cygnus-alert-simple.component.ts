import { Component, input } from '@angular/core';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { TW_CLASS } from '../const/tailwind.const';

@Component({
  selector: 'cygnus-alert-simple',
  imports: [NgxCygnusIconsComponent],
  templateUrl: './cygnus-alert-simple.component.html',
  styles: `
    :host { // By default, Angular components behave like inline elements. To allow them to occupy the full width of their parent container, you need to change their display property to block.
      display: block;
      width: 100%;
    }
  `,
})
export class CygnusAlertSimpleComponent {
  TW_CLASS = TW_CLASS;

  alertTitle = input<string>('');
  alertContent = input<string>('');
}
