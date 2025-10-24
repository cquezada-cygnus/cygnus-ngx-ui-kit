import { Component, input, signal } from '@angular/core';
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
  dropdownMenuTitle = input<string>('');
  dropdownItemType = input<DropdownItemType>('simple');
  dropdownRadioIconAsset = input<string>('');
  dropdownItemDataArr = input<DropdownItemData[]>([]);
  dropdownClosed = signal<boolean>(true);

  toggleDropdown() {
    this.dropdownClosed.update( current => !current );
  }
}
