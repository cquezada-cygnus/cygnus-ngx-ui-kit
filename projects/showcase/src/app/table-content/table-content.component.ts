import { Component } from '@angular/core';
import { SelectCollection, TableBadge, TableItem } from 'ngx-cygnus-ui/interfaces';
import { CygnusCustomTableComponent, CygnusTableComponent } from 'ngx-cygnus-ui/components/table';
import * as CLIENTES from './../../json/CLIENTES.json';
import * as EMPRESAS from './../../json/EMPRESAS.json';
import * as COMPANY_COLAB from './../../json/COMPANY_COLAB.json';
import * as EMPRESAS_CLIENTES from './../../json/EMPRESAS_CLIENTES.json';

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
