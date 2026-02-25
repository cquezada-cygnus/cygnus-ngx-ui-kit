import { Directive, input, HostListener, ElementRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

/*
Nombres (*):

Solo letras (a-z, A-Z, tildes, ñ)
Espacios permitidos (nombres compuestos)
Guiones y apóstrofes permitidos
Longitud: 2-50 caracteres
No permitir números ni símbolos especiales
No permitir solo espacios
Regex: /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s\-']{2,50}$/

Nombre de referencia (en modal de referencias)

Solo letras, espacios, tildes, ñ
Longitud: 3-100 caracteres
No permitir solo espacios en blanco
No números ni símbolos
Regex: /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s\-']{3,100}$/

*/

@Directive({
  selector: '[appOnlyLetters]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: OnlyLettersDirective,
      multi: true
    }
  ]
})
export class OnlyLettersDirective implements Validator {
  // Configuración mediante Signals
  onlyLettersEnabled = input<boolean>(true);
  onlyLettersMinLength = input<number>(2);
  onlyLettersMaxLength = input<number>(50);

  constructor(private el: ElementRef<HTMLInputElement>) {}

  // 1. Bloqueo preventivo de teclas
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (!this.onlyLettersEnabled()) return;

    const input = this.el.nativeElement;
    const selectionStart = input.selectionStart ?? 0;
    const value = input.value;

    const controlKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter'];
    if (controlKeys.includes(event.key)) return;

    const charRegex = /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s\-']$/;
    if (!charRegex.test(event.key)) {
      event.preventDefault();
      return;
    }

    if (event.key === ' ') {
      if (selectionStart === 0 || value.charAt(selectionStart - 1) === ' ' || value.charAt(selectionStart) === ' ') {
        event.preventDefault();
      }
    }
  }

  // 2. Limpieza automática al PEGAR
  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    if (!this.onlyLettersEnabled()) return;

    event.preventDefault();
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData?.getData('text') || '';

    const cleanedText = pastedText
      .replace(/[^a-záéíóúñA-ZÁÉÍÓÚÑ\s\-']/g, '')
      .replace(/\s+/g, ' ')
      .trimStart()
      .slice(0, this.onlyLettersMaxLength());

    const input = this.el.nativeElement;
    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;
    const newValue = input.value.substring(0, start) + cleanedText + input.value.substring(end);

    input.value = newValue;
    input.dispatchEvent(new Event('input'));
  }

  // 3. Limpieza automática al SALIR (Blur)
  @HostListener('blur')
  onBlur() {
    if (!this.onlyLettersEnabled()) return;

    const input = this.el.nativeElement;
    const trimmedValue = input.value.trim();

    if (input.value !== trimmedValue) {
      input.value = trimmedValue;
      input.dispatchEvent(new Event('input'));
    }
  }

  // 4. Validación dinámica
  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.onlyLettersEnabled() || !control.value) return null;

    const value = control.value as string;
    const min = this.onlyLettersMinLength();
    const max = this.onlyLettersMaxLength();

    // Construcción dinámica del Regex usando los valores de los Signals
    // Explicación:
    // ^(?! ) -> No inicia con espacio
    // [..]{min,max} -> Caracteres permitidos con rango dinámico
    // (?<! )$ -> No termina con espacio
    const regex = new RegExp(
      `^(?! )[a-záéíóúñA-ZÁÉÍÓÚÑ\\s\\-']{${min},${max}}(?<! )$`
    );

    // Verificación adicional: No permitir espacios dobles internos
    const hasDoubleSpaces = /\s\s/.test(value);

    const isValid = regex.test(value) && !hasDoubleSpaces;

    return isValid ? null : {
      'onlyLetters': {
        requiredMin: min,
        requiredMax: max,
        actualLength: value.length
      }
    };
  }
}
