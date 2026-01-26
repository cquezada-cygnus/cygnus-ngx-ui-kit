import { Component, input, OnInit, signal } from '@angular/core';
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
  isInvisible = signal<boolean>(true);
  placeholder = input<string>('Escribe aquí...');

  OPTGROUPDATA = input<any>();
  objCatSecOpt: Record<string, any> = {}; // A record of string keys and any values
  dataEntries: any;
  showDataEntries: any;
  dataFilteredEntries: any;
  filterValue: string | null = '';
  categoryName = input<string>('');
  categorySection = input<string>('');
  categoryItem = input<string>('');
  alertType = input<string>('alert-yellow');

  categorySelected: string | null = null;
  secOpSelected: any = null;
  secOpVolver: string = 'VOLVERselectCategory';
  showSecOpt = signal<boolean>(false);
  showCategories = signal<boolean>(false);
  showWithoutCategorySelected = signal<boolean>(false);
  filterWithCategorySelected = signal<boolean>(false);

  maxLengthSelection = input<number>(3);
  arrSelection: any[] = [];

  selectSearchId = signal<string>('');
  private static idCounter = 0;


  ngOnInit(): void {
    // Generar ID único si no se proporciona
    this.selectSearchId.set(`cg-cat-section-select-search-${++CygnusCatSectionSearchSelectComponent.idCounter}`);

    // Recibir JSON para generar categorías y secciones
    this.setCategoriesAndSections();
    // Convert the record to an array of entries (key-value pairs)
    this.dataEntries = Object.entries(this.objCatSecOpt);
    this.showDataEntries = Object.entries(this.objCatSecOpt);
    this.dataEntries = Object.fromEntries(this.dataEntries);
    this.showDataEntries = Object.fromEntries(this.showDataEntries);
    // showDataEntries y dataEntries tienen exactamente los mismos datos porque showDataEntries cambiará sus datos según se elija filtrar o no por lo escrito en el input de búsqueda. Por lo cual se necesita que exista un dataEntries que no cambie. ShowDataEntries estará cambiando según el uso.
    this.filterInputSearch();
    console.log('showDataEntries:',this.showDataEntries);

  }

  openUl() {
    if (!this.categorySelected) { // si no está seleccionada la categoría, mostrar menú de categorías
      this.showCategories.set(true);
    }
  }

  filterInputSearch() {
    this.searchControl.valueChanges.pipe(debounceTime(150)).subscribe(value => {
      this.showWithoutCategorySelected.set(false);
      this.filterWithCategorySelected.set(false);
      console.log('filterInputSearch value:', value);
      this.filterValue = value;
      // Si no se selecciona categoría: buscar la palabra en todas las categorías.
      if (!this.categorySelected) {
        // Al mostrar las opciones, se muestra su sección y cargo que coincida.
        this.showWithoutCategorySelected.set(true);
        this.showCategories.set(false);
        this.showSecOpt.set(true);
      }
      // Si se selecciona la categoría: Busca la palabra en esa categoría
      else {
        this.filterWithCategorySelected.set(true);
        this.showCategories.set(false);
        this.showSecOpt.set(true);
      }

    });
  }

  setFilteredOptions(arrOptions:any | any[]) {
    this.dataFilteredEntries = [];
    for (let i = 0; i < arrOptions.length; i++) {
      const elem = arrOptions[i];
      if (elem.cargo.toUpperCase().includes(this.filterValue?.toUpperCase())) {
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
    console.log('onCategorySelected this.categorySelected:',this.categorySelected);

    if (!this.categorySelected) return;
    this.showCategories.set(false);
    this.showSecOpt.set(true);
  }

  onItemSelected(item:any): void {
    if (item === this.secOpVolver) { // volver al menú de categorías
      this.showSecOpt.set(false);
      this.showCategories.set(true);
    } else {
      this.secOpSelected = item;
      console.log('onItemSelected item:',item);
      // agregar a la lista
      this.storeItemSelected(item);
      // mostrar en la lista
      // cambiar color de la opción y que no se vuelva a seleccionar
    }
  }

  storeItemSelected(item:any): void {
    if (item) { // si la opt es un string vacio, no lo guarda.
      if (this.arrSelection.length < this.maxLengthSelection() && !this.arrSelection.some(sel => sel.id_item == item.id_item)) { // Si ya hay 3 cargos seleccionados, no se guarda. Si ya está guardado, no lo guarda.
        this.arrSelection.push(item);
      }
      console.log('storeItemSelected arr:',this.arrSelection);
    }
  }

  cargoDeleted(event: any, cargo:any) {
    this.arrSelection = this.arrSelection.filter(s => s.id_item !== cargo.id_item);
    console.log('cargoDeleted arr:',this.arrSelection);
  }

  markAsSelected(item:any): boolean {
    if (this.arrSelection.length > 0) {
      return this.arrSelection.some(elem => elem.id_item === item.id_item);
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
}
