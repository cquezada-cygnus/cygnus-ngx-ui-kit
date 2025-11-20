import { Component } from '@angular/core';
import { SelectCollection, TableBadge, TableItem } from 'ngx-cygnus-ui/interfaces';
import { CygnusCustomTableComponent, CygnusTableComponent } from 'ngx-cygnus-ui/components/table';
import * as CLIENTES from '../../../json/CLIENTES.json';
import * as EMPRESAS from '../../../json/EMPRESAS.json';
import * as COMPANY_COLAB from '../../../json/COMPANY_COLAB.json';
import * as EMPRESAS_CLIENTES from '../../../json/EMPRESAS_CLIENTES.json';

import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';


@Component({
  selector: 'app-table-content',
  imports: [
    CygnusTableComponent,
    CygnusCustomTableComponent,
    Highlight, HighlightAuto, HighlightLineNumbers,
  ],
  templateUrl: './table-content.component.html',
  styleUrl: './table-content.component.scss',
})
export class TableContentComponent {

  customTableCLIENTES: string = `
    <!-- COMPONENTE: cygnus-custom-table -->
    @if (CLIENTES) {
      <cygnus-custom-table
        [dataTable]="CLIENTES"
        [tableType]="'stripped-hover'"
        [maxCounter]="10"
        [showSearch]="false"
      />
    }
  `;

  customTableCLIENTESDoubleSearch: string = `
    <!-- COMPONENTE: cygnus-custom-table -->
    @if (CLIENTES) {
      <cygnus-custom-table
        [dataTable]="CLIENTES"
        [tableType]="'double'"
        [doubleKeyUp1]="'NOMBRES'"
        [doubleKeyUp2]="'APELLIDOS'"
        [doubleKeydown]="'EMAIL'"
        [maxCounter]="10"
        [showSearch]="true"
      />
    }
  `;

  customTableEMPRESAS: string = `
    <!-- COMPONENTE: cygnus-custom-table -->
    @if (EMPRESAS) {
      <cygnus-custom-table
        [dataTable]="EMPRESAS"
        [tableType]="'stripped-hover'"
        [maxCounter]="5"
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
    <!-- COMPONENTE: cygnus-custom-table -->
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
  <!-- COMPONENTE: cygnus-custom-table -->
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

  tableBasicArr: TableItem[] = [
    { name: 'Juan Pérez', age: '45', email: 'florencia.mardonez.@sitio.com', address: 'Argomedo 601, Santiago', state: 'Activo' },
    { name: 'Jaime Valverde', age: '27', email: 'nidia.perez@sitio.com', address: 'Polo Sur 304, Ñuñoa', state: 'Activo' },
    { name: 'José Lopez', age: '31', email: 'carla.fuentealba@sitio.com', address: 'Santa Isabel 1904, Santiago', state: 'Activo' },
  ];

  tableSelectPagArr: TableItem[] = [
    { name: 'Carla Díaz', age: '45', email: 'carla.diaz@email.cl', address: 'Argomedo 601, Santiago', state: 'Activo', startDate: '24/01/2023', company: 'Lider', id: '20010510' },
    { name: 'Sandra Narvaez', age: '27', email: 'sandra.narvaez@email.cl', address: 'Polo Sur 304, Ñuñoa', state: 'Activo', startDate: '24/01/2023', company: 'Falabella', id: '20010511' },
    { name: 'Carla Fuentealba', age: '31', email: 'carla.fuentealba@sitio.com', address: 'Santa Isabel 1904, Santiago', state: 'Activo', startDate: '24/01/2023', company: 'Cencosud', id: '20010512' },
    { name: 'Florencia Mardonez', age: '45', email: 'florencia.mardonez.@sitio.com', address: 'Argomedo 601, Santiago', state: 'Activo', startDate: '24/01/2023', company: 'Lider', id: '20010513' },
    { name: 'Nidia Pérez', age: '27', email: 'nidia.perez@sitio.com', address: 'Polo Sur 304, Ñuñoa', state: 'Activo', startDate: '24/01/2023', company: 'Falabella', id: '20010514' },
    { name: 'Carla Fuentealba', age: '31', email: 'carla.fuentealba@sitio.com', address: 'Santa Isabel 1904, Santiago', state: 'Activo', startDate: '24/01/2023', company: 'Cencosud', id: '20010515' },
    { name: 'Juan Pérez', age: '45', email: 'florencia.mardonez.@sitio.com', address: 'Argomedo 601, Santiago', state: 'Activo', startDate: '24/01/2023', company: 'Lider', id: '20010516'  },
    { name: 'Jaime Valverde', age: '27', email: 'nidia.perez@sitio.com', address: 'Polo Sur 304, Ñuñoa', state: 'Activo', startDate: '24/01/2023', company: 'Falabella', id: '20010517' },
    { name: 'José Lopez', age: '31', email: 'carla.fuentealba@sitio.com', address: 'Santa Isabel 1904, Santiago', state: 'Activo', startDate: '24/01/2023', company: 'Cencosud', id: '20010518' },
    { name: 'Juana Zapata', age: '45', email: 'jzd@sitio.com', address: 'Argomedo 601, Santiago', state: 'Activo', startDate: '24/01/2023', company: 'Luchetti', id: '20010519'  },
  ];

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

}
