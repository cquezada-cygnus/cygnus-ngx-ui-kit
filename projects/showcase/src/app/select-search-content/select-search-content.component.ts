import { Component } from '@angular/core';
import { CygnusMenuSearchSelectComponent, CygnusSearchSelectComponent } from 'ngx-cygnus-ui/components/search-select';
import { SelectCollection, SelectCollectOptions, SelectGeneric } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'app-select-search-content',
  imports: [
    CygnusSearchSelectComponent,
    CygnusMenuSearchSelectComponent,
  ],
  templateUrl: './select-search-content.component.html',
  styleUrl: './select-search-content.component.scss'
})
export class SelectSearchContentComponent {

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

}
