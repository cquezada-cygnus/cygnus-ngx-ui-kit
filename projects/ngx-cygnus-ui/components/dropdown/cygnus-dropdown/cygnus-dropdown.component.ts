import { Component, HostListener, input, model, OnInit, output, signal } from '@angular/core';
import { IconColorText, NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { CygnusButtonComponent } from 'ngx-cygnus-ui/components/button';
import { DropdownItemType } from 'ngx-cygnus-ui/types';
import { DropdownItemData } from 'ngx-cygnus-ui/interfaces';
import { CygnusDrowpdownItemComponent } from '../cygnus-drowpdown-item/cygnus-drowpdown-item.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cygnus-dropdown',
  imports: [
    NgxCygnusIconsComponent,
    CygnusButtonComponent,
    CygnusDrowpdownItemComponent,
  ],
  templateUrl: './cygnus-dropdown.component.html',
})
export class CygnusDropdownComponent implements OnInit {
  private static idCounter = 0;
  dropdownId = signal<string>('');
  control = input<FormControl<string>>();

  dropdownMenuTitle = model<string>('');
  dropdownItemType = input<DropdownItemType>('simple');
  dropdownRadioIconAsset = input<string>('');
  dropdownItemDataArr = input<DropdownItemData[]>([]);
  dropdownClosed = signal<boolean>(true);
  dropdownItemSelected = output<DropdownItemData | undefined>();

  iconBGColor = signal<IconColorText>('thrgray');

  ngOnInit() {
    // Generar ID único si no se proporciona
    this.dropdownId.set(`cg-dropdown-${++CygnusDropdownComponent.idCounter}`);
  }

  toggleDropdown() {
    this.dropdownClosed.update( current => !current );

  }

  iconColorOnMouseEnter() {
    this.iconBGColor.set('mediumblue');
  }

  iconColorOnMouseLeave() {
    this.iconBGColor.set('thrgray');
  }

  itemSelected(event: DropdownItemData | undefined) {
    console.log('cygnus-dropdown itemSelected:', event);
    if (this.dropdownItemType() != 'iconText') {
      this.dropdownMenuTitle.set(event?.itemText || this.dropdownMenuTitle());
    }
    this.dropdownItemSelected.emit(event);
    if (!this.dropdownClosed()) this.dropdownClosed.set(true); // invisibilizar opciones
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
