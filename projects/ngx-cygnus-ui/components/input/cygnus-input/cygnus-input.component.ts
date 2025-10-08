import { Component, input } from '@angular/core';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { InputColor, InputSize, InputCustomType } from 'ngx-cygnus-ui/types';
import { IconPosition, IconInputColor } from 'ngx-cygnus-ui/types';
import { TW_CLASS } from '../const/tailwind.const';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cygnus-input',
  imports: [NgxCygnusIconsComponent],
  templateUrl: './cygnus-input.component.html',
})
export class CygnusInputComponent {
  TW_CLASS = TW_CLASS; // esto fue creado para reemplazar @apply de tailwind, ya la documentación de tailwind 4 recomienda no usar @apply y se dice que no funciona muy bien en angular.

  control = input<FormControl<string>>();

  inputId = input<string>('cg-floating-inset');
  inputCustomType = input<InputCustomType>('base');
  inputColor = input<InputColor>('base');
  inputSize = input<InputSize>('');
  iconAsset = input<string>('');
  iconPosition = input<IconPosition>('right');
  iconColor = input<IconInputColor>('#101828');
  iconSize = input<string>('19px');
  pseudoIconCLPPhone = input<boolean>(false);
  hintColor = input<boolean>(false);
  textLabel = input<string>('');
  textHint = input<string>('');
  textPlaceholder = input<string>(' ');
  inputDisabled = input<boolean>(false);

  setValue(value:string ) {
    this.control()?.setValue(value);
    this.control()?.markAsDirty();
    this.control()?.markAsTouched();
  }

  resetValue() {
    this.control()?.reset();
    this.control()?.updateValueAndValidity();
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
    if (this,this.inputCustomType()==='label-interactive') return this.labelInteractiveGetColor();
    return '';
  }

  labelGetType():string {
    if (this.inputCustomType()==='fieldset-legend-label') return this.TW_CLASS.FIELDSET_LEGEND;
    if (this.inputCustomType()==='label-interactive') return this.TW_CLASS.LABEL_INTERACTIVE_BASE;
    if (this.inputCustomType()==='floating') return (this.TW_CLASS.LABEL_BASE + ' ' + this.TW_CLASS.LABEL_FLOATING_BASE);
    return '';
  }




}
