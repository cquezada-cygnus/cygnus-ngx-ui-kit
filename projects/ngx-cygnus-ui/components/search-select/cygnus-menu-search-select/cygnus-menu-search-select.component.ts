import { Component, HostListener, input, OnInit, signal } from '@angular/core';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { TW_CLASS } from '../const/tailwind.const';
import { SelectCollection } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'cygnus-menu-search-select',
  imports: [NgxCygnusIconsComponent],
  templateUrl: './cygnus-menu-search-select.component.html',
})
export class CygnusMenuSearchSelectComponent implements OnInit {
  private static idCounter = 0;
  drowpdownSearchId = signal<string>('');
  drowpdownSearchBtnId = signal<string>('');

  TW_CLASS = TW_CLASS;

  isInvisible = signal<boolean>(true);

  menuSearchContentArr = input<SelectCollection[]>([]);
  menuSearchDefaultText = input<string>('Todas las categorías');

  menuSearchText = signal<string>('');

  ngOnInit() {
    // Generar ID único si no se proporciona
    this.drowpdownSearchId.set(`cg-dropdown-search-${++CygnusMenuSearchSelectComponent.idCounter}`);
    this.drowpdownSearchBtnId.set(`cg-dropdown-search-btn-${++CygnusMenuSearchSelectComponent.idCounter}`);

    this.menuSearchText.set(this.menuSearchDefaultText());
  }

  toggleInvisible() {
    this.isInvisible.set(!this.isInvisible()); // invisibilizar opciones
  }

  selectMenu(selected: string) {
    this.menuSearchText.set(selected);
    this.isInvisible.set(true); // invisibilizar opciones
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
