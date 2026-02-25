import { Directive, HostListener, input, ElementRef, inject, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

/*
RUT (*)
Formato válido: 12345678-9 o 12.345.678-9 (Actualmente se autoformatea, lo cual es correcto)
Dígito verificador correcto (algoritmo módulo 11)
Longitud: 8-9 dígitos + verificador
No permitir letras (excepto K/k en verificador)
No permitir solo espacios
*/

@Directive({
  selector: '[appRutFormat]',
  standalone: true
})
export class RutFormatDirective {
  readonly withDots = input<boolean>(true);
  readonly appRutFormatEnabled = input<boolean>(true, { alias: 'appRutFormat' });

  private readonly el = inject(ElementRef);
  private readonly control = inject(NgControl, { self: true, optional: true });

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (!this.appRutFormatEnabled()) return;

    // Impedir que se escriba un espacio directamente
    if (event.key === ' ') {
      event.preventDefault();
    }
  }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    if (!this.appRutFormatEnabled()) return;

    let value = event.target.value.toUpperCase().replace(/[^0-9K]/g, '');
    if (!value) return;

    value = value.slice(0, 9);
    let formatted = value;

    if (value.length > 1) {
      const cuerpo = value.slice(0, -1);
      const dv = value.slice(-1);

      if (this.withDots()) {
        formatted = cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '-' + dv;
      } else {
        formatted = cuerpo + '-' + dv;
      }
    }

    // Si hay un control de Angular (FormControl/ngModel), lo actualizamos
    if (this.control?.control) {
      this.control.control.setValue(formatted, { emitEvent: false });
    } else {
      // Si es un input nativo sin Angular Forms, actualizamos el valor del DOM directamente
      this.el.nativeElement.value = formatted;
    }
  }
}
