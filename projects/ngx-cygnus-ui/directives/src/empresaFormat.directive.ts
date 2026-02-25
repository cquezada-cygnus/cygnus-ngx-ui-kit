import { Directive, input, ElementRef, HostListener } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

/*
Empresa de referencia (en modal)
Letras, números, espacios
Símbolos comunes: &, ., S.A., Ltda.
Longitud mínima: 2 caracteres
*/

@Directive({
  selector: '[appTextEmpresa]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TextEmpresaDirective,
      multi: true
    }
  ]
})
export class TextEmpresaDirective implements Validator {
  // Inputs con Signals
  textEmpresaEnabled = input<boolean>(true);
  textEmpresaMaxLength = input<number>(200);
  textEmpresaMinLength = input<number>(2); // Nuevo Signal para el mínimo

  private allowedRegex = /^[a-zA-Z0-9\s&.]*$/;

  constructor(private el: ElementRef<HTMLInputElement | HTMLTextAreaElement>) {}

  // --- LÓGICA DE VALIDACIÓN (Para el estado del formulario) ---
  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.textEmpresaEnabled() || !control.value) {
      return null;
    }

    const value = control.value;
    const errors: ValidationErrors = {};

    if (value.length < this.textEmpresaMinLength()) {
      errors['minlength'] = {
        requiredLength: this.textEmpresaMinLength(),
        actualLength: value.length
      };
    }

    return Object.keys(errors).length ? errors : null;
  }

  // --- LÓGICA DE RESTRICCIÓN (Bloqueo de teclas) ---
  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if (!this.textEmpresaEnabled()) return;

    // Bloquear si excede el máximo
    if (this.el.nativeElement.value.length >= this.textEmpresaMaxLength()) {
      event.preventDefault();
      return;
    }

    // Bloquear si el caracter no es permitido
    if (!this.allowedRegex.test(event.key)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    if (!this.textEmpresaEnabled()) return;

    const pastedText = event.clipboardData?.getData('text') || '';

    // Si contiene caracteres inválidos, prevenimos y limpiamos
    if (!this.allowedRegex.test(pastedText)) {
      event.preventDefault();
      const cleanedText = pastedText.replace(/[^a-zA-Z0-9\s&.]/g, '');
      const availableSpace = this.textEmpresaMaxLength() - this.el.nativeElement.value.length;

      if (availableSpace > 0) {
        this.insertAtCursor(cleanedText.substring(0, availableSpace));
      }
    }
  }

  private insertAtCursor(text: string) {
    const input = this.el.nativeElement;
    const start = input.selectionStart || 0;
    const end = input.selectionEnd || 0;
    input.value = input.value.substring(0, start) + text + input.value.substring(end);
    input.dispatchEvent(new Event('input'));
  }
}
