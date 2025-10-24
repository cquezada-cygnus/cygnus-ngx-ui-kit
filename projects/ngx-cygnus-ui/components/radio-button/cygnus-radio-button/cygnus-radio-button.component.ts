import { Component, input, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TW_CLASS } from '../const/tailwind.const';

@Component({
  selector: 'cygnus-radio-button',
  imports: [
    RouterLink
  ],
  templateUrl: './cygnus-radio-button.component.html',
  styles: `
    [type='radio']:checked {
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
    }
  `,
})
export class CygnusRadioButtonComponent implements OnInit {
  private static idCounter = 0;
  TW_CLASS = TW_CLASS;

  inputId = signal<string>('');
  labelText = input<string>('');

  isDisabled = input<boolean>(false);
  linkText = input<string>('');
  linkUrl = input<string>('');

  ngOnInit() {
    // Generar ID único si no se proporciona
    this.inputId.set(`cg-radio-button-${++CygnusRadioButtonComponent.idCounter}`);
  }

}
