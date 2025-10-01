import { Component, input, OnInit, signal, WritableSignal } from '@angular/core';
import { IconBtnColor, IconBtnSize, IconPosition } from 'ngx-cygnus-ui/types';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { IconLoadingSize } from 'ngx-cygnus-ui/types';

@Component({
  selector: 'cygnus-button',
  imports: [NgxCygnusIconsComponent],
  templateUrl: 'cygnus-button.component.html',
})
export class CygnusButtonComponent implements OnInit { // esto fue creado para reemplazar @apply de tailwind, ya la documentación de tailwind 4 recomienda no usar @apply y se dice que no funciona muy bien en angular.
  BTN: string = 'btn text-sm px-5 py-2.5 rounded-lg font-medium focus:ring-4 focus:outline-none';
  BTN_SIMPLE: string = 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-300';
  BTN_PRIMARY: string = 'text-white bg-primary-700 border border-none hover:bg-primary-600 hover:text-white focus:ring-primary-300 active:bg-primary-700';
  BTN_SECONDARY: string = 'flex items-center justify-center border text-gray-800 border-gray-300 bg-gray-25 hover:bg-gray-100 hover:text-primary-700 hover:border-gray-300 focus:ring-gray-300 active:bg-gray-100 active:text-white';
  BTN_ACCENT: string = 'flex items-center justify-center text-primary-500 border border-primary-100 bg-primary-50 hover:bg-primary-100 focus:bg-primary-100 active:bg-primary-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none';
  BTN_SUCCESS: string = 'flex items-center justify-center transition-all border text-white bg-success-600 hover:bg-success-700 focus:bg-success-600 focus:ring-success-200 active:bg-success-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none';
  BTN_WARNING: string = 'flex items-center justify-center transition-all border border-warning-500 text-white bg-warning-500 hover:bg-warning-600 focus:bg-warning-700 focus:ring-warning-200 active:bg-warning-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none';
  BTN_ERROR: string = 'flex items-center justify-center transition-all border border-error-500 text-white bg-error-700 hover:bg-error-600 focus:bg-error-700 focus:ring-error-200 active:bg-error-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none';
  BTN_PURPLE: string = 'flex items-center justify-center transition-all border border-purple-500 text-white bg-purple-500 hover:bg-purple-600 focus:bg-purple-700 focus:ring-purple-200 active:bg-purple-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none';
  BTN_INDIGO: string = 'flex items-center justify-center transition-all border border-indigo-500 text-white bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 focus:ring-indigo-200 active:bg-indigo-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none';
  BTN_PINK: string = 'flex items-center justify-center transition-all border border-pink-500 text-white bg-pink-500 hover:bg-pink-600 focus:bg-pink-700 focus:ring-pink-200 active:bg-pink-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none';
  BTN_CIRCLE: string = '!p-2.5 !rounded-full min-w-[40px] inline-flex justify-center items-center gap-x-2 disabled:pointer-events-none';
  BTN_GHOST: string = 'text-gray-800 bg-transparent shadow-none hover:bg-gray-200 focus:ring-gray-300 focus:border-gray-800 transition-all border-0 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none';
  BTN_DISABLED: string = 'text-white bg-primary-400 cursor-not-allowed font-medium rounded-lg text-center';
  BTN_BLOCK: string = 'w-full';
  BTN_SIZE_XS: string = '!py-2 !px-3 !text-xs';
  BTN_SIZE_SM: string = '!py-2 !px-3 !text-sm';
  BTN_SIZE_LG: string = '!px-5 !py-3 !text-base';
  BTN_SIZE_XL: string = '!px-5 !py-3.5 !text-base';
  BTN_ICON_XS: string = 'p-2 flex items-center';
  BTN_ICON_SM: string = 'p-2 flex items-center';
  BTN_ICON: string = 'inline-flex items-center justify-between';
  BTN_ICON_LG: string = 'p-4 flex items-center';
  BTN_ICON_ONLY: string = '!p-2.5 flex items-center transition-all disabled:pointer-events-none disabled:opacity-50 border-0';
  BTN_ICON_LOADING: string = 'animate-spin inline-block border-3 border-t-transparent rounded-full';
  BTN_GROUP_LEFT: string = 'px-4 py-2 text-sm text-center transition-all border border-r-0 rounded-md rounded-r-none shadow-sm border-gray-300 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none';
  BTN_GROUP_MIDDLE: string = 'px-4 py-2 text-sm text-center transition-all border rounded-md rounded-l-none rounded-r-none shadow-sm border-gray-300 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none';
  BTN_GROUP_RIGHT: string = 'px-4 py-2 text-sm text-center transition-all border border-l-0 rounded-md rounded-l-none shadow-sm border-gray-300 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none';

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
    let stringClasses = this.BTN + ' ';
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
        this.btnIconColor = '#ffffff';
        return this.BTN_SIMPLE;
      case 'btn-primary':
        this.btnIconColor = '#ffffff';
        return this.BTN_PRIMARY;
      case 'btn-secondary':
        this.btnIconColor = '#1d2939';
        return this.BTN_SECONDARY;
      case 'btn-accent':
        this.btnIconColor = '#2970ff';
        return this.BTN_ACCENT;
      case 'btn-success':
        this.btnIconColor = '#ffffff';
        return this.BTN_SUCCESS;
      case 'btn-warning':
        this.btnIconColor = '#ffffff';
        return this.BTN_WARNING;
      case 'btn-error':
        this.btnIconColor = '#ffffff';
        return this.BTN_ERROR;
      case 'btn-purple':
        this.btnIconColor = '#ffffff';
        return this.BTN_PURPLE;
      case 'btn-indigo':
        this.btnIconColor = '#ffffff';
        return this.BTN_INDIGO;
      case 'btn-pink':
        this.btnIconColor = '#ffffff';
        return this.BTN_PINK;
      case 'btn-ghost':
        this.btnIconColor = '#1d2939';
        return this.BTN_GHOST;
      case 'btn-disabled':
        this.btnIconColor = '#ffffff';
        return this.BTN_DISABLED;
      case 'btn-block':
        return this.BTN_BLOCK;
      case 'btn-circle':
        return this.BTN_CIRCLE;
      case 'btn-size-xs':
        return this.BTN_SIZE_XS;
      case 'btn-size-sm':
        return this.BTN_SIZE_SM;
      case 'btn-size-lg':
        return this.BTN_SIZE_LG;
      case 'btn-size-xl':
        return this.BTN_SIZE_XL;
      case 'btn-icon-xs':
        this.btnIconSize = '0.75rem';
        this.btnIconExist = true;
        return this.BTN_ICON_XS;
      case 'btn-icon-sm':
        this.btnIconSize = '0.875rem';
        this.btnIconExist = true;
        return this.BTN_ICON_SM;
      case 'btn-icon':
        this.btnIconSize = '1rem';
        this.btnIconExist = true;
        return this.BTN_ICON;
      case 'btn-icon-lg':
        this.btnIconSize = '1.25rem';
        this.btnIconExist = true;
        return this.BTN_ICON_LG;
      case 'btn-icon-only':
        this.btnIconExist = true;
        this.btnIconOnly = true;
        return this.BTN_ICON_ONLY;
      case 'btn-group-left':
        return this.BTN_GROUP_LEFT;
      case 'btn-group-middle':
        return this.BTN_GROUP_MIDDLE;
      case 'btn-group-right':
        return this.BTN_GROUP_RIGHT;
      default:
        return '';
    }
  }
}


