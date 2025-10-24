import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { CygnusRadioButtonComponent } from 'ngx-cygnus-ui/components/radio-button';
import { DropdownItemData } from 'ngx-cygnus-ui/interfaces';
import { DropdownItemType } from 'ngx-cygnus-ui/types';

@Component({
  selector: 'cygnus-drowpdown-item',
  imports: [
    RouterLink,
    NgxCygnusIconsComponent,
    CygnusRadioButtonComponent,
  ],
  templateUrl: './cygnus-drowpdown-item.component.html',
})
export class CygnusDrowpdownItemComponent {
  dropdownItemType = input<DropdownItemType>('simple');
  itemContent = input<DropdownItemData>();

}
