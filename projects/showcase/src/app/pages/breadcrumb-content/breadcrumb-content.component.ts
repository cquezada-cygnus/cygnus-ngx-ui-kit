import { Component } from '@angular/core';
import { CygnusBreadcrumbComponent } from 'ngx-cygnus-ui/components/breadcrumb';
import { BreadcrumbItem } from 'ngx-cygnus-ui/interfaces';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-breadcrumb-content',
  imports: [
    CygnusBreadcrumbComponent,
    Highlight, HighlightLineNumbers,
  ],
  templateUrl: './breadcrumb-content.component.html',
  styleUrl: './breadcrumb-content.component.scss'
})
export class BreadcrumbContentComponent {

  importCygnusBreadcrumb: string = `
    import { Component } from '@angular/core';
    import { CygnusBreadcrumbComponent } from 'ngx-cygnus-ui/components/breadcrumb';
    import { BreadcrumbItem } from 'ngx-cygnus-ui/interfaces';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusBreadcrumbComponent,
      ],
      templateUrl: './component.component.html',
    })
    export class BreadcrumbContentComponent {}
  `;

  breadcrumbItemExample: string = `
    ...
    export class BreadcrumbContentComponent {
      basicItemsArr: BreadcrumbItem[] = [
        {itemText: 'Inicio', iconAssetText: '', routerLinkText: './', },
        {itemText: 'Centro de aplicaciones', iconAssetText: '', routerLinkText: './', },
        {itemText: 'Aplicaciones', iconAssetText: '', routerLinkText: './', },
      ];
    }
  `;

  breadcrumbItemExampleIcono: string = `
    ...
    export class BreadcrumbContentComponent {
      basicItemsIconArr: BreadcrumbItem[] = [
        {itemText: '', iconAssetText: 'assets/icons/svg/General/home-02.svg', routerLinkText: './', },
        {itemText: 'Centro de aplicaciones', iconAssetText: '', routerLinkText: './', },
        {itemText: 'Aplicaciones', iconAssetText: '', routerLinkText: './', },
      ];
    }
  `;

  breadcrumbItemExampleBloque: string = `
    ...
    export class BreadcrumbContentComponent {
      basicItemsIconArr: BreadcrumbItem[] = [
        {itemText: '', iconAssetText: 'assets/icons/svg/General/home-02.svg', routerLinkText: './', },
        {itemText: 'Centro de aplicaciones', iconAssetText: '', routerLinkText: './', },
        {itemText: 'Aplicaciones', iconAssetText: '', routerLinkText: './', },
      ];
    }
  `;

  breadcrumbItemExampleStatic: string = `
    ...
    export class BreadcrumbContentComponent {
      basicItemsDropdownMenuArr: BreadcrumbItem[] = [
        {itemText: 'Inicio', iconAssetText: '', routerLinkText: './', notDropdownLeft: true },
        {itemText: 'Centro de aplicaciones', iconAssetText: '', routerLinkText: './', dropdownMenu: true },
        {itemText: 'Perritos', iconAssetText: '', routerLinkText: './', dropdownMenu: true  },
        {itemText: 'Gatitos', iconAssetText: '', routerLinkText: './', dropdownMenu: true  },
        {itemText: 'Marisopas', iconAssetText: '', routerLinkText: './', dropdownMenu: true  },
        {itemText: 'Aplicaciones', iconAssetText: '', routerLinkText: './', notDropdownRight: true },
      ];
    }
  `;

  breadcrumbItemInterface: string = `
    export interface BreadcrumbItem {
      routerLinkText?: string,
      iconAssetText?: string,
      itemText?: string,
      dropdownMenu?: boolean,
      notDropdownLeft?: boolean,
      notDropdownRight?: boolean,
    }
  `;

  htmlCygnusBreadcrumb: string = `
    <!-- COMPONENTE: Breadcrumb básico -->
    <cygnus-breadcrumb [itemsArr]="basicItemsArr" />
  `;

  htmlCygnusBreadcrumbIcono: string = `
    <!-- COMPONENTE: Breadcrumb con icono -->
    <cygnus-breadcrumb [itemsArr]="basicItemsIconArr" />
  `;

  htmlCygnusBreadcrumbBloque: string = `
    <!-- COMPONENTE: Breadcrumb a nivel de bloque -->
    <cygnus-breadcrumb [itemsArr]="basicItemsIconArr" [setBlock]="true" />
  `;

  htmlCygnusBreadcrumbStatic: string = `
    <!-- COMPONENTE: Breadcrumb con botón estático -->
    <cygnus-breadcrumb [itemsArr]="basicItemsDropdownMenuArr" [setMoreIcon]="true" />
  `;

  basicItemsArr: BreadcrumbItem[] = [
    {itemText: 'Inicio', iconAssetText: '', routerLinkText: './', },
    {itemText: 'Centro de aplicaciones', iconAssetText: '', routerLinkText: './', },
    {itemText: 'Aplicaciones', iconAssetText: '', routerLinkText: './', },
  ];

  basicItemsIconArr: BreadcrumbItem[] = [
    {itemText: '', iconAssetText: 'assets/icons/svg/General/home-02.svg', routerLinkText: './', },
    {itemText: 'Centro de aplicaciones', iconAssetText: '', routerLinkText: './', },
    {itemText: 'Aplicaciones', iconAssetText: '', routerLinkText: './', },
  ];

  basicItemsDropdownMenuArr: BreadcrumbItem[] = [
    {itemText: 'Inicio', iconAssetText: '', routerLinkText: './', notDropdownLeft: true },
    {itemText: 'Centro de aplicaciones', iconAssetText: '', routerLinkText: './', dropdownMenu: true },
    {itemText: 'Perritos', iconAssetText: '', routerLinkText: './', dropdownMenu: true  },
    {itemText: 'Gatitos', iconAssetText: '', routerLinkText: './', dropdownMenu: true  },
    {itemText: 'Marisopas', iconAssetText: '', routerLinkText: './', dropdownMenu: true  },
    {itemText: 'Aplicaciones', iconAssetText: '', routerLinkText: './', notDropdownRight: true },
  ];

}
