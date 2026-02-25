import { Directive, input, HostListener, ElementRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

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

    // Solo permitir letras, tildes, ñ, espacios, guiones y apóstrofes
    const charRegex = /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s\-']$/;
    if (!charRegex.test(event.key)) {
      event.preventDefault();
      return;
    }

    // Reglas de espacios en tiempo real
    if (event.key === ' ') {
      // No espacio al inicio ni doble espacio
      if (selectionStart === 0 || value.charAt(selectionStart - 1) === ' ' || value.charAt(selectionStart) === ' ') {
        event.preventDefault();
      }
    }
  }

  // 2. Limpieza automática al PEGAR (Paste)
  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    if (!this.onlyLettersEnabled()) return;

    event.preventDefault();
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData?.getData('text') || '';

    // Limpiamos el texto pegado:
    // - Quitamos caracteres prohibidos
    // - Colapsamos múltiples espacios a uno solo
    // - Trim inicial (el final se encarga el blur o la validación)
    const cleanedText = pastedText
      .replace(/[^a-záéíóúñA-ZÁÉÍÓÚÑ\s\-']/g, '')
      .replace(/\s+/g, ' ')
      .trimStart()
      .slice(0, this.onlyLettersMaxLength());

    // Insertar el texto limpio en la posición del cursor
    const input = this.el.nativeElement;
    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;
    const newValue = input.value.substring(0, start) + cleanedText + input.value.substring(end);

    input.value = newValue;
    // Disparamos el evento input para que Angular Forms se entere del cambio
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

  // 4. Validación para el estado del Formulario
  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.onlyLettersEnabled() || !control.value) return null;

    const value = control.value as string;

    // Explicación Regex:
    // ^(?! ) -> No empieza con espacio
    // (?!.* ) -> No permite dos espacios seguidos
    // [..]{2,max} -> Caracteres permitidos y longitud
    // (?<! )$ -> No termina con espacio (Lookbehind)
    const regex = new RegExp(
      `^(?! )(?!.* )[a-záéíóúñA-ZÁÉÍÓÚÑ\\s\\-']{2,${this.onlyLettersMaxLength()}}(?<! )$`
    );

    return regex.test(value) ? null : { 'onlyLetters': true };
  }
}
