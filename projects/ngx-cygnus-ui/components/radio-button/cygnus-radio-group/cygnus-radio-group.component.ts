import { Component, HostBinding, input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cygnus-radio-group',
  imports: [],
  templateUrl: './cygnus-radio-group.component.html',
})
export class CygnusRadioGroupComponent {
  control = input<FormControl<string>>();
  legend = input<string>('');

  // Agrega las clases de Tailwind 4 directamente al host
  @HostBinding('class') clasesHost = 'dark:bg-gray-700 dark:border-gray-600';
}
