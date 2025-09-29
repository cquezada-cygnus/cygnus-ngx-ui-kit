import { Component, input } from '@angular/core';
// import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';

@Component({
  selector: 'cygnus-button',
  imports: [],
  template: `
      <button [class]="addTailwindClasses()" type="button">
          <ng-content></ng-content>
      </button>
  `,
  styleUrls: ['cygnus-button.component.css'],
})
export class CygnusButtonComponent {
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
  BTN_CIRCLE: string = '!p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 rounded-full text-white disabled:pointer-events-none';
  BTN_GHOST: string = 'text-gray-800 bg-transparent shadow-none hover:bg-gray-200 focus:ring-gray-300 focus:border-gray-800 transition-all border-0 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none';
  BTN_DISABLED: string = 'text-white bg-primary-400 cursor-not-allowed font-medium rounded-lg text-center';

  btnType = input<string>('btn');

  addTailwindClasses(): string {
    switch (this.btnType()) {
      case 'btn':
        return this.BTN + ' ' + this.BTN_SIMPLE;
      case 'btn-primary':
        return this.BTN + ' ' + this.BTN_PRIMARY;
      case 'btn-secondary':
        return this.BTN + ' ' + this.BTN_SECONDARY;
      case 'btn-accent':
        return this.BTN + ' ' + this.BTN_ACCENT;
      case 'btn-success':
        return this.BTN + ' ' + this.BTN_SUCCESS;
      case 'btn-warning':
        return this.BTN + ' ' + this.BTN_WARNING;
      case 'btn-error':
        return this.BTN + ' ' + this.BTN_ERROR;
      case 'btn-purple':
        return this.BTN + ' ' + this.BTN_PURPLE;
      case 'btn-indigo':
        return this.BTN + ' ' + this.BTN_INDIGO;
      case 'btn-pink':
        return this.BTN + ' ' + this.BTN_PINK;
      case 'btn-circle':
        return this.BTN + ' ' + this.BTN_CIRCLE;
      case 'btn-ghost':
        return this.BTN + ' ' + this.BTN_GHOST;
      case 'btn-disabled':
        return this.BTN + ' ' + this.BTN_DISABLED;
      default:
        return '';
    }


  }
}


