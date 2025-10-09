import { Component, input } from '@angular/core';
import { SelectGeneric } from 'ngx-cygnus-ui/interfaces';
import { TW_CLASS } from '../const/tailwind.const';

@Component({
  selector: 'cygnus-select',
  imports: [],
  templateUrl: './cygnus-select.component.html',
})
export class CygnusSelectComponent {
  TW_CLASS = TW_CLASS;

  options = input<SelectGeneric[]>();
  selSize = input<string>('');

  selGetSize():string {
    switch (this.selSize()) {
      case 'xs':
        return this.TW_CLASS.SELECT_XS;
      case 'md':
        return this.TW_CLASS.SELECT_MD;
      case 'lg':
        return this.TW_CLASS.SELECT_LG;
      default:
        return '';
    }
  }

}
