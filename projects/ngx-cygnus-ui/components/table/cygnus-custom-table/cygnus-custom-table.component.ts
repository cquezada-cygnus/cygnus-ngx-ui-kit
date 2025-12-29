import { Component, effect, input, OnInit, output, signal } from '@angular/core';
import { TW_CLASS } from '../const/tailwind.const';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { CygnusBadgeComponent } from 'ngx-cygnus-ui/components/badge';
import { CygnusButtonLinkComponent, } from 'ngx-cygnus-ui/components/button';
import { CygnusPaginationComponent } from 'ngx-cygnus-ui/components/pagination';
import { CygnusInputComponent } from 'ngx-cygnus-ui/components/input';
import { CygnusSelectComponent } from 'ngx-cygnus-ui/components/select';
import { TableType } from 'ngx-cygnus-ui/types';
import { SelectCollection, SelectGeneric, SelectCollectOptions, TableBadge, TdFormat } from 'ngx-cygnus-ui/interfaces';
import { CygnusSearchSelectComponent, CygnusMenuSearchSelectComponent } from "ngx-cygnus-ui/components/search-select";
import { RutFormatPipe } from 'ngx-cygnus-ui/pipes';
import { CurrencyPipe, DecimalPipe } from '@angular/common';


@Component({
  selector: 'cygnus-custom-table',
  imports: [
    NgxCygnusIconsComponent,
    CygnusBadgeComponent,
    CygnusButtonLinkComponent,
    CygnusPaginationComponent,
    CygnusInputComponent,
    CygnusSelectComponent,
    CygnusSearchSelectComponent,
    CygnusMenuSearchSelectComponent,
    RutFormatPipe,
    CurrencyPipe,
    DecimalPipe,
],
  templateUrl: './cygnus-custom-table.component.html',
})
export class CygnusCustomTableComponent implements OnInit {
  TW_CLASS = TW_CLASS;

  tableType = input<TableType>('basic');
  dataTable = input<any[]>([]); // enviar JSON con datos
  filteredDataTable = signal<any[]>([]);
  showDataTable = signal<any[]>(this.dataTable());

  columnsHead = signal<string[]>([]);
  columnsHeadMultisearch = signal<SelectCollectOptions[]>([]);
  displayedColumns = signal<string[]>([]);

  doubleKeyUp1 = input<string>('');
  doubleKeyUp2 = input<string>('');
  doubleKeydown = input<string>('');

  documentsPerPage = signal(5); // Cantidad de documentos a mostrar por página
  currentCounter:number = 1; // Página actual (empieza en 1)
  init = signal<number>(1);
  limit = signal<number>(3);

  tdEditArr = input<string[]>([]); // if tdEditArr.length > 0, aparece btn editar
  toggleEdit = signal<boolean>(false);
  toggleEditIndex = signal<number>(-1);
  originalData: any = {};
  editedData: any = {};
  emitModifiedData = output<any>();

  badgeKey = input<TableBadge>();
  selectKeyArr = input<SelectCollection[]>([]);
  options: SelectGeneric[] = [];

  tdFormatKeysArr = input<TdFormat[]>([]);

  docsPerPage: SelectGeneric[] = [
    {option: '5 documentos', value: 5},
    {option: '10 documentos', value: 10},
    {option: '20 documentos', value: 20},
    {option: '50 documentos', value: 50},
  ];

  showSearch  = input<boolean>(false);
  multiSearch = input<boolean>(false);

  filtroColumnas = input<string[]>([]);
  toggleFiltroCol = signal<boolean>(true);

  ngOnInit(): void {
    this.showDataTable.set(this.dataTable());
    if (this.filtroColumnas().length == 0) { // si no hay filtroColumnas, mostrar todas las columnas
      this.setColumnsHead();
    } else { // si hay filtroColumnas, mostrar solo las columnas indicadas
      this.setFilterColumnsHead();
    }

    if (this.dataTable().length>0) { // si hay documentos, mostrarlos
      this.showContent();
    }
  }

  setToggleFiltroCol() {
    this.toggleFiltroCol.update( value => !value );
    if (this.toggleFiltroCol()) {
      this.setFilterColumnsHead();
    } else {
      this.setColumnsHead();
    }
  }

