import { Directive, HostListener, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appOnlyNineDigits]',
  standalone: true
})
export class OnlyNineDigitsDirective {

  constructor(@Optional() @Self() private ngControl: NgControl) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 9) {
      value = value.slice(-9);
    }

    // Actualizamos la vista
    input.value = value;

    // Actualizamos el modelo de Angular (si existe)
    if (this.ngControl?.control) {
      this.ngControl.control.setValue(value, { emitEvent: false });
    }
  }
}
