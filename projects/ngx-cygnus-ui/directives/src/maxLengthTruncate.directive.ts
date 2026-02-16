import { Directive, HostListener, input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appMaxLengthTruncate]',
  standalone: true
})
export class MaxLengthTruncateDirective {
  // Usamos el alias para que el selector sea también el input de activación
  enabled = input<boolean>(false, { alias: 'appMaxLengthTruncate' });
  limit = input<number>(9);
  onlyNumbers = input<boolean>(true);

  constructor(@Optional() @Self() private ngControl: NgControl) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    // Importante: al ser Signal, usamos los paréntesis ()
    if (!this.enabled()) return;

    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value;

    // Filtrar números si está activo
    if (this.onlyNumbers()) {
      value = value.replace(/\D/g, '');
    }

    // Truncar por la izquierda
    const maxLength = this.limit();
    if (value.length > maxLength) {
      value = value.slice(-maxLength);
    }

    // Actualizar el DOM
    inputElement.value = value;

    // Actualizar el FormControl de Angular para que el modelo sea coherente con la vista
    if (this.ngControl?.control) {
      this.ngControl.control.setValue(value, { emitEvent: false });
    }
  }
}