  shouldAlignRight(key: string): boolean {
    return this.tdFormatKeysArr().some(item => item.key.toUpperCase().includes(key.toUpperCase()));
  }

  shouldApplyFormat(key: string): string {
    const tdFormatObj: TdFormat | undefined = this.tdFormatKeysArr().find(item => item.key.toUpperCase().includes(key.toUpperCase()));
    if (tdFormatObj) {
      return tdFormatObj.format;
    }
    return '';
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
    this.originalData=this.showDataTable()[i];
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
    this.columnsHead.set([]);
    this.columnsHeadMultisearch.set([]);
    for (const key in this.showDataTable()[0]) {
      if (!key.toUpperCase().includes('isHover'.toUpperCase())) { // 'isHover' se utiliza para manejar los eventos (mouseenter) y (mouseleave), no forma parte de los datos de la tabla.
        this.columnsHead.update(currentItems => [...currentItems, key]);
        this.columnsHeadMultisearch.update(currentItems => [...currentItems, {key:key,selects:[]}]);
      }
    }
    this.multisearchSetOptions();
  }

  setFilterColumnsHead() {
    this.columnsHead.set([]);
    this.columnsHeadMultisearch.set([]);
    for (const key in this.showDataTable()[0]) {
      if (!key.toUpperCase().includes('isHover'.toUpperCase())) { // 'isHover' se utiliza para manejar los eventos (mouseenter) y (mouseleave), no forma parte de los datos de la tabla.
        const column = this.filtroColumnas().find(item => item.includes(key));
        if (column && key.toUpperCase().includes(column.toUpperCase()) ) {
          this.columnsHead.update(currentItems => [...currentItems, key]);
          this.columnsHeadMultisearch.update(currentItems => [...currentItems, {key:key,selects:[]}]);
        }
      }
    }
    this.multisearchSetOptions();
  }

  multiSearchRun(event: SelectCollectOptions) {
    if (event.selects.length===0) {
      this.showDataTable.set(this.dataTable());
    } else {
      const toShowDataTable:any[] = [];
      this.dataTable().forEach(item => {
        event.selects.forEach(select => {
          if (item[event.key].toString().toUpperCase().includes(select.option.toString().toUpperCase())) {
            toShowDataTable.push(item);
          }
        });
      });
      this.showDataTable.set(toShowDataTable);
    }
  }

  multisearchSetOptions() {
    const updateSelects = this.columnsHeadMultisearch();

    updateSelects.forEach(US => {
      const key = US['key'];
      this.showDataTable().forEach(elem => {

        if (elem[key]) {
          if (
             US['selects'].length===0 ||
            !US['selects'].find(item => item.option.toString().toUpperCase().includes(elem[key].toString().toUpperCase()) || undefined) ) {
             US['selects'].push({option:elem[key], value:elem[key]});
          }
        }
      });
    });
  }

  showContent() {
    const total = this.showDataTable().length;
    const docsPerPage = this.documentsPerPage();
    // const currentPg = this.currentPage();
    const currentPg = this.currentCounter;

    // Calcular el índice inicial (0-based)
    this.init.set((currentPg - 1) * docsPerPage);

    // Calcular el índice final
    // Asegurarse de no exceder el total de documentos
    const endIndex = (currentPg * docsPerPage) - 1;
    this.limit.set(Math.min(endIndex, total - 1));
  }

  // Método auxiliar para calcular el total de páginas
  getTotalPages(): number {
    const total = this.showDataTable().length;
    return Math.ceil(total / this.documentsPerPage());
  }

  goToPage(pageNumber: number) {
    const totalPages = this.getTotalPages();
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      // this.currentPage.set(pageNumber);
      this.currentCounter=pageNumber; // para el paginador externo
      this.showContent();
    }
  }

  search(searchTerm: string | [string, SelectGeneric]) {
    if ( typeof searchTerm === 'string' ) {
      if (searchTerm.length==0) { // mostrar la tabla completa si no hay búsqueda
        this.showDataTable.set(this.dataTable());
        return;
      }

      this.showDataTable.set( this.dataTable().filter(item => {
        // Check if any value in the current object contains the search term
        return Object.values(item).some(value => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchTerm.toLowerCase());
          }
          return false; // Ignore non-string values for this search
        });
      }) );

      this.showContent();
    }
  }

}
