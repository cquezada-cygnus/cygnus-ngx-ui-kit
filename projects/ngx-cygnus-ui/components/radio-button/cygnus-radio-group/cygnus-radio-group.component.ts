import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cygnus-radio-group',
  imports: [],
  templateUrl: './cygnus-radio-group.component.html',
})
export class CygnusRadioGroupComponent {
  control = input<FormControl<string>>();
  legend = input<string>('');

}
