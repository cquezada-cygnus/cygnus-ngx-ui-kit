import { Component, HostListener, input, OnInit, signal } from '@angular/core';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { TW_CLASS } from '../const/tailwind.const';
import { SelectCollection, SelectCollectOptions, SelectGeneric } from 'ngx-cygnus-ui/interfaces';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'cygnus-menu-search-select',
  imports: [
    ReactiveFormsModule,
    NgxCygnusIconsComponent,
  ],
  templateUrl: './cygnus-menu-search-select.component.html',
})
export class CygnusMenuSearchSelectComponent implements OnInit {
  private static idCounter = 0;
  drowpdownSearchId = signal<string>('');
  drowpdownSearchBtnId = signal<string>('');

  TW_CLASS = TW_CLASS;

  isInvisible = signal<boolean>(true);

  menuSearchContentArr = input<SelectCollectOptions[]>([]);
  menuSearchDefaultText = input<string>('Todas las categorías');

  menuSearchText = signal<string>('');

  searchControl = new FormControl('');
  items = signal<SelectGeneric[]>([]);
  filteredItems:SelectGeneric[] = [];

  placeholder = input<string>('Buscar...');

  ngOnInit() {
    // Generar ID único si no se proporciona
    this.drowpdownSearchId.set(`cg-dropdown-search-${++CygnusMenuSearchSelectComponent.idCounter}`);
    this.drowpdownSearchBtnId.set(`cg-dropdown-search-btn-${++CygnusMenuSearchSelectComponent.idCounter}`);

    this.menuSearchText.set(this.menuSearchDefaultText());

    // mostrar opciones según menú seleccionado
    this.searchControl.valueChanges.pipe(debounceTime(150)).subscribe(value => {
      if (value != '' && value != null && value != undefined) {
        this.filteredItems = this.items().filter( item =>
          item.option.toUpperCase().includes(value.toUpperCase())
        );
      } else {
        this.filteredItems = [];
      }
    });
  }

  toggleInvisible() {
    this.isInvisible.set(!this.isInvisible()); // invisibilizar opciones
  }

  selectMenu(selected: string, index: number) {
    this.menuSearchText.set(selected);
    this.isInvisible.set(true); // invisibilizar opciones
    this.items.set(this.menuSearchContentArr()[index].selects); // se debe mostrar en la búsqueda los items correspondientes al menu seleccionado
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (
      !(event.target == document.getElementById(this.drowpdownSearchId())) && // si NO se hace click en dropdown
      !(document.getElementById(this.drowpdownSearchId())?.contains(event.target as Node)) // si NO se hace click en hijos del dropdown
    ) {
      if (!this.isInvisible()) this.isInvisible.set(true); // invisibilizar opciones
    }
  }

}
