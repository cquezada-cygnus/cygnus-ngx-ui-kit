import { Component, input, OnInit, output, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { TW_CLASS } from '../const/tailwind.const';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { CygnusBadgeComponent } from 'ngx-cygnus-ui/components/badge';
import { CygnusButtonLinkComponent, } from 'ngx-cygnus-ui/components/button';
import { CygnusPaginationComponent } from 'ngx-cygnus-ui/components/pagination';
import { CygnusInputComponent } from 'ngx-cygnus-ui/components/input';
import { CygnusSelectComponent } from 'ngx-cygnus-ui/components/select';
import { TableType } from 'ngx-cygnus-ui/types';
import { EditableTableItem, SelectCollection, SelectGeneric, TableBadge } from 'ngx-cygnus-ui/interfaces';
import * as i0 from '@angular/core';

@Component({
  selector: 'cygnus-custom-table',
  imports: [
    UpperCasePipe,
    NgxCygnusIconsComponent,
    CygnusBadgeComponent,
    CygnusButtonLinkComponent,
    CygnusPaginationComponent,
    CygnusInputComponent,
    CygnusSelectComponent,
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
  originalData: any = {};
  editedData: any = {};
  emitModifiedData = output<any>();

  badgeKey = input<TableBadge>();
  selectKeyArr = input<SelectCollection[]>([]);
  options: SelectGeneric[] = [];

  ngOnInit(): void {
    this.setColumnsHead();

    if (this.maxCounter()>0) {
      this.showContent();
    }
  }

  getKeyOfSelOption(key: string, item: any): string {
    this.options = [];
    if (this.selectKeyArr() && this.selectKeyArr().length>0) {
      for (let i = 0; i < this.selectKeyArr().length; i++) {
        const sel = this.selectKeyArr()[i];
        if (key===sel.key) {
          this.options = this.createOptions(sel, item);
          return key;
        }
      }
    }
    this.options = [];
    return '';
  }

  createOptions(sel: SelectCollection, item: any): SelectGeneric[] {
    const options: SelectGeneric[] = [];

    for (let i = 0; i < item[sel.key].length; i++) {
      const elem = item[sel.key][i];
      let option = '';

      for (let j = 0; j < sel.keyItems.length; j++) {
        const kelem = elem[sel.keyItems[j]];
        option += (kelem + ' ');
      }

      options.push( { option: option, value: elem })
    }

    console.log('createOptions: ', options);

    return options;
  }

  setSelectFormat(obj:any) {
    function getObjectEntries<T extends object>(obj: T): [keyof T, T[keyof T]][] {
      return Object.entries(obj) as [keyof T, T[keyof T]][];
    }

    obj = getObjectEntries(obj);
    const options: SelectGeneric[] = [];
    for (const [key, value] of obj) {
      console.log(`Key: ${String(key)}, Value: ${value}`);
      options.push({option: key, value: value})
    }
  }

  badgeColor(itemValue: string): string {
    if (this.badgeKey()?.stateActive===itemValue) return 'badge-success';
    else if (this.badgeKey()?.stateWarning===itemValue) return 'badge-warning';
    else if (this.badgeKey()?.stateError===itemValue) return 'badge-error';
    else return '';
  }

  getOutputData(data: any, key: string, i: number) {
    this.editedData[key]=data;
    this.originalData=this.dataTable()[i];
  }

  cancelEditedData() {
    this.editedData = {};
    this.originalData = {};
  }

  emitDataModified() {
    this.emitModifiedData.emit({edited: this.editedData, original: this.originalData } );
    this.cancelEditedData();
  }

  setToggleEdit(index: number, cancel?: boolean) {
    this.toggleEdit.update( current => !current );
    if (cancel) this.toggleEditIndex.set(-1);
    else this.toggleEditIndex.set(index);
  }

  keyIsEditable(key: string): boolean {
    return this.tdEditArr().includes(key.toUpperCase());
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
