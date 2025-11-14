import { Component } from '@angular/core';
import { CygnusMenuSearchSelectComponent, CygnusSearchSelectComponent } from 'ngx-cygnus-ui/components/search-select';
import { SelectCollection } from 'ngx-cygnus-ui/interfaces';

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

  menuSearchContentArr: SelectCollection[] = [
    {key: 'Contratos', keyItems: [] },
    {key: 'Reportes días', keyItems: [] },
    {key: 'Liquidaciones', keyItems: [] },
    {key: 'Vacaciones', keyItems: [] },
  ];

}
