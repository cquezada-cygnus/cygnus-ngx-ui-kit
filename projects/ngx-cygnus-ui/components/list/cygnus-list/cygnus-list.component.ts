import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { ListElem } from 'ngx-cygnus-ui/interfaces';
import { CygnusBadgeComponent } from 'ngx-cygnus-ui/components/badge';

@Component({
  selector: 'cygnus-list',
  imports: [
    RouterLink,
    NgxCygnusIconsComponent,
    CygnusBadgeComponent,
  ],
  templateUrl: './cygnus-list.component.html',
})
export class CygnusListComponent {
  itemsArr = input<ListElem[]>([]);
}
