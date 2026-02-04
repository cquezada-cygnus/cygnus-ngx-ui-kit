import { Component } from '@angular/core';
import {
  CygnusMenuSearchSelectComponent,
  CygnusSearchSelectComponent,
  CygnusCatSectionSearchSelectComponent,
} from 'ngx-cygnus-ui/components/search-select';
import {
  SelectCollectOptions,
  SelectGeneric
} from 'ngx-cygnus-ui/interfaces';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

import * as OPTGROUPDATA from '../../../json/postulaqui-categorias-secciones.json';


@Component({
  selector: 'app-select-search-content',
  imports: [
    CygnusSearchSelectComponent,
    CygnusMenuSearchSelectComponent,
    CygnusCatSectionSearchSelectComponent,
    Highlight, HighlightLineNumbers,
  ],
  templateUrl: './select-search-content.component.html',
  styleUrl: './select-search-content.component.scss'
})
export class SelectSearchContentComponent {

  // postulaqui-categorias-secciones.json
  OPTGROUPDATA = JSON.parse(JSON.stringify(OPTGROUPDATA)).default;

  menuSearchContentArr: SelectCollectOptions[] = [
    {key: 'Contratos', selects: [
      {option: 'Contrato 1', value: '0001'},
      {option: 'Contrato 2', value: '0002'},
      {option: 'Contrato 3', value: '0003'},
      {option: 'Contrato 4', value: '0004'},
    ] },
    {key: 'Reportes días', selects: [
      {option: 'Reporte 1', value: '0001'},
      {option: 'Reporte 2', value: '0002'},
      {option: 'Reporte 3', value: '0003'},
      {option: 'Reporte 4', value: '0004'},
    ] },
    {key: 'Liquidaciones', selects: [
      {option: 'Liquidación 1', value: '0001'},
      {option: 'Liquidación 2', value: '0002'},
      {option: 'Liquidación 3', value: '0003'},
      {option: 'Liquidación 4', value: '0004'},
    ] },
    {key: 'Vacaciones', selects: [
      {option: 'Vacaciones 1', value: '0001'},
      {option: 'Vacaciones 2', value: '0002'},
      {option: 'Vacaciones 3', value: '0003'},
      {option: 'Vacaciones 4', value: '0004'},
    ] },
  ];

  options: SelectGeneric[] = [
    {option: 'Contratos', value: '0001'},
    {option: 'Liquidaciones', value: '0002'},
    {option: 'Vacaciones', value: '0003'},
    {option: 'Reportes', value: '0004'},
  ];

  printSearch(event: any) {
    console.log('printSearch:', event);
  }

  customBlurEventTest(event: boolean) {
    console.log('customBlurEventTest ',event);
  }

  cygnusSearchSelImportTs: string = `
    import { Component } from '@angular/core';
    import {
      CygnusSearchSelectComponent
    } from 'ngx-cygnus-ui/components/search-select';
    import {
      SelectGeneric
    } from 'ngx-cygnus-ui/interfaces';


    @Component({
      selector: 'app-component',
      imports: [
        CygnusSearchSelectComponent,
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class AppComponentComponent {}
  `;

  cygnusSearchSelTs: string = `
    ...
    export class AppComponentComponent {
      options: SelectGeneric[] = [
        {option: 'Contratos', value: '0001'},
        {option: 'Liquidaciones', value: '0002'},
        {option: 'Vacaciones', value: '0003'},
        {option: 'Reportes', value: '0004'},
      ];

      printSearch(event: any) {
        console.log('printSearch:', event);
      }
    }
  `;

  cygnusSearchSelHtml: string = `
    <cygnus-search-select
      [items]="options"
      (outputSearch)="printSearch($event)"
    />
  `;

  cygnusSearchSelAutHtml: string = `
    <cygnus-search-select
      [items]="options"
      [showOptionsAutomatically]="true"
      (outputSearch)="printSearch($event)"
    />
  `;

  cygnusSearchMultisearchHtml: string = `
    <cygnus-search-select
      [items]="options"
      [showOptionsAutomatically]="true"
      (outputMultisearch)="printSearch($event)"
      [multisearch]="true"
    />
  `;

  cygnusMenuSearchSelImportTs: string = `
    import { Component } from '@angular/core';
    import {
      CygnusMenuSearchSelectComponent,
    } from 'ngx-cygnus-ui/components/search-select';
    import {
      SelectCollectOptions,
    } from 'ngx-cygnus-ui/interfaces';


    @Component({
      selector: 'app-component',
      imports: [
        CygnusMenuSearchSelectComponent,
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class AppComponentComponent {}
  `;

  cygnusMenuSearchSelTs: string = `
    ...
    export class AppComponentComponent {
      menuSearchContentArr: SelectCollectOptions[] = [
        {key: 'Contratos', selects: [
          {option: 'Contrato 1', value: '0001'},
          {option: 'Contrato 2', value: '0002'},
          {option: 'Contrato 3', value: '0003'},
          {option: 'Contrato 4', value: '0004'},
        ] },
        {key: 'Reportes días', selects: [
          {option: 'Reporte 1', value: '0001'},
          {option: 'Reporte 2', value: '0002'},
          {option: 'Reporte 3', value: '0003'},
          {option: 'Reporte 4', value: '0004'},
        ] },
        {key: 'Liquidaciones', selects: [
          {option: 'Liquidación 1', value: '0001'},
          {option: 'Liquidación 2', value: '0002'},
          {option: 'Liquidación 3', value: '0003'},
          {option: 'Liquidación 4', value: '0004'},
        ] },
        {key: 'Vacaciones', selects: [
          {option: 'Vacaciones 1', value: '0001'},
          {option: 'Vacaciones 2', value: '0002'},
          {option: 'Vacaciones 3', value: '0003'},
          {option: 'Vacaciones 4', value: '0004'},
        ] },
      ];

      printSearch(event: any) {
        console.log('printSearch:', event);
      }
    }
  `;

  cygnusMenuSearchSelHtml: string = `
    <cygnus-menu-search-select
      [menuSearchContentArr]="menuSearchContentArr"
      (outputSearch)="printSearch($event)"
    />
  `;

  cygnusMenuSearchSelAutHtml: string = `
    <cygnus-menu-search-select
      [menuSearchContentArr]="menuSearchContentArr"
      [showOptionsAutomatically]="true"
      (outputSearch)="printSearch($event)"
    />
  `;

  cygnusMultisearchHtml: string = `
    <cygnus-menu-search-select
      [menuSearchContentArr]="menuSearchContentArr"
      [showOptionsAutomatically]="true"
      (outputMultisearch)="printSearch($event)"
      [multisearch]="true"
    />
  `;

}
