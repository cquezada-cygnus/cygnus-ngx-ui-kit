import { Component, effect, HostListener, input, OnInit, output, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime } from 'rxjs';

import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { CygnusAlertSimpleComponent } from 'ngx-cygnus-ui/components/alert';

import { TW_CLASS } from '../const/tailwind.const';


@Component({
  selector: 'cygnus-cat-section-search-select',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgxCygnusIconsComponent,
    CygnusAlertSimpleComponent,
  ],
  templateUrl: './cygnus-cat-section-search-select.component.html',
})
export class CygnusCatSectionSearchSelectComponent implements OnInit {
  TW_CLASS = TW_CLASS;

  searchControl = new FormControl('');
  isInvisible = signal<boolean>(false);
  placeholder = input<string>('Escribe aquí...');
  isDisabled = input<boolean>(false);

  OPTGROUPDATA = input<any>();
  objCatSecOpt: Record<string, any> = {}; // A record of string keys and any values
  dataEntries: any;
  showDataEntries: any;
  dataFilteredEntries: any;
  filterValue: string | null = '';
  categoryName = input<string>('');
  categorySection = input<string>('');
  categoryItem = input<string>('');
  categoryIdItem = input<string>('');
  alertType = input<string>('alert-yellow');
  inputStatusColor = input<string>('');
  outputBlur = output<boolean>();

  categorySelected: string | null = null;
  secOpSelected: any = null;
  secOpVolver: string = 'VOLVERselectCategory';
  showSecOpt = signal<boolean>(false);
  showCategories = signal<boolean>(false);
  showWithoutCategorySelected = signal<boolean>(false);
  filterWithCategorySelected = signal<boolean>(false);

  maxLengthSelection = input<number>(3);
  arrSelection: any[] = [];
  outputItemsSelected = output<any[]>();

  selectSearchId = signal<string>('');
  ulShowCategoriesId = signal<string>('');
  ulShowSecOptId = signal<string>('');
  private static idCounter = 0;

  constructor() {
    effect(() => {
      if (this.isDisabled()) {
        this.searchControl.disable();
      } else {
        this.searchControl.enable();
      }
    });
  }


  ngOnInit(): void {
    // Generar ID único si no se proporciona
    this.selectSearchId.set(`cg-cat-section-select-search-${++CygnusCatSectionSearchSelectComponent.idCounter}`);
    this.ulShowCategoriesId.set(`cg-cat-section-select-search-ul-cat-${++CygnusCatSectionSearchSelectComponent.idCounter}`);
    this.ulShowSecOptId.set(`cg-cat-section-select-search-ul-sec-${++CygnusCatSectionSearchSelectComponent.idCounter}`);

    // Recibir JSON para generar categorías y secciones
    this.setCategoriesAndSections();
    // Convert the record to an array of entries (key-value pairs)
    this.dataEntries = Object.entries(this.objCatSecOpt);
    this.showDataEntries = Object.entries(this.objCatSecOpt);
    this.dataEntries = Object.fromEntries(this.dataEntries);
    this.showDataEntries = Object.fromEntries(this.showDataEntries);
    // showDataEntries y dataEntries tienen exactamente los mismos datos porque showDataEntries cambiará sus datos según se elija filtrar o no por lo escrito en el input de búsqueda. Por lo cual se necesita que exista un dataEntries que no cambie. ShowDataEntries estará cambiando según el uso.
    this.filterInputSearch();

  }

  openUl() {
    if (!this.isDisabled()) {
      this.isInvisible.set(false);
      if (!this.categorySelected) { // si no está seleccionada la categoría, mostrar menú de categorías
        this.showCategories.set(true);
      }
    }
  }

  filterInputSearch() {
    this.searchControl.valueChanges.pipe(debounceTime(150)).subscribe(value => {
      this.showWithoutCategorySelected.set(false);
      this.filterWithCategorySelected.set(false);
      this.filterValue = value;
      // Si no se selecciona categoría: buscar la palabra en todas las categorías.
      if (!this.categorySelected) {
        // Al mostrar las opciones, se muestra su sección y cargo que coincida.
        this.showWithoutCategorySelected.set(true);
        this.showCategories.set(false);
        this.showSecOpt.set(true);
        this.isInvisible.set(false);
      }
      // Si se selecciona la categoría: Busca la palabra en esa categoría
      else {
        this.filterWithCategorySelected.set(true);
        this.showCategories.set(false);
        this.showSecOpt.set(true);
        this.isInvisible.set(false);
      }

    });
  }

