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

  dropdownRadiobuttonItemDataArr: DropdownItemData[] = [
    {
      iconAssetText: '',
      routerLinkText: '',
      itemText: 'Último día'
    },
    {
      iconAssetText: '',
      routerLinkText: '',
      itemText: 'Últimos 7 días'
    },
    {
      iconAssetText: '',
      routerLinkText: '',
      itemText: 'Últimos 15 días'
    },
    {
      iconAssetText: '',
      routerLinkText: '',
      itemText: 'Últimos 30 días'
    },
    {
      iconAssetText: '',
      routerLinkText: '',
      itemText: 'Último año'
    },
  ];

  dropdownIconTextItemDataArr: DropdownItemData[] = [
    {
      iconAssetText: 'assets/icons/svg/General/help-circle.svg',
      routerLinkText: '',
      itemText: 'Ayuda'
    },
    {
      iconAssetText: 'assets/icons/svg/Weather/moon-01.svg',
      routerLinkText: '',
      itemText: 'Modo oscuro'
    },
    {
      iconAssetText: 'assets/icons/svg/General/tool-02.svg',
      routerLinkText: '',
      itemText: 'Configuraciones'
    },
  ];

}
