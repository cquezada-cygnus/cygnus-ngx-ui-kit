import { Directive, HostListener, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[appEmailFormatter]',
  standalone: true
})
export class EmailFormatterDirective {
  // Input Signal para activar/desactivar la lógica
  // Uso: <input appEmailFormatter [emailFormatterEnabled]="true">
  emailFormatterEnabled = input<boolean>(false);

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event'])
  onInput(event: InputEvent): void {
    // Si la señal es falsa, ignoramos la lógica por completo
    if (!this.emailFormatterEnabled()) return;

    const input = this.el.nativeElement;
    const originalValue = input.value;

    // 1. Convertir a minúsculas y eliminar espacios
    let processed = originalValue.toLowerCase().replace(/\s+/g, '');

    // 2. Solo permitir UN arroba
    const parts = processed.split('@');
    if (parts.length > 2) {
      processed = parts[0] + '@' + parts.slice(1).join('');
    }

    // 3. Restringir caracteres permitidos (según tu Regex)
    // a-z, 0-9, y . _ % - @
    processed = processed.replace(/[^a-z0-9._%\-@]/g, '');

    // 4. Limitar longitud máxima (254)
    if (processed.length > 254) {
      processed = processed.substring(0, 254);
    }

    // Solo actualizamos si el valor cambió para no ensuciar el stack de eventos
    if (originalValue !== processed) {
      input.value = processed;
      // Notificamos a Angular/FormControls del cambio manual del DOM
      input.dispatchEvent(new Event('input'));
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!this.emailFormatterEnabled()) return;

    // Bloqueo preventivo de espacio para mejorar la UX
    if (event.key === ' ' || event.code === 'Space') {
      event.preventDefault();
    }
  }
}
