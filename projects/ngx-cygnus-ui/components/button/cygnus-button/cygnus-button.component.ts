import { Component, effect, input, OnInit, signal, WritableSignal } from '@angular/core';
import { IconBtnColor, IconBtnSize, IconPosition } from 'ngx-cygnus-ui/types';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { IconLoadingSize } from 'ngx-cygnus-ui/types';
import { TW_CLASS } from '../const/tailwind.const';

@Component({
  selector: 'cygnus-button',
  imports: [NgxCygnusIconsComponent],
  templateUrl: 'cygnus-button.component.html',
})
export class CygnusButtonComponent implements OnInit {
  TW_CLASS = TW_CLASS; // esto fue creado para reemplazar @apply de tailwind, ya la documentación de tailwind 4 recomienda no usar @apply y se dice que no funciona muy bien en angular.

  btnTypes = input<string>('btn');
  btnAllClasses:WritableSignal<string> = signal<string>('');
  btnIconExist: boolean = false;
  btnIconOnly: boolean = false;
  btnIconPosition = input<IconPosition>('left');
  btnIconColor: IconBtnColor = '#ffffff';
  btnIconSize: IconBtnSize = '1.25rem';
  btnIconRoute = input<string>('');
  btnIsLoading = input<boolean>(false);
  btnIconLoadingSize = input<IconLoadingSize>('size-5');
  btnIsDisabled: boolean = false;

  constructor() {
    effect(() => { // actualizar color del botón cuando cambie this.btnTypes()
      const setClasses = this.setBtnClasses(this.getBtnClasses(this.btnTypes()));
      this.btnAllClasses.set(setClasses);
    });
  }

  ngOnInit(){
    this.btnIconExist = false;
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
        return this.TW_CLASS.BTN_SIMPLE;
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
        return this.TW_CLASS.BTN_YELLOW;
      case 'btn-error':
        this.btnIconColor = '#ffffff';
        return this.TW_CLASS.BTN_RED;
      case 'btn-purple':
        this.btnIconColor = '#ffffff';
        return this.TW_CLASS.BTN_PURPLE;
      case 'btn-indigo':
        this.btnIconColor = '#ffffff';
        return this.TW_CLASS.BTN_INDIGO;
      case 'btn-pink':
        this.btnIconColor = '#ffffff';
        return this.TW_CLASS.BTN_PINK;
      case 'btn-ghost':
        this.btnIconColor = '#1d2939';
        return this.TW_CLASS.BTN_GHOST;
      case 'btn-outlined':
        this.btnIconColor = '#1d2939';
        return this.TW_CLASS.BTN_OUTLINED;
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
        this.btnIconExist = true;
        return this.TW_CLASS.BTN_ICON_XS;
      case 'btn-icon-sm':
        this.btnIconSize = '0.875rem';
        this.btnIconExist = true;
        return this.TW_CLASS.BTN_ICON_SM;
      case 'btn-icon':
        this.btnIconSize = '1rem';
        this.btnIconExist = true;
        return this.TW_CLASS.BTN_ICON;
      case 'btn-icon-lg':
        this.btnIconSize = '1.25rem';
        this.btnIconExist = true;
        return this.TW_CLASS.BTN_ICON_LG;
      case 'btn-icon-only':
        this.btnIconExist = true;
        this.btnIconOnly = true;
        return this.TW_CLASS.BTN_ICON_ONLY;
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


