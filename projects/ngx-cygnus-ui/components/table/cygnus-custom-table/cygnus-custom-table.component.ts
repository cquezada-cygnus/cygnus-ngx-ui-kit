import { Component, input, OnInit, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { TW_CLASS } from '../const/tailwind.const';
import { CygnusBadgeComponent } from 'ngx-cygnus-ui/components/badge';
import { CygnusButtonLinkComponent, } from 'ngx-cygnus-ui/components/button';
import { TableType } from 'ngx-cygnus-ui/types';
import * as i0 from '@angular/core';

@Component({
  selector: 'cygnus-custom-table',
  imports: [
    UpperCasePipe,
    CygnusBadgeComponent,
    CygnusButtonLinkComponent,
  ],
  templateUrl: './cygnus-custom-table.component.html',
})
export class CygnusCustomTableComponent implements OnInit {
  TW_CLASS = TW_CLASS;

  tableType = input<TableType>('basic');
  dataTable = input<any[]>([]); // enviar JSON con datos

  columnsHead = signal<string[]>([]);
  displayedColumns = signal<string[]>([]);

  ngOnInit(): void {
    console.log(this.dataTable());
    this.setColumnsHead();
    for (let i = 0; i < this.dataTable().length; i++) {
      const elem = this.dataTable()[i];
      for (let j = 0; j < this.columnsHead().length; j++) {
        const key = this.columnsHead()[j];
        console.log('elem[j]: ',elem[key]);
      }
    }

  }

  setColumnsHead() {
    for (const key in this.dataTable()[0]) {
      this.columnsHead.update(currentItems => [...currentItems, key]);
    }
  }

}
