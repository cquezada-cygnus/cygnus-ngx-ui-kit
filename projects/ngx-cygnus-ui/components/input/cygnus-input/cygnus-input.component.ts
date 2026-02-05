import { AfterViewInit, Component, effect, ElementRef, input, OnInit, output, signal, viewChild } from '@angular/core';
import { IconColorText, IconTextSize, NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { InputColor, InputSize, InputCustomType } from 'ngx-cygnus-ui/types';
import { IconPosition } from 'ngx-cygnus-ui/types';
import { TW_CLASS } from '../const/tailwind.const';
import { FormControl } from '@angular/forms';
import { RutFormatDirective } from 'ngx-cygnus-ui/directives';

@Component({
  selector: 'cygnus-input',
  imports: [
    NgxCygnusIconsComponent,
    RutFormatDirective,
  ],
  templateUrl: './cygnus-input.component.html',
})
export class CygnusInputComponent implements OnInit, AfterViewInit {
  private static idCounter = 0;

  TW_CLASS = TW_CLASS; // esto fue creado para reemplazar @apply de tailwind, ya la documentación de tailwind 4 recomienda no usar @apply y se dice que no funciona muy bien en angular.

  control = input<FormControl<string>>();
  isRutFormatActive = input<boolean>(false);
  useRutDots = input<boolean>(false);

  inputId = signal<string>('');
  inputCustomType = input<InputCustomType>('base');
  inputColor = input<InputColor>('base');
  inputSize = input<InputSize>('');
  iconAsset = input<string>('');
  iconState = input<boolean>(false); // true para identificar el estilo del input cuando es ícono de success/warning/error
  iconPosition = input<IconPosition>('right');
  iconColor = input<IconColorText>('black');
  iconSize = input<IconTextSize>('lg');
  pseudoIconCLPPhone = input<boolean>(false);
  hintColor = input<boolean>(false);
  textLabel = input<string>('');
  textHint = input<string>('');
  textPlaceholder = input<string>(' ');
  inputDisabled = input<boolean>(false);
  typePassword = input<boolean>(false);
  inputClearValue = input<boolean>(false);

  cygnusInput = viewChild<ElementRef>('cygnusInput');
  iconClicked = output<string>();

  initializeInputValue = input<string>('');
  inputValueOutput = output<string>();

  constructor() {
    effect(() => { // limpiar input si se solicita
      if (!this.inputClearValue()) {
        this.cygnusInput()!.nativeElement.textContent = '';
        this.cygnusInput()!.nativeElement.value = '';
      }
    });
  }

  ngOnInit() {
    // Generar ID único si no se proporciona
    this.inputId.set(`cg-input-${++CygnusInputComponent.idCounter}`);
  }

  ngAfterViewInit() {
    this.cygnusInput()!.nativeElement.value  = this.initializeInputValue();
    this.cygnusInput()!.nativeElement.textContent = this.initializeInputValue();
  }

  notifyIconClicked(): void {
    this.iconClicked.emit('iconClicked');
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

  inputGetInteractiveColor():string {
    if (this.inputCustomType()==='label-interactive') {
      switch (this.inputColor()) {
        case 'success':
          return (this.TW_CLASS.INPUT_INTERACTIVE_BASE + ' ' + this.TW_CLASS.INPUT_INTERACTIVE_SUCCESS);
        case 'warning':
          return (this.TW_CLASS.INPUT_INTERACTIVE_BASE + ' ' + this.TW_CLASS.INPUT_INTERACTIVE_WARNING);
        case 'error':
          return (this.TW_CLASS.INPUT_INTERACTIVE_BASE + ' ' + this.TW_CLASS.INPUT_INTERACTIVE_ERROR);
        default:
          return (this.TW_CLASS.INPUT_INTERACTIVE_BASE + ' ' + this.TW_CLASS.INPUT_INTERACTIVE_GENERIC);
      }
    } else return '';
  }

  labelFloatingGetColor():string {
    switch (this.inputColor()) {
      case 'success':
        return this.TW_CLASS.LABEL_FLOATING_SUCCESS;
      case 'warning':
        return this.TW_CLASS.LABEL_FLOATING_WARNING;
      case 'error':
        return this.TW_CLASS.LABEL_FLOATING_ERROR;
      default:
        return '';
    }
  }

  labelTopGetColor():string {
    switch (this.inputColor()) {
      case 'success':
        return this.TW_CLASS.LABEL_TOP_SUCCESS;
      case 'warning':
        return this.TW_CLASS.LABEL_TOP_WARNING;
      case 'error':
        return this.TW_CLASS.LABEL_TOP_ERROR;
      default:
        return this.TW_CLASS.LABEL_TOP_BASE;
    }
  }

  labelInteractiveGetColor():string {
    switch (this.inputColor()) {
      case 'success':
        return this.TW_CLASS.LABEL_INTERACTIVE_COLOR_SUCCESS;
      case 'warning':
        return this.TW_CLASS.LABEL_INTERACTIVE_COLOR_WARNING;
      case 'error':
        return this.TW_CLASS.LABEL_INTERACTIVE_COLOR_ERROR;
      default:
        return this.TW_CLASS.LABEL_INTERACTIVE_COLOR_BASE;
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

  labelColorGetType() {
    if (this.inputCustomType()==='floating') return this.labelFloatingGetColor();
    if (this.inputCustomType()==='label-top') return this.labelTopGetColor();
    if (this.inputCustomType()==='label-interactive') return this.labelInteractiveGetColor();
    return '';
  }

  labelGetType():string {
    if (this.inputCustomType()==='fieldset-legend-label') return this.TW_CLASS.FIELDSET_LEGEND;
    if (this.inputCustomType()==='label-top') return this.TW_CLASS.LABEL_TOP_BASE;
    if (this.inputCustomType()==='label-interactive') return this.TW_CLASS.LABEL_INTERACTIVE_BASE;
    if (this.inputCustomType()==='floating') return (this.TW_CLASS.LABEL_BASE + ' ' + this.TW_CLASS.LABEL_FLOATING_BASE);
    return '';
  }

}
