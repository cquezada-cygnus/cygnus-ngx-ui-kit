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

}
