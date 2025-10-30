import { Component, input, model } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { TW_CLASS } from '../const/tailwind.const';
import { TableItem } from 'ngx-cygnus-ui/interfaces';
import { TableType } from 'ngx-cygnus-ui/types';
import { CygnusBadgeComponent } from 'ngx-cygnus-ui/components/badge';
import {
  CygnusButtonComponent,
  CygnusButtonLinkComponent,
} from 'ngx-cygnus-ui/components/button';

@Component({
  selector: 'cygnus-table',
  imports: [
    TitleCasePipe,
    CygnusBadgeComponent,
    CygnusButtonLinkComponent,
  ],
  templateUrl: './cygnus-table.component.html',
  styles: `
    table tbody {
      :where(& > :not(:last-child)) {
        border-color: #EAECF0;
        --tw-divide-y-reverse: 0;
        border-bottom-style: var(--tw-border-style);
        border-top-style: var(--tw-border-style);
        border-top-width: calc(1px * var(--tw-divide-y-reverse));
        border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
      }
    }
  `,
})
export class CygnusTableComponent {
  TW_CLASS = TW_CLASS;

  tableType = input<TableType>('basic');
  tableItems = model<TableItem[]>([]);

  deleteItem(index:number):void {
    this.tableItems.update( table => [
      ...table.slice(0, index),
      ...table.slice(index + 1)
    ]);
  }

}
