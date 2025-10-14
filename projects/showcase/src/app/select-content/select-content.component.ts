import { Component } from '@angular/core';
import { CygnusSelectComponent } from 'ngx-cygnus-ui/components/select/public-api';
import { SelectGeneric } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'app-select-content',
  imports: [CygnusSelectComponent],
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
  ]

}
