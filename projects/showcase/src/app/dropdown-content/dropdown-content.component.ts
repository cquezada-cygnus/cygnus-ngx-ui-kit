import { Component } from '@angular/core';
import { CygnusDropdownComponent } from 'ngx-cygnus-ui/components/dropdown';
import { DropdownItemData } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'app-dropdown-content',
  imports: [
    CygnusDropdownComponent
  ],
  templateUrl: './dropdown-content.component.html',
  styleUrl: './dropdown-content.component.scss'
})
export class DropdownContentComponent {
  dropdownSimpleItemDataArr: DropdownItemData[] = [
    {
      iconAssetText: '',
      routerLinkText: '',
      itemText: 'Elemento de menú 1'
    },
    {
      iconAssetText: '',
      routerLinkText: '',
      itemText: 'Elemento de menú 2'
    },
    {
      iconAssetText: '',
      routerLinkText: '',
      itemText: 'Elemento de menú 3'
    },
  ];

}
