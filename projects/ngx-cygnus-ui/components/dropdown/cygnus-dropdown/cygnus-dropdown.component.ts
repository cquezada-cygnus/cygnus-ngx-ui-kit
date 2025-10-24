import { Component, input } from '@angular/core';
import { TW_CLASS } from '../const/tailwind.const';
import { CygnusButtonComponent } from 'ngx-cygnus-ui/components/button';
import { DropdownItemType } from 'ngx-cygnus-ui/types';
import { DropdownItemData } from 'ngx-cygnus-ui/interfaces';
import { CygnusDrowpdownItemComponent } from '../cygnus-drowpdown-item/cygnus-drowpdown-item.component';

@Component({
  selector: 'cygnus-dropdown',
  imports: [
    CygnusButtonComponent,
    CygnusDrowpdownItemComponent,
  ],
  templateUrl: './cygnus-dropdown.component.html',
})
export class CygnusDropdownComponent {
  TW_CLASS = TW_CLASS;

  dropdownMenuTitle = input<string>('');
  dropdownItemType = input<DropdownItemType>('simple');
  dropdownRadioIconAsset = input<string>('');
  dropdownItemDataArr = input<DropdownItemData[]>([]);
}
