import { Component, input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
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
  styles: `
    .dropdown-content {
      overflow: hidden; /* Important for height animation */
    }
  `,
  animations: [
    trigger('slideInOut', [
      state('in', style({
        height: '*',
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('out', style({
        height: '0px',
        opacity: 0,
        transform: 'translateY(-100%)'
      })),
      transition('in => out', animate('300ms ease-out')),
      transition('out => in', animate('300ms ease-in'))
    ])
  ]
})
export class CygnusDropdownComponent {
  dropdownMenuTitle = input<string>('');
  dropdownItemType = input<DropdownItemType>('simple');
  dropdownRadioIconAsset = input<string>('');
  dropdownItemDataArr = input<DropdownItemData[]>([]);

  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
