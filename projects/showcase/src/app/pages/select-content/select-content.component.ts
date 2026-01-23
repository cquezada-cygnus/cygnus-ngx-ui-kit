import { Component } from '@angular/core';
import { CygnusOptgroupSelectComponent, CygnusSelectComponent } from 'ngx-cygnus-ui/components/select';
import { SelectGeneric } from 'ngx-cygnus-ui/interfaces';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

import * as OPTGROUPDATA from '../../../json/postulaqui-categorias-secciones.json';

@Component({
  selector: 'app-select-content',
  imports: [
    CygnusSelectComponent,
    CygnusOptgroupSelectComponent,
    Highlight, HighlightLineNumbers,
  ],
  templateUrl: './select-content.component.html',
  styleUrl: './select-content.component.scss'
})
export class SelectContentComponent {
  options: SelectGeneric[] = [
    {option: 'Valor 1', value: '0001'},
    {option: 'Valor 2', value: '0002'},
    {option: 'Valor 3', value: '0003'},
    {option: 'Valor 4', value: '0004'},
    {option: 'Valor 5', value: '0005'},
    {option: 'Valor 6', value: '0006'},
    {option: 'Valor 7', value: '0007'},
  ];

  optionsTestAutoWidth: SelectGeneric[] = [
    {option: 'Tengo un problema técnico', value:'brazil'},
    {option: 'Tengo un problema con una plataforma', value:'bucharest'},
    {option: 'Tengo un problema de red', value:'london'},
    {option: 'Tengo un problema administrativo', value:'washington'},
  ];

  // postulaqui-categorias-secciones.json
  OPTGROUPDATA = JSON.parse(JSON.stringify(OPTGROUPDATA)).default;


  optgroupSelection(opt: any): void {
    console.log('optgroupSelection:', opt);

  }

  cygnusSelImportTs: string = `
    import { Component } from '@angular/core';
    import { CygnusSelectComponent } from 'ngx-cygnus-ui/components/select';
    import { SelectGeneric } from 'ngx-cygnus-ui/interfaces';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusSelectComponent
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class AppComponentComponent {}
  `;

  cygnusSelCodeTs: string = `
    ...
    export class AppComponentComponent {
      options: SelectGeneric[] = [
        {option: 'Valor 1', value: '0001'},
        {option: 'Valor 2', value: '0002'},
        {option: 'Valor 3', value: '0003'},
        {option: 'Valor 4', value: '0004'},
        {option: 'Valor 5', value: '0005'},
        {option: 'Valor 6', value: '0006'},
        {option: 'Valor 7', value: '0007'},
      ];
    }
  `;

  cygnusSelAutoWidthTs: string = `
    ...
    export class AppComponentComponent {
      optionsTestAutoWidth: SelectGeneric[] = [
        {option: 'Tengo un problema técnico', value:'brazil'},
        {option: 'Tengo un problema con una plataforma', value:'bucharest'},
        {option: 'Tengo un problema de red', value:'london'},
        {option: 'Tengo un problema administrativo', value:'washington'},
      ];
    }
  `;

  cygnusSelHtml: string = `
    <cygnus-select [options]="options" />
  `;

  cygnusSelWidthHtml: string = `
    <div style="width: 8rem;">
      <cygnus-select [options]="options" />
    </div>
  `;

  cygnusSelSizeHtml: string = `
    <!-- COMPONENTE: Selector XS -->
    <cygnus-select [options]="options" [selSize]="'xs'" />

    <!-- COMPONENTE: Selector básico -->
    <cygnus-select [options]="options" />

    <!-- COMPONENTE: Selector LG -->
    <cygnus-select [options]="options" [selSize]="'lg'" />
  `;

  cygnusSelDesHtml: string = `
    <!-- COMPONENTE: Selector deshabilitado -->
    <cygnus-select [options]="options" [isDisabled]="true" />
  `;

  cygnusSelValHtml: string = `
    <!-- COMPONENTE: Selector error -->
    <cygnus-select [options]="options" [selState]="'error'" />

    <!-- COMPONENTE: Selector éxito -->
    <cygnus-select [options]="options" [selState]="'success'" />
  `;

  cygnusSelLabelHtml: string = `
    <!-- COMPONENTE: Selector con label -->
    <cygnus-select
      [options]="options"
      [selectLabel]="'Label'"
      [selectHint]="'Este es un texto de ayuda para el usuario.'"
    />
  `;

  cygnusSelAutoWidthHtml: string = `
    <!-- COMPONENTE: Selector AutoWidth -->
    <cygnus-select [options]="optionsTestAutoWidth" [selAutoWidth]="true"  />
  `;

}
