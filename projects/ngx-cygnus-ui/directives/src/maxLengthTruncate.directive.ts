import { Directive, HostListener, input, Optional, Self, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[appMaxLengthTruncate]',
  standalone: true
})
export class MaxLengthTruncateDirective implements OnDestroy {
  enabled = input<boolean>(false, { alias: 'appMaxLengthTruncate' });
  limit = input<number>(9);
  onlyNumbers = input<boolean>(true);

  private destroy$ = new Subject<void>();

  constructor(
    @Optional() @Self() private ngControl: NgControl,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.listenToProgrammaticChanges();
  }

  private listenToProgrammaticChanges() {
    this.ngControl?.valueChanges
      ?.pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        if (!this.enabled()) return;
        const processed = this.processValue(value);

        if (value !== processed) {
          // Actualizamos el modelo sin disparar eventos infinitos
          this.ngControl.control?.setValue(processed, { emitEvent: false });
          // Sincronizamos la vista (el input visual)
          this.renderer.setProperty(this.el.nativeElement, 'value', processed);
        }
      });
  }

  // 1. Bloqueo visual: Evita que caracteres no deseados aparezcan al teclear
  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent): void {
    if (!this.enabled() || !this.onlyNumbers()) return;

    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault(); // El carácter ni siquiera llega a aparecer en el input
    }
  }

  // 2. Limpieza visual: Maneja el pegado (paste) y el autocompletado
  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    if (!this.enabled()) return;

    const inputElement = event.target as HTMLInputElement;
    const originalValue = inputElement.value;
    const processed = this.processValue(originalValue);

    if (originalValue !== processed) {
      this.renderer.setProperty(this.el.nativeElement, 'value', processed);
      this.ngControl.control?.setValue(processed, { emitEvent: false });
    }
  }

  private processValue(val: any): string {
    let value = String(val ?? '');
    if (this.onlyNumbers()) {
      value = value.replace(/\D/g, '');
    }
    if (value.length > this.limit()) {
      value = value.slice(0, this.limit()); // Truncamos al límite
    }
    return value;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
