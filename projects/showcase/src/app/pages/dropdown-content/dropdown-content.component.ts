import { Component } from '@angular/core';
import { CygnusDropdownComponent } from 'ngx-cygnus-ui/components/dropdown';
import { DropdownItemData } from 'ngx-cygnus-ui/interfaces';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-dropdown-content',
  imports: [
    CygnusDropdownComponent,
    Highlight, HighlightLineNumbers,
  ],
  templateUrl: './dropdown-content.component.html',
  styleUrl: './dropdown-content.component.scss'
})
export class DropdownContentComponent {
  dropdownSimpleItemDataArr: DropdownItemData[] = [
    {
      iconAssetText: '',
      routerLinkText: './',
      itemText: 'Elemento de menú 1'
    },
    {
      iconAssetText: '',
      routerLinkText: './',
      itemText: 'Elemento de menú 2'
    },
    {
      iconAssetText: '',
      routerLinkText: './',
      itemText: 'Elemento de menú 3'
    },
  ];

  dropdownRadiobuttonItemDataArr: DropdownItemData[] = [
    {
      iconAssetText: '',
      routerLinkText: './',
      itemText: 'Último día'
    },
    {
      iconAssetText: '',
      routerLinkText: './',
      itemText: 'Últimos 7 días'
    },
    {
      iconAssetText: '',
      routerLinkText: './',
      itemText: 'Últimos 15 días'
    },
    {
      iconAssetText: '',
      routerLinkText: './',
      itemText: 'Últimos 30 días'
    },
    {
      iconAssetText: '',
      routerLinkText: './',
      itemText: 'Último año'
    },
  ];

  dropdownIconTextItemDataArr: DropdownItemData[] = [
    {
      iconAssetText: 'assets/icons/svg/General/help-circle.svg',
      routerLinkText: './',
      itemText: 'Ayuda'
    },
    {
      iconAssetText: 'assets/icons/svg/Weather/moon-01.svg',
      routerLinkText: './',
      itemText: 'Modo oscuro'
    },
    {
      iconAssetText: 'assets/icons/svg/General/tool-02.svg',
      routerLinkText: './',
      itemText: 'Configuraciones'
    },
  ];

  dropdownImportTs: string = `
    import { Component } from '@angular/core';
    import { CygnusDropdownComponent } from 'ngx-cygnus-ui/components/dropdown';
    import { DropdownItemData } from 'ngx-cygnus-ui/interfaces';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusDropdownComponent,
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class AppComponentComponent {

      dropdownSimpleItemDataArr: DropdownItemData[] = [
        {
          iconAssetText: '',
          routerLinkText: './',
          itemText: 'Elemento de menú 1'
        },
        {
          iconAssetText: '',
          routerLinkText: './',
          itemText: 'Elemento de menú 2'
        },
        {
          iconAssetText: '',
          routerLinkText: './',
          itemText: 'Elemento de menú 3'
        },
      ];
    }
  `;

  dropdownIconoRadioTs: string = `
    import { Component } from '@angular/core';
    import { CygnusDropdownComponent } from 'ngx-cygnus-ui/components/dropdown';
    import { DropdownItemData } from 'ngx-cygnus-ui/interfaces';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusDropdownComponent,
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class AppComponentComponent {

      dropdownRadiobuttonItemDataArr: DropdownItemData[] = [
        {
          iconAssetText: '',
          routerLinkText: './',
          itemText: 'Último día'
        },
        {
          iconAssetText: '',
          routerLinkText: './',
          itemText: 'Últimos 7 días'
        },
        {
          iconAssetText: '',
          routerLinkText: './',
          itemText: 'Últimos 15 días'
        },
        {
          iconAssetText: '',
          routerLinkText: './',
          itemText: 'Últimos 30 días'
        },
        {
          iconAssetText: '',
          routerLinkText: './',
          itemText: 'Último año'
        },
      ];
    }
  `;

  dropdownIconTextTs: string = `
    import { Component } from '@angular/core';
    import { CygnusDropdownComponent } from 'ngx-cygnus-ui/components/dropdown';
    import { DropdownItemData } from 'ngx-cygnus-ui/interfaces';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusDropdownComponent,
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class AppComponentComponent {

      dropdownIconTextItemDataArr: DropdownItemData[] = [
        {
          iconAssetText: 'assets/icons/svg/General/help-circle.svg',
          routerLinkText: './',
          itemText: 'Ayuda'
        },
        {
          iconAssetText: 'assets/icons/svg/Weather/moon-01.svg',
          routerLinkText: './',
          itemText: 'Modo oscuro'
        },
        {
          iconAssetText: 'assets/icons/svg/General/tool-02.svg',
          routerLinkText: './',
          itemText: 'Configuraciones'
        },
      ];
    }
  `;

  dropdownHtml: string = `
    <!-- COMPONENTE: Dropdown simple -->
    <cygnus-dropdown
      [dropdownMenuTitle]="'Dropdown'"
      [dropdownItemType]="'simple'"
      [dropdownItemDataArr]="dropdownSimpleItemDataArr"
    />
  `;

  dropdownIconoRadioHtml: string = `
    <!-- COMPONENTE: Dropdown simple -->
    <cygnus-dropdown
      [dropdownMenuTitle]="'Dropdown'"
      [dropdownItemType]="'simple'"
      [dropdownItemDataArr]="dropdownSimpleItemDataArr"
    />
  `;

  dropdownIconTextHtml: string = `
    <!-- COMPONENTE: Dropdown de perfil -->
    <cygnus-dropdown
      [dropdownMenuTitle]="'JP'"
      [dropdownItemType]="'iconText'"
      [dropdownItemDataArr]="dropdownIconTextItemDataArr"
    />
  `

}
