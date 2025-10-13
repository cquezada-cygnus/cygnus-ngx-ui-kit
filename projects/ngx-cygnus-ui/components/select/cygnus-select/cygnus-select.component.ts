import { Component, input } from '@angular/core';
import { SelectGeneric } from 'ngx-cygnus-ui/interfaces';
import { TW_CLASS } from '../const/tailwind.const';

@Component({
  selector: 'cygnus-select',
  imports: [],
  templateUrl: './cygnus-select.component.html',
  styles: `select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23667085' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
    -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
  }`
})
export class CygnusSelectComponent {
  TW_CLASS = TW_CLASS;

  options = input<SelectGeneric[]>();
  selSize = input<string>('');

  selGetSize():string {
    switch (this.selSize()) {
      case 'xs':
        return this.TW_CLASS.SELECT_XS;
      case 'lg':
        return this.TW_CLASS.SELECT_LG;
      default:
        return '';
    }
  }

}
