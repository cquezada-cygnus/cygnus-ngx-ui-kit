import { Component } from '@angular/core';
import { CygnusListComponent } from 'ngx-cygnus-ui/components/list';
import { ListElem } from 'ngx-cygnus-ui/interfaces';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-list-content',
  imports: [
    CygnusListComponent,
    Highlight, HighlightLineNumbers,
  ],
  templateUrl: './list-content.component.html',
  styleUrl: './list-content.component.scss'
})
export class ListContentComponent {
  listArr: ListElem[] = [
    {title: 'Perfil', linkText: './', value: '' },
    {title: 'Ajustes', linkText: './', value: '' },
    {title: 'Hoja informativa', linkText: './', value: '' },
  ];

  listIconArr: ListElem[] = [
    {title: 'Hoja informativa', linkText: './', value: '', iconAsset: 'assets/icons/svg/Alerts&Feedback/bell-01.svg' },
    {title: 'Descargas', linkText: './', value: '', iconAsset: 'assets/icons/svg/General/download-cloud-02.svg' },
    {title: 'Cuenta de equipo', linkText: './', value: '', iconAsset: 'assets/icons/svg/Users/users-01.svg' },
  ];

  listBadgeArr: ListElem[] = [
    {title: 'Perfil', linkText: './', value: '', badgeContent: 'Nuevo' },
    {title: 'Ajustes', linkText: './', value: '', badgeContent: '9' },
    {title: 'Hoja informativa', linkText: './', value: '', badgeContent: '+99' },
  ];

  cygnusListImportTs: string = `
    import { Component } from '@angular/core';
    import { CygnusListComponent } from 'ngx-cygnus-ui/components/list';
    import { ListElem } from 'ngx-cygnus-ui/interfaces';

    @Component({
      selector: 'app-list-component',
      imports: [
        CygnusListComponent,
      ],
      templateUrl: './app-list-component.component.html',
      styleUrl: './app-list-component.component.scss'
    })
    export class AppListComponentComponent {
      listArr: ListElem[] = [
        {title: 'Perfil', linkText: './', value: '' },
        {title: 'Ajustes', linkText: './', value: '' },
        {title: 'Hoja informativa', linkText: './', value: '' },
      ];
    }
  `;

  cygnusListIconsTs: string = `
    ...
    export class AppListComponentComponent {
      listIconArr: ListElem[] = [
        {title: 'Hoja informativa', linkText: './', value: '', iconAsset: 'assets/icons/svg/Alerts&Feedback/bell-01.svg' },
        {title: 'Descargas', linkText: './', value: '', iconAsset: 'assets/icons/svg/General/download-cloud-02.svg' },
        {title: 'Cuenta de equipo', linkText: './', value: '', iconAsset: 'assets/icons/svg/Users/users-01.svg' },
      ];
    }
  `;

  cygnusListBadgesTs: string = `
    ...
    export class AppListComponentComponent {
      listBadgeArr: ListElem[] = [
        {title: 'Perfil', linkText: './', value: '', badgeContent: 'Nuevo' },
        {title: 'Ajustes', linkText: './', value: '', badgeContent: '9' },
        {title: 'Hoja informativa', linkText: './', value: '', badgeContent: '+99' },
      ];
    }
  `;

  interfazListElemTs: string = `
    export interface ListElem {
      title: string,
      value?: any,
      linkText?: string,
      iconAsset?: string,
      badgeContent?: string,
    }
  `;

  cygnusListHtml: string = `
    <cygnus-list [itemsArr]="listArr" />
  `;

  cygnusListIconsHtml: string = `
    <cygnus-list [itemsArr]="listIconArr" />
  `;

  cygnusListBadgesHtml: string = `
    <cygnus-list [itemsArr]="listBadgeArr" />
  `;

}
