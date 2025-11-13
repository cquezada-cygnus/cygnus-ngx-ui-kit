import { Component, effect, input, OnInit, output, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { TW_CLASS } from '../const/tailwind.const';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { CygnusBadgeComponent } from 'ngx-cygnus-ui/components/badge';
import { CygnusButtonLinkComponent, } from 'ngx-cygnus-ui/components/button';
import { CygnusPaginationComponent } from 'ngx-cygnus-ui/components/pagination';
import { CygnusInputComponent } from 'ngx-cygnus-ui/components/input';
import { TableType } from 'ngx-cygnus-ui/types';
import { EditableTableItem, TableBadge } from 'ngx-cygnus-ui/interfaces';
import { ɵInternalFormsSharedModule } from "@angular/forms";

@Component({
  selector: 'cygnus-custom-table',
  imports: [
    UpperCasePipe,
    NgxCygnusIconsComponent,
    CygnusBadgeComponent,
    CygnusButtonLinkComponent,
    CygnusPaginationComponent,
    CygnusInputComponent,
    ɵInternalFormsSharedModule
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

  ngOnInit(): void {
    this.setColumnsHead();

    if (this.maxCounter()>0) {
      this.showContent();
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
