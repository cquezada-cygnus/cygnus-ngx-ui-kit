import { Directive, HostListener, input, ElementRef } from '@angular/core';

/*
Empresa de referencia (en modal)
Letras, números, espacios
Símbolos comunes: &, ., S.A., Ltda.
Longitud mínima: 2 caracteres
*/

@Directive({
  selector: '[appTextEmpresa]',
  standalone: true
})
export class TextEmpresaDirective {
  // Inputs usando Signals
  textEmpresaEnabled = input<boolean>(true);
  textEmpresaMaxLength = input<number>(200);

  // Expresión regular: Letras, números, espacios, puntos y ampersand
  private allowedRegex = /^[a-zA-Z0-9\s&.]*$/;

  constructor(private el: ElementRef<HTMLInputElement | HTMLTextAreaElement>) {}

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if (!this.textEmpresaEnabled()) return;

    // 1. Bloquear si excede la longitud máxima
    if (this.el.nativeElement.value.length >= this.textEmpresaMaxLength()) {
      event.preventDefault();
      return;
    }

    // 2. Bloquear si el caracter no coincide con el patrón
    if (!this.allowedRegex.test(event.key)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    if (!this.textEmpresaEnabled()) return;

    // Obtenemos el texto del portapapeles
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData?.getData('text') || '';

    // Validamos el texto pegado
    if (!this.allowedRegex.test(pastedText)) {
      event.preventDefault();

      // Opcional: Podrías limpiar el texto y pegar solo lo válido
      const cleanedText = pastedText.replace(/[^a-zA-Z0-9\s&.]/g, '');
      const currentText = this.el.nativeElement.value;

      // Verificamos longitud máxima tras limpiar
      const availableSpace = this.textEmpresaMaxLength() - currentText.length;
      if (availableSpace > 0) {
        const textToInsert = cleanedText.substring(0, availableSpace);
        this.insertAtCursor(textToInsert);
      }
    }
  }

  private insertAtCursor(text: string) {
    const input = this.el.nativeElement;
    const start = input.selectionStart || 0;
    const end = input.selectionEnd || 0;
    const currentVal = input.value;

    input.value = currentVal.substring(0, start) + text + currentVal.substring(end);

    // Disparar evento de input para que Angular (ngModel/FormControl) se entere del cambio
    input.dispatchEvent(new Event('input'));
  }
}
