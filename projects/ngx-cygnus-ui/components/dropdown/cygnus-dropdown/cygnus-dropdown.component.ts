import { Component, HostListener, input, OnInit, signal } from '@angular/core';
import { CygnusButtonComponent } from 'ngx-cygnus-ui/components/button';
import { DropdownItemType } from 'ngx-cygnus-ui/types';
import { DropdownItemData } from 'ngx-cygnus-ui/interfaces';
import { CygnusDrowpdownItemComponent } from '../cygnus-drowpdown-item/cygnus-drowpdown-item.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cygnus-dropdown',
  imports: [
    CygnusButtonComponent,
    CygnusDrowpdownItemComponent,
  ],
  templateUrl: './cygnus-dropdown.component.html',
})
export class CygnusDropdownComponent implements OnInit {
  private static idCounter = 0;
  dropdownId = signal<string>('');
  control = input<FormControl<string>>();

  dropdownMenuTitle = input<string>('');
  dropdownItemType = input<DropdownItemType>('simple');
  dropdownRadioIconAsset = input<string>('');
  dropdownItemDataArr = input<DropdownItemData[]>([]);
  dropdownClosed = signal<boolean>(true);

  ngOnInit() {
    // Generar ID único si no se proporciona
    this.dropdownId.set(`cg-dropdown-${++CygnusDropdownComponent.idCounter}`);
  }

  toggleDropdown() {
    this.dropdownClosed.update( current => !current );
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (
      !(event.target == document.getElementById(this.dropdownId())) && // si NO se hace click en dropdown
      !(document.getElementById(this.dropdownId())?.contains(event.target as Node)) // si NO se hace click en hijos del dropdown
    ) {
      if (!this.dropdownClosed()) this.dropdownClosed.set(true); // invisibilizar opciones
    }
  }
}
