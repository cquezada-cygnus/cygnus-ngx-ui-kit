import { Directive, input, HostListener, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appCustomInputText]',
  standalone: true
})
export class CustomInputTextDirective {
  private el = inject(ElementRef);

  // Input signals coincidiendo con los nombres que usas en tu componente
  customInputTextEnabled = input<boolean>(true);
  customInputTextMaxLength = input<number>(200);

  // Regex para permitir letras (incluyendo acentos), números, espacios y los símbolos específicos
  private readonly allowedCharsRegex = /^[a-zA-Z0-9áéíóúñÁÉÍÓÚÑ\s\#\-\/\,\.]*$/;

  @HostListener('input', ['$event'])
  onInput(event: InputEvent): void {
    if (!this.customInputTextEnabled()) return;

    const inputElement = this.el.nativeElement as HTMLInputElement;
    const originalValue = inputElement.value ?? ''; // Evita el error de undefined

    // 1. Filtrar caracteres prohibidos
    let cleanedValue = originalValue
      .split('')
      .filter(char => this.allowedCharsRegex.test(char))
      .join('');

    // 2. Impedir más de dos espacios juntos
    // Esta regex reemplaza 3 o más espacios por solo 2, o puedes usar /\s{2,}/g para dejar máximo 1.
    cleanedValue = cleanedValue.replace(/\s{3,}/g, '  ');

    // 3. Truncar por longitud máxima
    if (cleanedValue.length > this.customInputTextMaxLength()) {
      cleanedValue = cleanedValue.substring(0, this.customInputTextMaxLength());
    }

    // 4. Actualizar solo si el valor cambió para evitar loops infinitos de eventos
    if (originalValue !== cleanedValue) {
      inputElement.value = cleanedValue;
      // Importante: Disparar evento para que (input)="setValue(...)" en tu componente capture el cambio
      inputElement.dispatchEvent(new Event('input'));
    }
  }

  @HostListener('blur')
  onBlur(): void {
    if (!this.customInputTextEnabled()) return;

    const inputElement = this.el.nativeElement as HTMLInputElement;
    const value = inputElement.value ?? '';

    // 5. Impedir espacios al inicio/final y que no sea "solo espacios"
    let finalValue = value.trim();

    // Si el resultado es vacío pero el input tenía algo (o solo espacios),
    // lo reseteamos para cumplir "no permitir solo espacios"
    if (value.length > 0 && finalValue.length === 0) {
      finalValue = '';
    }

    if (inputElement.value !== finalValue) {
      inputElement.value = finalValue;
      inputElement.dispatchEvent(new Event('input'));
    }
  }

  // Manejo de pegado para asegurar limpieza inmediata
  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    if (!this.customInputTextEnabled()) return;
    // Dejamos que el evento 'input' se encargue de la limpieza después del paste
  }
}
