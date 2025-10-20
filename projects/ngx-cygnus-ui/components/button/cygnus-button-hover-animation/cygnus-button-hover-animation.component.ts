import { Component, effect, input, OnInit, signal } from '@angular/core';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { BtnAnimationOption, IconBtnColor, IconBtnSize, IconPosition } from 'ngx-cygnus-ui/types';
import { TW_CLASS } from '../const/tailwind.const';

@Component({
  selector: 'cygnus-button-hover-animation',
  imports: [NgxCygnusIconsComponent],
  templateUrl: './cygnus-button-hover-animation.component.html',
})
export class CygnusButtonHoverAnimationComponent implements OnInit {
  TW_CLASS = TW_CLASS; // esto fue creado para reemplazar @apply de tailwind, ya la documentación de tailwind 4 recomienda no usar @apply y se dice que no funciona muy bien en angular.
  btnTypes = input<string>('btn');
  btnAllClasses = signal<string>('');
  btnIconOnly: boolean = false;
  btnIconColor: IconBtnColor = '#ffffff';
  btnIconSize: IconBtnSize = '1.25rem';
  btnAnimationOption = input<BtnAnimationOption>('A');
  btnIsDisabled: boolean = false;

  constructor() {
    effect(() => { // actualizar color del botón cuando cambie this.btnTypes()
      const setClasses = this.setBtnClasses(this.getBtnClasses(this.btnTypes()));
      this.btnAllClasses.set(setClasses);
    });
  }

  ngOnInit(){
    this.btnIconOnly = false;
    const setClasses = this.setBtnClasses(this.getBtnClasses(this.btnTypes()));
    this.btnAllClasses.set(setClasses);
  }

  getBtnClasses(stringClasses: string): string[] {
    return stringClasses.split(' ');
  }

  setBtnClasses(arrStringClasses: string[]): string {
    let stringClasses = this.TW_CLASS.BTN + ' ';
    for (let i = 0; i < arrStringClasses.length; i++) {
      const elem = arrStringClasses[i];
      stringClasses = stringClasses + (this.addTailwindClasses(elem) + ' ');
    }
    return stringClasses;
  }

  addTailwindClasses(customClass: string): string {
    this.btnIsDisabled = false;
    this.btnIconOnly = false;
    switch (customClass) {
      case 'btn':
        this.btnIconColor = '#ffffff';
        return this.TW_CLASS.BTN_PRIMARY;
      case 'btn-primary':
        this.btnIconColor = '#ffffff';
        return this.TW_CLASS.BTN_PRIMARY;
      case 'btn-secondary':
        this.btnIconColor = '#1d2939';
        return this.TW_CLASS.BTN_SECONDARY;
      case 'btn-accent':
        this.btnIconColor = '#2970ff';
        return this.TW_CLASS.BTN_ACCENT;
      case 'btn-success':
        this.btnIconColor = '#ffffff';
        return this.TW_CLASS.BTN_GREEN;
      case 'btn-warning':
        this.btnIconColor = '#ffffff';
        return this.TW_CLASS.BTN_AMBER;
      case 'btn-error':
        this.btnIconColor = '#ffffff';
        return this.TW_CLASS.BTN_RED;
      case 'btn-ghost':
        this.btnIconColor = '#1d2939';
        return this.TW_CLASS.BTN_GHOST;
      case 'btn-disabled':
        this.btnIconColor = '#ffffff';
        this.btnIsDisabled = true;
        return this.TW_CLASS.BTN_DISABLED;
      case 'btn-block':
        return this.TW_CLASS.BTN_BLOCK;
      case 'btn-circle':
        return this.TW_CLASS.BTN_CIRCLE;
      case 'btn-size-xs':
        return this.TW_CLASS.BTN_SIZE_XS;
      case 'btn-size-sm':
        return this.TW_CLASS.BTN_SIZE_SM;
      case 'btn-size-lg':
        return this.TW_CLASS.BTN_SIZE_LG;
      case 'btn-size-xl':
        return this.TW_CLASS.BTN_SIZE_XL;
      case 'btn-icon-xs':
        this.btnIconSize = '0.75rem';
        return '';
      case 'btn-icon-sm':
        this.btnIconSize = '0.875rem';
        return '';
      case 'btn-icon':
        this.btnIconSize = '1rem';
        return '';
      case 'btn-icon-lg':
        this.btnIconSize = '1.25rem';
        return '';
      case 'btn-icon-only':
        this.btnIconOnly = true;
        return '';
      case 'btn-group-left':
        return this.TW_CLASS.BTN_GROUP_LEFT;
      case 'btn-group-middle':
        return this.TW_CLASS.BTN_GROUP_MIDDLE;
      case 'btn-group-right':
        return this.TW_CLASS.BTN_GROUP_RIGHT;
      default:
        return '';
    }
  }

}
