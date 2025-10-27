import { Component } from '@angular/core';
import { CygnusListComponent } from 'ngx-cygnus-ui/components/list';
import { ListElem } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'app-list-content',
  imports: [
    CygnusListComponent
  ],
  templateUrl: './list-content.component.html',
  styleUrl: './list-content.component.scss'
})
export class ListContentComponent {
  listArr: ListElem[] = [
    {title: 'Perfil', linkText: './', value: '' },
    {title: 'Ajustes', linkText: './', value: '' },
    {title: 'Hoja informativa', linkText: './', value: '' },
  ];
}
