import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { ListElem } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'cygnus-list',
  imports: [
    RouterLink,
    NgxCygnusIconsComponent
  ],
  templateUrl: './cygnus-list.component.html',
})
export class CygnusListComponent {
  itemsArr = input<ListElem[]>([]);
}
