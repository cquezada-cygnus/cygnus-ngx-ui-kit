import { Component, HostListener, input, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';

import { TW_CLASS } from '../const/tailwind.const';


@Component({
  selector: 'cygnus-cat-section-search-select',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgxCygnusIconsComponent,
  ],
  templateUrl: './cygnus-cat-section-search-select.component.html',
})
export class CygnusCatSectionSearchSelectComponent implements OnInit {
  TW_CLASS = TW_CLASS;

  control = input<FormControl<string>>();
  isInvisible = signal<boolean>(true);
  placeholder = input<string>('Escribe aquí...');

  OPTGROUPDATA = input<any>();
  objCatSecOpt: Record<string, any> = {}; // A record of string keys and any values
  dataEntries: any;
  categoryName = input<string>('');
  categorySection = input<string>('');
  categoryItem = input<string>('');

  categorySelected: string | null = null;
  secOpSelected: any = null;
  secOpVolver: string = 'VOLVERselectCategory';
  showSecOpt = signal<boolean>(false);
  showCategories = signal<boolean>(false);

  selectSearchId = signal<string>('');
  private static idCounter = 0;


  ngOnInit(): void {
    // Generar ID único si no se proporciona
    this.selectSearchId.set(`cg-cat-section-select-search-${++CygnusCatSectionSearchSelectComponent.idCounter}`);

    // Recibir JSON para generar categorías y secciones
    this.setCategoriesAndSections();
    // Convert the record to an array of entries (key-value pairs)
    this.dataEntries = Object.entries(this.objCatSecOpt);
    this.dataEntries = Object.fromEntries(this.dataEntries);
    console.log('this.dataEntries:',this.dataEntries);
  }

  openUl() {
    if (!this.categorySelected) { // si no está seleccionada la categoría, mostrar menú de categorías
      this.showCategories.set(true);
    }
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
      // mostrar en la lista
      // cambiar color de la opción y que no se vuelva a seleccionar
    }
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
