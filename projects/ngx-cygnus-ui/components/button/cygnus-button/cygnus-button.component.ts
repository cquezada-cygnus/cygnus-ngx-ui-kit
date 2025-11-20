import { Component, effect, input, OnInit, signal, WritableSignal } from '@angular/core';
import { IconBtnColor, IconBtnSize } from 'ngx-cygnus-ui/types';
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

  typeButtonStructure = input<string>('button');
  btnTypes = input<string>('btn');
  btnAllClasses:WritableSignal<string> = signal<string>('');
  btnIconExist: boolean = false;
  btnIconOnly: boolean = false;
  btnIconColor = signal<IconBtnColor>('#ffffff');
  btnIconSize: IconBtnSize = '1.25rem';
  btnIconRouteRight = input<string>('');
  btnIconRouteLeft = input<string>('');
  btnIsLoading = input<boolean>(false);
  btnIconLoadingSize = input<IconLoadingSize>('size-4');
  btnIsDisabled = signal<boolean>(false);
  btnIconOutlined = signal<boolean>(false);

  constructor() {
    effect(() => { // actualizar color del botón cuando cambie this.btnTypes()
      this.btnIsDisabled.set(false);
      const setClasses = this.setBtnClasses(this.getBtnClasses(this.btnTypes()));
      this.btnAllClasses.set(setClasses);
    });
  }

  ngOnInit(){
    this.btnIconExist = false;
    this.btnIconOnly = false;
    this.btnIsDisabled.set(false);
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
    this.btnIconOnly = false;
    switch (customClass) {
      case 'btn':
        this.btnIconColor.set('#ffffff');
        return this.TW_CLASS.BTN_PRIMARY;
      case 'btn-primary':
        this.btnIconColor.set('#ffffff');
        return this.TW_CLASS.BTN_PRIMARY;
      case 'btn-secondary':
        this.btnIconColor.set('#1d2939');
        return this.TW_CLASS.BTN_SECONDARY;
      case 'btn-accent':
        this.btnIconColor.set('#2970ff');
        return this.TW_CLASS.BTN_ACCENT;
      case 'btn-gray':
        this.btnIconColor.set('#ffffff');
        return this.TW_CLASS.BTN_GRAY;
      case 'btn-full-gray':
        this.btnIconColor.set('#ffffff');
        return this.TW_CLASS.BTN_FULL_GRAY;
      case 'btn-success':
        this.btnIconColor.set('#ffffff');
        return this.TW_CLASS.BTN_GREEN;
      case 'btn-warning':
        this.btnIconColor.set('#ffffff');
        return this.TW_CLASS.BTN_AMBER;
      case 'btn-error':
        this.btnIconColor.set('#ffffff');
        return this.TW_CLASS.BTN_RED;
      case 'btn-sidebar':
        this.btnIconColor.set('#193cb8');
        return this.TW_CLASS.BTN_SIDEBAR;
      case 'btn-ghost':
        this.btnIconColor.set('#193cb8');
        return this.TW_CLASS.BTN_GHOST;
      case 'btn-ghost-gray':
        this.btnIconColor.set('#475467');
        return this.TW_CLASS.BTN_GHOST_GRAY;
      case 'btn-outlined':
        this.btnIconColor.set('#193cb8');
        this.btnIconOutlined.set(true);
        return this.TW_CLASS.BTN_OUTLINED;
      case 'btn-outlined-red':
        this.btnIconColor.set('#c10007');
        this.btnIconOutlined.set(true);
        return this.TW_CLASS.BTN_OUTLINED_RED;
      case 'btn-outlined-green':
        this.btnIconColor.set('#008236');
        this.btnIconOutlined.set(true);
        return this.TW_CLASS.BTN_OUTLINED_GREEN;
      case 'btn-outlined-amber':
        this.btnIconColor.set('#a65f00');
        this.btnIconOutlined.set(true);
        return this.TW_CLASS.BTN_OUTLINED_AMBER;
      case 'btn-outlined-gray':
        this.btnIconColor.set('#364153');
        this.btnIconOutlined.set(true);
        return this.TW_CLASS.BTN_OUTLINED_GRAY;
      case 'btn-disabled':
        this.btnIconColor.set('#193cb8');
        this.btnIsDisabled.set(true);
        return this.TW_CLASS.BTN_DISABLED;
      case 'btn-block':
        return this.TW_CLASS.BTN_BLOCK;
      case 'btn-circle':
        return this.TW_CLASS.BTN_CIRCLE;
      case 'btn-pagination-circle-size':
        return '!px-3 !py-2';
      case 'btn-pagination-size':
        return '!px-3 !py-1.5';
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
        return '';
      case 'btn-icon-sm':
        this.btnIconSize = '0.875rem';
        this.btnIconExist = true;
        return '';
      case 'btn-icon':
        this.btnIconSize = '1.25rem';
        this.btnIconExist = true;
        return '';
      case 'btn-icon-lg':
        this.btnIconSize = '1.25rem';
        this.btnIconExist = true;
        return '';
      case 'btn-icon-xl':
        this.btnIconSize = '1.5rem';
        this.btnIconExist = true;
        return '';
      case 'btn-icon-only':
        this.btnIconExist = true;
        this.btnIconOnly = true;
        this.btnIconSize = '1.5rem'; //  '1.25rem';
        return this.TW_CLASS.BTN_ICON_ONLY;
      case 'btn-icon-only-size-xs':
        this.btnIconExist = true;
        this.btnIconOnly = true;
        this.btnIconSize = '1.5rem'; //  '0.75rem';
        return this.TW_CLASS.BTN_ICON_ONLY_SIZE_XS;
      case 'btn-icon-only-size-sm':
        this.btnIconExist = true;
        this.btnIconOnly = true;
        this.btnIconSize = '1.5rem'; //  '0.875rem';
        return this.TW_CLASS.BTN_ICON_ONLY_SIZE_SM;
      case 'btn-icon-only-size-lg':
        this.btnIconExist = true;
        this.btnIconOnly = true;
        this.btnIconSize = '1.5rem'; // '1.25rem';
        return this.TW_CLASS.BTN_ICON_ONLY_SIZE_LG;
      case 'btn-icon-only-size-xl':
        this.btnIconExist = true;
        this.btnIconOnly = true;
        this.btnIconSize = '1.5rem';
        return this.TW_CLASS.BTN_ICON_ONLY_SIZE_XL;
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

  onMouseEnter() {
    if (this.btnIconOutlined()) {
      this.btnIconColor.set('#ffffff');
    }
  }

  onMouseLeave() {
    if (this.btnIconOutlined()) {
      this.btnIconColor.set('#193cb8');
    }
  }
}


