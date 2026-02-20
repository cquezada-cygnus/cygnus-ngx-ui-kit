import { Component, computed, effect, input, OnInit, output, signal, untracked } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { TW_CLASS } from '../const/tailwind.const';


@Component({
  selector: 'cygnus-radio-button',
  imports: [
    RouterLink
  ],
  templateUrl: './cygnus-radio-button.component.html',
  styles: `
    [type='radio']:checked {
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
    }
  `,
})
export class CygnusRadioButtonComponent implements OnInit {
  private static idCounter = 0;
  TW_CLASS = TW_CLASS;

  control = input.required<FormControl<string>>();
  inputRadioValueOutput = output<string>();

  inputId = signal<string>('');
  labelText = input<string>('');

  isDisabled = input<boolean>(false);
  linkText = input<string>('');
  linkUrl = input<string>('');

  // 1. Creamos un signal interno para el valor actual del control
  private internalControlValue = signal<string>('');

  constructor() {
    // 2. El effect se ejecuta automáticamente cuando 'control' recibe su primer valor
    effect((onCleanup) => {
      const ctrl = this.control();

      // Sincronizamos el valor inicial
      untracked(() => this.internalControlValue.set(ctrl.value));

      // Escuchamos cambios futuros (incluyendo patchValue)
      const sub = ctrl.valueChanges.subscribe(val => {
        this.internalControlValue.set(val);
      });

      // Limpieza automática si el componente se destruye o el input cambia
      onCleanup(() => sub.unsubscribe());
    });
  }

  // 3. Este computed ahora es 100% reactivo y seguro
  isChecked = computed(() => {
    return this.internalControlValue() === this.labelText();
  });

  ngOnInit() {
    // Generar ID único si no se proporciona
    this.inputId.set(`cg-radio-button-${++CygnusRadioButtonComponent.idCounter}`);
  }

  // isChecked(): boolean {
  //   return this.control()?.value === this.labelText();
  // }
  // Transformamos isChecked en un computed signal


  onRadioChange() {
    this.control()?.setValue(this.labelText());
    this.control()?.markAsDirty();
    this.control()?.markAsTouched();
    this.inputRadioValueOutput.emit(this.labelText());
  }

}
