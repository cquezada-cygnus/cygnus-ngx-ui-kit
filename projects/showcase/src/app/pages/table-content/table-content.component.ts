import { Component } from '@angular/core';
import { SelectCollection, TableBadge, TdFormat } from 'ngx-cygnus-ui/interfaces';
import { CygnusCustomTableComponent } from 'ngx-cygnus-ui/components/table';
import * as CLIENTES from '../../../json/CLIENTES.json';
import * as EMPRESAS from '../../../json/EMPRESAS.json';
import * as COMPANY_COLAB from '../../../json/COMPANY_COLAB.json';
import * as EMPRESAS_CLIENTES from '../../../json/EMPRESAS_CLIENTES.json';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';


@Component({
  selector: 'app-table-content',
  imports: [
    CygnusCustomTableComponent,
    Highlight, HighlightLineNumbers,
  ],
  templateUrl: './table-content.component.html',
  styleUrl: './table-content.component.scss',
})
export class TableContentComponent {

  customTableCLIENTES: string = `
    @if (CLIENTES) {
      <cygnus-custom-table
        [dataTable]="CLIENTES"
        [tableType]="'stripped-hover'"
        [showSearch]="false"
      />
    }
  `;

  customTableCLIENTESDoubleSearch: string = `
    @if (CLIENTES) {
      <cygnus-custom-table
        [dataTable]="CLIENTES"
        [tableType]="'double'"
        [doubleKeyUp1]="'NOMBRES'"
        [doubleKeyUp2]="'APELLIDOS'"
        [doubleKeydown]="'EMAIL'"
        [showSearch]="true"
      />
    }
  `;

  customTableEMPRESAS: string = `
    @if (EMPRESAS) {
      <cygnus-custom-table
        [dataTable]="EMPRESAS"
        [tableType]="'stripped-hover'"
        [tdEditArr]="empresasEditArr"
        (emitModifiedData)="showEditedData($event)"
        [showSearch]="false"
      />
    }
  `;

  codeEmpresasEditArr: string = `
    empresasEditArr: string[] = [
      'NOMBRE DE FANTASIA', 'EMAIL', 'DIRECCION',
    ];
  `;

  eventEmitModifiedData: string = `
    emitDataModified() {
      this.emitModifiedData.emit({edited: this.editedData, original: this.originalData } );
      this.cancelEditedData();
    }
  `;

  customTableCOMPANY_COLAB: string = `
    @if (COMPANY_COLAB) {
      <cygnus-custom-table
        [dataTable]="COMPANY_COLAB"
        [tableType]="'stripped-hover'"
        [badgeKey]="badgeKey"
        [showSearch]="true"
      />
    }
  `;

  codeBadgeKey: string = `
    badgeKey: TableBadge = {
      key: 'ESTADO',
      stateActive: 'Activo',
      stateWarning: 'Pendiente',
      stateError: 'Bloqueado'
    };
  `;

  customTableEMPRESAS_CLIENTES: string = `
    @if (EMPRESAS_CLIENTES) {
      <cygnus-custom-table
        [dataTable]="EMPRESAS_CLIENTES"
        [tableType]="'stripped-hover'"
        [selectKeyArr]="empresasSelectArr"
        [showSearch]="true"
      />
    }
  `;

  codeEmpresasSelectArr: string = `
    empresasSelectArr:SelectCollection[]  = [
      {key:'CLIENTES', keyItems: ['NOMBRES', 'APELLIDOS', 'EMAIL']}
    ];
  `;

  exampleCodeEmpresasClientes: string = `
  [
    ...,
    {
      "emp_autoid": 27,
      "RAZON SOCIAL": "INGAL INGENIERIA LIMITADA",
      "NOMBRE DE FANTASIA": "INGAL INGENIERIA",
      "RUT": "777589504",
      "EMAIL": "",
      "GIRO": "Obras de Ingenieria",
      "DIRECCION": "Villarrica 540, Providencia",
      "CLIENTES": [
        {
          "cli_autoid": 279,
          "NOMBRES": "Diego",
          "APELLIDOS": "Pérez Pérez",
          "RUT": "163617145",
          "TELEFONO": "56983609470",
          "EMAIL": "dperez@gmail.com"
        },
        {
          "cli_autoid": 280,
          "NOMBRES": "Daniela",
          "APELLIDOS": "López",
          "RUT": "187369681",
          "TELEFONO": "56957826769",
          "EMAIL": "dtlopez@uc.lc"
        },
        {
          "cli_autoid": 281,
          "NOMBRES": "Danitza",
          "APELLIDOS": "Jerez",
          "RUT": "108924888",
          "TELEFONO": "56991612534",
          "EMAIL": "dyepez@masdayv.cl"
        },
        {
          "cli_autoid": 282,
          "NOMBRES": "Eduardo",
          "APELLIDOS": "Ramirez",
          "RUT": "12141516k",
          "TELEFONO": "56984180633",
          "EMAIL": "eduardoramirezabogado@gmail.com"
        }
      ]
    },
    ...
  ]
  `;

  importCygnusCustomTable: string = `
    import { Component } from '@angular/core';
    import { SelectCollection, TableBadge, TableItem } from 'ngx-cygnus-ui/interfaces';
    import { CygnusCustomTableComponent } from 'ngx-cygnus-ui/components/table';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusCustomTableComponent
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss',
    })
    export class AppComponentComponent {}
  `;

  codeDataExample: string = `
    ...
    import * as EMPRESAS from '../../../json/EMPRESAS.json';
    ...
    export class AppComponentComponent {
      EMPRESAS = JSON.parse(JSON.stringify(EMPRESAS)).default;
    }
  `;

  CLIENTES = JSON.parse(JSON.stringify(CLIENTES)).default;
  EMPRESAS = JSON.parse(JSON.stringify(EMPRESAS)).default;
  COMPANY_COLAB = JSON.parse(JSON.stringify(COMPANY_COLAB)).default;
  EMPRESAS_CLIENTES = JSON.parse(JSON.stringify(EMPRESAS_CLIENTES)).default;

  badgeKey: TableBadge = {
    key: 'ESTADO',
    stateActive: 'Activo',
    stateWarning: 'Pendiente',
    stateError: 'Bloqueado'
  };

  empresasEditArr: string[] = [
    'NOMBRE DE FANTASIA', 'EMAIL', 'DIRECCION',
  ];

  showEditedData(data: any) {
    console.log('showEditedData: ', data);
  };

  empresasSelectArr:SelectCollection[]  = [
    {key:'CLIENTES', keyItems: ['NOMBRES', 'APELLIDOS', 'EMAIL']}
  ];

  tdFormatKeysArr: TdFormat[] = [
    {key: 'PRESUPUESTO', format: 'money'},
    {key: 'RUT', format: 'rut'},
    {key: 'emp_autoid', format: 'number'},
    {key: 'id', format: 'number'},
    {key: 'cli_autoid', format: 'number'},
    {key: 'TELEFONO', format: 'number'},
    {key: 'ID USUARIO', format: 'number'},
  ];

  CCOLAB_filtroColumnas: string[] = [
    'COMPAÑIA', 'NOMBRE', 'EMAIL', 'TIPO DE INDUSTRIA', 'PRESUPUESTO'
  ];

}
