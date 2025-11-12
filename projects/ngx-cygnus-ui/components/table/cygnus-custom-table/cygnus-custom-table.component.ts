import { Component, input, OnInit, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { TW_CLASS } from '../const/tailwind.const';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { CygnusBadgeComponent } from 'ngx-cygnus-ui/components/badge';
import { CygnusButtonLinkComponent, } from 'ngx-cygnus-ui/components/button';
import { CygnusPaginationComponent } from 'ngx-cygnus-ui/components/pagination';
import { CygnusInputComponent } from 'ngx-cygnus-ui/components/input';
import { TableType } from 'ngx-cygnus-ui/types';
import { EditableTableItem } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'cygnus-custom-table',
  imports: [
    UpperCasePipe,
    NgxCygnusIconsComponent,
    CygnusBadgeComponent,
    CygnusButtonLinkComponent,
    CygnusPaginationComponent,
    CygnusInputComponent,
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

  tdEditArr = input<string[]>([]); // if tdEditArr.length > 0, aparece btn editar
  toggleEdit = signal<boolean>(false);
  toggleEditIndex = signal<number>(-1);

  // <cygnus-input [inputCustomType]="'base'" [textPlaceholder]="'esto es un placeholder'" />

  ngOnInit(): void {
    this.setColumnsHead();

    if (this.maxCounter()>0) {
      this.showContent();
    }
  }

  setToggleEdit(index: number) {
    this.toggleEdit.update( current => !current );
    this.toggleEditIndex.set(index);
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
  }

}
