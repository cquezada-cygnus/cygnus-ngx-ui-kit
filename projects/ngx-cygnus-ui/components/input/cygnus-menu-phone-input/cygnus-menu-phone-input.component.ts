import { AfterViewInit, Component, effect, ElementRef, input, OnInit, output, signal, viewChild } from '@angular/core';
import { IconColorText, IconTextSize, NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { InputColor, InputSize, InputCustomType } from 'ngx-cygnus-ui/types';
import { TW_CLASS } from '../const/tailwind.const';
import { FormControl } from '@angular/forms';
import {
  MaxLengthTruncateDirective,
  OnlyLettersDirective,
  CustomInputTextDirective,
} from 'ngx-cygnus-ui/directives';
import { SelectGeneric } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'cygnus-menu-phone-input',
  imports: [
    NgxCygnusIconsComponent,
    MaxLengthTruncateDirective,
    OnlyLettersDirective,
    CustomInputTextDirective,
  ],
  templateUrl: './cygnus-menu-phone-input.component.html',
})
export class CygnusMenuPhoneInputComponent implements OnInit, AfterViewInit {
  private static idCounter = 0;

  TW_CLASS = TW_CLASS; // esto fue creado para reemplazar @apply de tailwind, ya la documentación de tailwind 4 recomienda no usar @apply y se dice que no funciona muy bien en angular.

  control = input<FormControl<string>>();

  inputId = signal<string>('');
  inputCustomType = input<InputCustomType>('base');
  inputColor = input<InputColor>('base');
  inputSize = input<InputSize>('');
  iconColor = input<IconColorText>('black');
  iconSize = input<IconTextSize>('lg');
  hintColor = input<boolean>(false);
  textLabel = input<string>('');
  textHint = input<string>('');
  textPlaceholder = input<string>(' ');
  inputDisabled = input<boolean>(false);
  typePassword = input<boolean>(false);
  inputClearValue = input<boolean>(false);

  isInvisiblePhoneDrop = signal<boolean>(true);
  menuSearchTextPhoneDrop = signal<string>('');
  menuSearchContentArr = input<SelectGeneric[]>([]);

  cygnusInput = viewChild<ElementRef>('cygnusInput');
  iconClicked = output<string>();

  initializeInputValue = input<string>('');
  inputValueOutput = output<string>();
  inputIsBlur = output<boolean>();

  gradientBorder = input<boolean>(false);

  // Nuevos controles para la directiva MaxLengthTruncateDirective
  useTruncate = input<boolean>(false);
  truncateLength = input<number>(9);
  onlyNumbers = input<boolean>(true); // Para activar/desactivar la lógica

  isLetterOnly = input<boolean>(false);
  isLetterOnlyMaxChars = input<number>(50);
  isLetterOnlyMinChars = input<number>(2);


  customInputTextEnabled = input<boolean>(false);
  customInputTextMaxLength = input<number>(200);
  customInputTextMinLength = input<number>(5);

  textEmpresaEnabled = input<boolean>(false);
  textEmpresaMaxLength = input<number>(100);
  textEmpresaMinLength = input<number>(2);

  constructor() {
    effect(() => {
      const val = this.initializeInputValue(); // señal reactiva
      const input = this.cygnusInput();
      if (input) {
        input.nativeElement.value = val;
        input.nativeElement.textContent = val;
      }
    });

    effect(() => {
      if (!this.inputClearValue()) {
        const input = this.cygnusInput();
        if (input) {
          input.nativeElement.textContent = '';
          input.nativeElement.value = '';
        }
      }
    });
  }

  ngOnInit() {
    // Generar ID único si no se proporciona
    this.inputId.set(`cg-input-${++CygnusMenuPhoneInputComponent.idCounter}`);
  }

  ngAfterViewInit() {
    this.cygnusInput()!.nativeElement.value  = this.initializeInputValue();
    this.cygnusInput()!.nativeElement.textContent = this.initializeInputValue();
  }

  toggleInvisiblePhoneDrop() {
    this.isInvisiblePhoneDrop.set(!this.isInvisiblePhoneDrop()); // invisibilizar opciones
  }

  selectMenuPhoneDrop(selected: string, index: number) {
    this.menuSearchTextPhoneDrop.set(selected);
    this.isInvisiblePhoneDrop.set(true); // invisibilizar opciones
  }

  setInputIsBlur(value: string): void {
    this.setValue(value);
    this.inputIsBlur.emit(true);
  }

  setValue(value:string ) {
    this.control()?.setValue(value);
    this.control()?.markAsDirty();
    this.control()?.markAsTouched();
    this.inputValueOutput.emit(value);
  }

  inputGetSize():string {
    switch (this.inputSize()) {
      case 'lg':
        return this.TW_CLASS.INPUT_SIZE_LG;
      case 'sm':
        return this.TW_CLASS.INPUT_SIZE_SM;
      default:
        return '';
    }
  }

  inputGetColor():string {
    switch (this.inputColor()) {
      case 'success':
        return this.TW_CLASS.INPUT_SUCCESS;
      case 'warning':
        return this.TW_CLASS.INPUT_WARNING;
      case 'error':
        return this.TW_CLASS.INPUT_ERROR;
      default:
        return this.TW_CLASS.INPUT_GENERIC;
    }
  }

  inputGetTopColor():string {
    switch (this.inputColor()) {
      case 'success':
        return this.TW_CLASS.INPUT_TOP_SUCCESS;
      case 'warning':
        return this.TW_CLASS.INPUT_TOP_WARNING;
      case 'error':
        return this.TW_CLASS.INPUT_TOP_ERROR;
      default:
        return this.TW_CLASS.INPUT_TOP_GENERIC;
    }
  }

  hintGetColor():string {
    if (this.hintColor()) {
      switch (this.inputColor()) {
        case 'success':
          return this.TW_CLASS.HINT_SUCCESS;
        case 'warning':
          return this.TW_CLASS.HINT_WARNING;
        case 'error':
          return this.TW_CLASS.HINT_ERROR;
        default:
          return '';
      }
    }
    return '';
  }

}

