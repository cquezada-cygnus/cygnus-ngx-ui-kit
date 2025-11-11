import { Component, input, OnInit, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { TW_CLASS } from '../const/tailwind.const';
import { CygnusBadgeComponent } from 'ngx-cygnus-ui/components/badge';
import { CygnusButtonLinkComponent, } from 'ngx-cygnus-ui/components/button';
import { CygnusPaginationComponent } from 'ngx-cygnus-ui/components/pagination';
import { TableType } from 'ngx-cygnus-ui/types';

@Component({
  selector: 'cygnus-custom-table',
  imports: [
    UpperCasePipe,
    CygnusBadgeComponent,
    CygnusButtonLinkComponent,
    CygnusPaginationComponent,
  ],
  templateUrl: './cygnus-custom-table.component.html',
})
export class CygnusCustomTableComponent implements OnInit {
  TW_CLASS = TW_CLASS;

  tableType = input<TableType>('basic');
  dataTable = input<any[]>([]); // enviar JSON con datos

  columnsHead = signal<string[]>([]);
  displayedColumns = signal<string[]>([]);

  doubleKeyUp1 = input<string>('');
  doubleKeyUp2 = input<string>('');
  doubleKeydown = input<string>('');

  currentCounter:number = 1;
  init = signal<number>(1);
  limit = signal<number>(3);
  maxCounter = input<number>(0);

  ngOnInit(): void {
    this.setColumnsHead();
    for (let i = 0; i < this.dataTable().length; i++) {
      const elem = this.dataTable()[i];
      for (let j = 0; j < this.columnsHead().length; j++) {
        const key = this.columnsHead()[j];
      }
    }
    if (this.maxCounter()>0) {
      this.showContent();
    }
  }

  setColumnsHead() {
    for (const key in this.dataTable()[0]) {
      this.columnsHead.update(currentItems => [...currentItems, key]);
    }
  }

  showContent() {
    const total = this.dataTable().length;
    const amountPerPage = Math.ceil(total / this.maxCounter());
    this.init.set(amountPerPage*(this.currentCounter-1));
    this.limit.set((amountPerPage*this.currentCounter)-1);
    console.log('total: ', total);
    console.log('amountPerPage: ', amountPerPage);
    console.log('this.init: ', this.init());
    console.log('this.limit: ', this.limit());

  }

}