  setFilteredOptions(arrOptions:any | any[]) {
    this.dataFilteredEntries = [];
    for (let i = 0; i < arrOptions.length; i++) {
      const elem = arrOptions[i];
      if (elem[this.categoryItem()].toUpperCase().includes(this.filterValue?.toUpperCase())) {
        this.dataFilteredEntries.push(elem);
      }
    }
    if (this.dataFilteredEntries.length > 0) {
      return true;
    }
    return false;
  }

  onCategorySelected(cat: any): void {
    this.categorySelected = cat;

    if (!this.categorySelected) return;
    this.showCategories.set(false);
    this.showSecOpt.set(true);
    this.isInvisible.set(false);
  }

  onItemSelected(item:any): void {
    if (item === this.secOpVolver) { // volver al menú de categorías
      this.showSecOpt.set(false);
      this.showCategories.set(true);
      this.isInvisible.set(false);
    } else {
      this.secOpSelected = item;
      // agregar a la lista
      this.storeItemSelected(item);
      // mostrar en la lista
      // cambiar color de la opción y que no se vuelva a seleccionar -> markAsSelected()
      // enviar como output la lista seleccionada
      this.outputItemsSelected.emit(this.arrSelection);
    }
  }

  storeItemSelected(item:any): void {
    if (item) { // si la opt es un string vacio, no lo guarda.
      if (this.arrSelection.length < this.maxLengthSelection() && !this.arrSelection.some(sel => sel[this.categoryIdItem()] == item[this.categoryIdItem()])) { // Si ya hay 3 cargos seleccionados, no se guarda. Si ya está guardado, no lo guarda.
        this.arrSelection.push(item);
      }
    }
  }

  cargoDeleted(event: any, cargo:any) {
    this.arrSelection = this.arrSelection.filter(s => s[this.categoryIdItem()] !== cargo[this.categoryIdItem()]);
    // enviar como output la lista actualizada
    this.outputItemsSelected.emit(this.arrSelection);
    // inicializar menu
    if (this.arrSelection.length===0) {
      this.categorySelected = null;
      this.secOpSelected = null;
      this.showSecOpt.set(false);
    }
  }

  markAsSelected(item:any): boolean {
    if (this.arrSelection.length > 0) {
      return this.arrSelection.some(elem => elem[this.categoryIdItem()] === item[this.categoryIdItem()]);
    }
    return false;
  }

  setCategoriesAndSections() {
    if (this.OPTGROUPDATA()) {

      // llenar todas las categorías
      this.OPTGROUPDATA().forEach((elem:Object) => {
        const catkey = ''+(elem[this.categoryName() as keyof typeof elem]);
        if (!(catkey in this.objCatSecOpt)) {
          this.objCatSecOpt[catkey] = [];
        }
      });

      // llenar todas las secciones
      this.OPTGROUPDATA().forEach((elem:Object) => {

        const catkey = ''+(elem[this.categoryName() as keyof typeof elem]);
        const seckey = ''+(elem[this.categorySection() as keyof typeof elem]);

        if ((catkey in this.objCatSecOpt) && !(seckey in this.objCatSecOpt[catkey])) {
          this.objCatSecOpt[catkey][seckey] = [];
        }
      });

      // llenar el contenido de todas las secciones
      this.OPTGROUPDATA().forEach((elem:Object) => {

        const catkey = ''+(elem[this.categoryName() as keyof typeof elem]);
        const seckey = ''+(elem[this.categorySection() as keyof typeof elem]);

        if ((catkey in this.objCatSecOpt) && (seckey in this.objCatSecOpt[catkey])) {
          this.objCatSecOpt[catkey][seckey].push(elem);
        }
      });
    }

  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) { // invisibilizar el menu cuando se haga click fuera de él
    if (
      !(event.target == document.getElementById(this.selectSearchId())) && // si NO se hace click en dropdown
      !(document.getElementById(this.selectSearchId())?.contains(event.target as Node)) && // si NO se hace click en hijos del dropdown
      !(event.target == document.getElementById(this.ulShowCategoriesId())) && // si NO se hace click en ul ulShowCategoriesId
      !(document.getElementById(this.ulShowCategoriesId())?.contains(event.target as Node)) &&
      !(event.target == document.getElementById(this.ulShowSecOptId())) && // si NO se hace click en ul ulShowSecOptId
      !(document.getElementById(this.ulShowSecOptId())?.contains(event.target as Node))
    ) {
      if (!this.isInvisible()) this.isInvisible.set(true); // invisibilizar opciones
    }
  }
}
