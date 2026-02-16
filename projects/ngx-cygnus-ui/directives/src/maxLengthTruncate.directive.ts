import { Directive, HostListener, input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[maxLengthTruncate]',
  standalone: true
})
export class MaxLengthTruncateDirective {
  // Inputs usando la nueva sintaxis de Angular 19
  limit = input<number>(9);
  onlyNumbers = input<boolean>(true);
  enabled = input<boolean>(false);

  constructor(@Optional() @Self() private ngControl: NgControl) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    if (!this.enabled()) return;

    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value;

    // 1. Filtrar solo números si está activado
    if (this.onlyNumbers()) {
      value = value.replace(/\D/g, '');
    }

    // 2. Truncar por la izquierda si excede el límite
    const maxLength = this.limit();
    if (value.length > maxLength) {
      value = value.slice(-maxLength);
    }

    // 3. Actualizar vista y modelo
    inputElement.value = value;
    if (this.ngControl?.control) {
      this.ngControl.control.setValue(value, { emitEvent: false });
    }
  }
}
