import { Component, input, model, OnInit, output, signal } from '@angular/core';
import { TitleCasePipe, UpperCasePipe, DatePipe } from '@angular/common';
import { TW_CLASS } from '../const/tailwind.const';
import { TableItem } from 'ngx-cygnus-ui/interfaces';
import { TableType } from 'ngx-cygnus-ui/types';
import { CygnusBadgeComponent } from 'ngx-cygnus-ui/components/badge';
import { CygnusButtonComponent, CygnusButtonLinkComponent, } from 'ngx-cygnus-ui/components/button';
import { CygnusCheckboxComponent } from 'ngx-cygnus-ui/components/checkbox';
import { CygnusPaginationComponent } from 'ngx-cygnus-ui/components/pagination';

@Component({
  selector: 'cygnus-table',
  imports: [
    TitleCasePipe,
    UpperCasePipe,
    DatePipe,
    CygnusBadgeComponent,
    CygnusButtonComponent,
    CygnusButtonLinkComponent,
    CygnusCheckboxComponent,
    CygnusPaginationComponent
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
export class CygnusTableComponent implements OnInit {
  TW_CLASS = TW_CLASS;

  tableType = input<TableType>('basic');
  tableItems = model<TableItem[]>([]);
  tableEditOutput = output<number>();

  currentCounter:number = 1;
  init = signal<number>(1);
  limit = signal<number>(3);
  maxCounter = input<number>(3);

  checkAll = signal<boolean>(false);

  showContent() {
    const total = this.tableItems().length;
    const amountPerPage = Math.ceil(total / this.maxCounter());
    this.init.set(amountPerPage*(this.currentCounter-1));
    this.limit.set((amountPerPage*this.currentCounter)-1);
  }

  setCheckAll(value: boolean) {
    this.checkAll.set(value);
  }

  checkData(index: number, checkValue: boolean) {
    const copyTable = this.tableItems();
    copyTable[index].isChecked = checkValue;
    this.tableItems.set(copyTable);

  }

  sendSelection() {
    console.log("tableItems: ", this.tableItems());

  }

  ngOnInit(): void {
    this.showContent();
  }

  deleteItem(index:number):void {
    this.tableItems.update( table => [
      ...table.slice(0, index),
      ...table.slice(index + 1)
    ]);
  }

  editItem(index:number):void {
    this.tableEditOutput.emit(index);
  }

  startDateisDate(item: TableItem): boolean {
    return item.startDate instanceof Date;
  }

}
