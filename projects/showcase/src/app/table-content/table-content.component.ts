import { Component } from '@angular/core';
import { TableItem } from 'ngx-cygnus-ui/interfaces';
import { CygnusTableComponent } from 'ngx-cygnus-ui/components/table';

@Component({
  selector: 'app-table-content',
  imports: [
    CygnusTableComponent,
  ],
  templateUrl: './table-content.component.html',
  styleUrl: './table-content.component.scss'
})
export class TableContentComponent {
  tableBasicArr: TableItem[] = [
    { name: 'Juan Pérez', age: '45', email: 'florencia.mardonez.@sitio.com', address: 'Argomedo 601, Santiago', state: 'Activo' },
    { name: 'Jaime Valverde', age: '27', email: 'nidia.perez@sitio.com', address: 'Polo Sur 304, Ñuñoa', state: 'Activo' },
    { name: 'José Lopez', age: '31', email: 'carla.fuentealba@sitio.com', address: 'Santa Isabel 1904, Santiago', state: 'Activo' },
  ];
}
