import { Directive, input, HostListener, ElementRef, inject } from '@angular/core';

/*
Dirección (*)
Longitud: 5-200 caracteres
Permitir: letras, números, espacios, #, -, /, comas, puntos
No permitir solo espacios
No símbolos extraños (@, $, %, etc.)
Regex: /^[a-zA-Z0-9áéíóúñÁÉÍÓÚÑ\s\#\-\/\,\.]{5,200}$/

Depto/Casa/Condominio/Otro
Opcional
Longitud máxima: 50 caracteres
Permitir números, letras y caracteres básicos
*/

@Directive({
  selector: '[appCustomInputText]',
  standalone: true
})
export class CustomInputTextDirective {
  private el = inject(ElementRef);

  // Input signals
  customInputTextEnabled = input<boolean>(true);
  customInputTextMaxLength = input<number>(200);
  customInputTextMinLength = input<number>(0); // <-- Nuevo Input Signal

  private readonly allowedCharsRegex = /^[a-zA-Z0-9áéíóúñÁÉÍÓÚÑ\s\#\-\/\,\.]*$/;

  @HostListener('input')
  onInput(): void {
    if (!this.customInputTextEnabled()) return;

    const inputElement = this.el.nativeElement as HTMLInputElement;
    const originalValue = inputElement.value ?? '';

    // 1. Filtrar caracteres prohibidos
    let cleanedValue = originalValue
      .split('')
      .filter(char => this.allowedCharsRegex.test(char))
      .join('');

    // 2. Impedir más de dos espacios juntos
    cleanedValue = cleanedValue.replace(/\s{3,}/g, '  ');

    // 3. Truncar por longitud máxima (Input Signal)
    if (cleanedValue.length > this.customInputTextMaxLength()) {
      cleanedValue = cleanedValue.substring(0, this.customInputTextMaxLength());
    }

    if (originalValue !== cleanedValue) {
      this.updateValue(inputElement, cleanedValue);
    }
  }

  @HostListener('blur')
  onBlur(): void {
    if (!this.customInputTextEnabled()) return;

    const inputElement = this.el.nativeElement as HTMLInputElement;
    let value = inputElement.value ?? '';

    // 4. Trim inicial/final
    let finalValue = value.trim();

    // 5. Lógica de mínimo de caracteres
    // Si no llega al mínimo, decidimos si limpiar el campo o dejarlo para que el validador de Angular actúe
    if (finalValue.length > 0 && finalValue.length < this.customInputTextMinLength()) {
      // Opción A: Limpiar si es muy corto (ajusta según tu necesidad de UX)
      // finalValue = '';
      console.warn(`Longitud mínima no alcanzada (${this.customInputTextMinLength()} requeridos)`);
    }

    if (inputElement.value !== finalValue) {
      this.updateValue(inputElement, finalValue);
    }
  }

  // Método auxiliar para mantener el flujo de datos sincronizado
  private updateValue(element: HTMLInputElement, value: string): void {
    element.value = value;
    element.dispatchEvent(new Event('input', { bubbles: true }));
  }
}
