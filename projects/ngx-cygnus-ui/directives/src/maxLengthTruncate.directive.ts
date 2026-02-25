import { Directive, HostListener, input, Optional, Self, effect } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appMaxLengthTruncate]',
  standalone: true
})
export class MaxLengthTruncateDirective {
  enabled = input<boolean>(false, { alias: 'appMaxLengthTruncate' });
  limit = input<number>(9);
  onlyNumbers = input<boolean>(true);

  constructor(@Optional() @Self() private ngControl: NgControl) {
    // para detectar cambios automáticos (programáticos)
    effect(() => {
      const control = this.ngControl?.control;
      if (!control || !this.enabled()) return;

      // Escuchamos los cambios de valor del control
      // Usamos valueChanges para reaccionar a cambios externos
      const value = control.value;
      const processed = this.processValue(value);

      if (value !== processed) {
        // Actualizamos el control sin disparar eventos infinitos
        control.setValue(processed, { emitEvent: false });
      }
    });
  }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    if (!this.enabled()) return;
    const inputElement = event.target as HTMLInputElement;
    const processed = this.processValue(inputElement.value);

    inputElement.value = processed;
    if (this.ngControl?.control) {
      this.ngControl.control.setValue(processed, { emitEvent: false });
    }
  }

  // Lógica de limpieza centralizada
  private processValue(val: any): string {
    let value = String(val || '');
    if (this.onlyNumbers()) {
      value = value.replace(/\D/g, '');
    }
    if (value.length > this.limit()) {
      value = value.slice(-this.limit());
    }
    return value;
  }
}
