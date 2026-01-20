import { Component, input, OnInit, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { TW_CLASS } from '../const/tailwind.const';

@Component({
  selector: 'cygnus-optgroup-select',
  imports: [
    CommonModule,
  ],
  templateUrl: './cygnus-optgroup-select.component.html',
  styles: `select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23667085' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
    -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
  }`
})
export class CygnusOptgroupSelectComponent implements OnInit {
  private static idCounter = 0;

  control = input<FormControl<string>>();
  isSelected = output<string>();

  TW_CLASS = TW_CLASS;
  selId = signal<string>('');
  selIdOptGroup = signal<string>('');
  selSize = input<string>('');
  isDisabled = input<boolean>(false);
  selState = input<string>('');
  selectLabel = input<string>('');
  selectHint = input<string>('');

  objCatSecOpt: Record<string, any> = {}; // A record of string keys and any values
  dataEntries: any;
  OPTGROUPDATA = input<any>();
  categoryName = input<string>('');
  categorySection = input<string>('');
  categoryItem = input<string>('');

  categorySelected: string | null = null;
  showOptgroup = signal<boolean>(false);

  ngOnInit() {
    // Generar ID único si no se proporciona
    this.selId.set(`cg-optgroup-select-cat${++CygnusOptgroupSelectComponent.idCounter}`);
    this.selIdOptGroup.set(`cg-optgroup-select-sec${++CygnusOptgroupSelectComponent.idCounter}`);

    // Recibir JSON para generar categorías y secciones
    this.setCategoriesAndSections();
    // Convert the record to an array of entries (key-value pairs)
    this.dataEntries = Object.entries(this.objCatSecOpt);
    this.dataEntries = Object.fromEntries(this.dataEntries);
    console.log('this.dataEntries:',this.dataEntries);

  }

  onCategorySelected(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.categorySelected = target.value;

    if (!this.categorySelected) return;
    this.showOptgroup.set(true);
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

    console.log('this.objCatSecOpt:',this.objCatSecOpt);

  }

  setValue(value:string ) {
    this.control()?.setValue(value);
    this.control()?.markAsDirty();
    this.control()?.markAsTouched();
    this.isSelected.emit(value);
  }

  selGetSize():string {
    switch (this.selSize()) {
      case 'xs':
        return this.TW_CLASS.SELECT_XS;
      case 'lg':
        return this.TW_CLASS.SELECT_LG;
      default:
        return '';
    }
  }

  selGetType():string {
    switch (this.selState()) {
      case 'error':
        return this.TW_CLASS.SELECT_ERROR;
      case 'success':
        return this.TW_CLASS.SELECT_SUCCESS;
      default:
        return this.TW_CLASS.SELECT_GENERIC;
    }
  }

}
