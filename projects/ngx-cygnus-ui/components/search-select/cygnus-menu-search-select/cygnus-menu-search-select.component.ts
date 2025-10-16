import { Component, HostListener, signal } from '@angular/core';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { TW_CLASS } from '../const/tailwind.const';

@Component({
  selector: 'cygnus-menu-search-select',
  imports: [NgxCygnusIconsComponent],
  templateUrl: './cygnus-menu-search-select.component.html',
})
export class CygnusMenuSearchSelectComponent {
  TW_CLASS = TW_CLASS;

  isInvisible = signal<boolean>(true);

  toggleInvisible() {
    this.isInvisible.set(!this.isInvisible()); // invisibilizar opciones
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (
      !(event.target == document.getElementById("dropdown-div")) && // si NO se hace click en dropdown
      !(document.getElementById("dropdown-div")?.contains(event.target as Node)) // si NO se hace click en hijos del dropdown
    ) {
      if (!this.isInvisible()) this.isInvisible.set(true); // invisibilizar opciones
    }
  }

}
