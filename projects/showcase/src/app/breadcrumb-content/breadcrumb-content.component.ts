import { Component } from '@angular/core';
import { CygnusBreadcrumbComponent } from 'ngx-cygnus-ui/components/breadcrumb';
import { BreadcrumbItem } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'app-breadcrumb-content',
  imports: [
    CygnusBreadcrumbComponent
  ],
  templateUrl: './breadcrumb-content.component.html',
  styleUrl: './breadcrumb-content.component.scss'
})
export class BreadcrumbContentComponent {

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
