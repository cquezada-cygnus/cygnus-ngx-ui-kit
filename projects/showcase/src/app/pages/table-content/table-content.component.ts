import { Component } from '@angular/core';
import { SelectCollection, TableBadge, TdFormat } from 'ngx-cygnus-ui/interfaces';
import { CygnusCustomTableComponent } from 'ngx-cygnus-ui/components/table';
import * as CLIENTES from '../../../json/CLIENTES.json';
import * as EMPRESAS from '../../../json/EMPRESAS.json';
import * as COMPANY_COLAB from '../../../json/COMPANY_COLAB.json';
import * as EMPRESAS_CLIENTES from '../../../json/EMPRESAS_CLIENTES.json';
import * as PRUEBA_MULTIB from '../../../json/JSONPRUEBA.json';

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
        [tdFormatKeysArr]="tdFormatKeysArr"
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
        [tdFormatKeysArr]="tdFormatKeysArr"
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
        [tdFormatKeysArr]="tdFormatKeysArr"
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
        [showSearch]="true"
        [tdFormatKeysArr]="tdFormatKeysArr"
        [filtroColumnas]="CCOLAB_filtroColumnas"
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
        [tdFormatKeysArr]="tdFormatKeysArr"
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

  tdFormatKeysArrTs: string = `
    tdFormatKeysArr: TdFormat[] = [
      {key: 'PRESUPUESTO', format: 'money'},
      {key: 'RUT', format: 'rut'},
      {key: 'emp_autoid', format: 'number'},
      {key: 'id', format: 'number'},
      {key: 'cli_autoid', format: 'number'},
      {key: 'TELEFONO', format: 'number'},
      {key: 'ID USUARIO', format: 'number'},
    ];
  `;

  tdFormatTs: string = `
    export interface TdFormat {
      key: string,
      format: TdFormatType
    }
  `;

  TdFormatTypeTs: string = `
    export type TdFormatType = "number" | "money" | "rut";
  `;

  customTablefiltroColumnas: string = `
    CCOLAB_filtroColumnas: string[] = [
      'COMPAÑIA', 'NOMBRE', 'EMAIL', 'TIPO DE INDUSTRIA', 'PRESUPUESTO'
    ];
  `;

  customTableMultisearch: string = `
    @if (PRUEBA_MULTIB) {
      <cygnus-custom-table
        [dataTable]="PRUEBA_MULTIB"
        [tableType]="'stripped-hover'"
        [showSearch]="true"
        [tdFormatKeysArr]="tdFormatKeysArr"
        [multiSearch]="true"
      />
    }
  `;

  PRUEBA_MULTIB_ts: string = `
    import { Component } from '@angular/core';
    import { SelectCollection, TableBadge, TdFormat } from 'ngx-cygnus-ui/interfaces';
    import { CygnusCustomTableComponent } from 'ngx-cygnus-ui/components/table';
    ...
    import * as PRUEBA_MULTIB from '../../../json/JSONPRUEBA.json';

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
      ...

      PRUEBA_MULTIB = JSON.parse(JSON.stringify(PRUEBA_MULTIB)).default.Table;

    }
  `;

  PRUEBA_MULTIB_json: string = `
    {
      "Table": [
        {
          "TIPO_REQ": "EST",
          "ID_REQ": 192466,
          "FOLIO_REQ": 312707,
          "FECHA_ENVIO": "14/04/2025",
          "EMPRESA": "OPRO",
          "CUENTA": "COMERCIAL CASTRO",
          "DESC_CARGO": "PREPARADOR DE PEDIDO",
          "CANTIDAD_SOLICITADOS": 1.0,
          "CANTIDAD_ASIGNADA": 0,
          "DESC_CCOSTO": "REGION METROPOLITANA",
          "LUGAR_TRABAJO_UI": "Vista Alegre 2403, Cerrillos",
          "LUGAR_TRABAJO": "Vista Alegre 2403, Cerrillos",
          "FECHA_INICIO": "14/04/2025",
          "FECHA_TERMINO": "12/07/2025",
          "JORNADA": "44HS5D",
          "HORARIO": "Lunes a Viernes de 07:00 a 17:00 con 60 minutos de colación.",
          "COMUNA": "0333",
          "GENERO": null,
          "MOTIVO": "AUMENTOS OCASIONALES",
          "OBSERVACIONES": "",
          "OBSERVACION_CURRICULAR": "&nbsp;",
          "ResponsableNombre": "FRANCISCO JOSE JAQUEIH ARTUS",
          "ESTADO": "FEEDBACK",
          "DIAS_RESTANTES": -253,
          "SEMAFORO": "sem-rojo",
          "COD_CLIENTE": "770386209",
          "CLIENTE": "COMERCIAL CASTRO",
          "COD_CUENTA": "EST_CAST",
          "COD_CCOSTO": "0001",
          "COD_CARGO": "0367",
          "CANTIDAD_ACEPTADOS": 0,
          "CANTIDAD_RECHAZADOS": 0,
          "LIQUIDO_ESTIMADO": 612000.0,
          "TURNO": "",
          "EXPERIENCIA": "",
          "LEY21015": "",
          "DESC_MOTIVO": "Refuerzo del equipo del CD",
          "lugares_trabajo": "",
          "ResponsableUsrId": "64838",
          "EstadoNombre": "FEEDBACK",
          "EstadoId": null
        },
        ...
        ...
      ]
    }
  `;

  CLIENTES = JSON.parse(JSON.stringify(CLIENTES)).default;
  EMPRESAS = JSON.parse(JSON.stringify(EMPRESAS)).default;
  COMPANY_COLAB = JSON.parse(JSON.stringify(COMPANY_COLAB)).default;
  EMPRESAS_CLIENTES = JSON.parse(JSON.stringify(EMPRESAS_CLIENTES)).default;
  PRUEBA_MULTIB = JSON.parse(JSON.stringify(PRUEBA_MULTIB)).default.Table;

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
