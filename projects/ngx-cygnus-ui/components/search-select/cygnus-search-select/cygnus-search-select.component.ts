import { Component, input, model, OnInit, output, signal, inject, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { CygnusBadgeComponent } from 'ngx-cygnus-ui/components/badge';
import { TW_CLASS } from '../const/tailwind.const';
import { SelectGeneric } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'cygnus-search-select',
  imports: [
    ReactiveFormsModule,
    NgxCygnusIconsComponent,
    CygnusBadgeComponent,
  ],
  templateUrl: './cygnus-search-select.component.html',
})
export class CygnusSearchSelectComponent implements OnInit {
  TW_CLASS = TW_CLASS;

  searchControl = new FormControl('');
  items = input<SelectGeneric[]>([]);
  filteredItems:SelectGeneric[] = [];
  emptyItemSelected: SelectGeneric = {value: null, option: ''};
  itemSelected = signal<SelectGeneric>(this.emptyItemSelected);
  isInvisible = signal<boolean>(true);

  typeAutoSearch = input<boolean>(false);

  placeholder = input<string>('Escribe aquí...');

  showOptionsAutomatically = input<boolean>(false);
  outputSearch = output<string | [string, SelectGeneric]>();

  multisearch = model<boolean>(false);
  multisearchArr:SelectGeneric[] = [];
  outputMultisearch = output<SelectGeneric[]>();



  ngOnInit(): void {
    if (this.showOptionsAutomatically()) {
      this.searchControl.valueChanges.pipe(debounceTime(150)).subscribe(value => {
        if (value != '' && value != null && value != undefined && this.itemSelected().option!=value) {
          this.filteredItems = this.items().filter( item =>
            item.option.toUpperCase().includes(value.toUpperCase())
          );
          this.isInvisible.set(false);
        } else {
          this.filteredItems = [];
          this.isInvisible.set(true);
        }
      });
    }
  }

  setInputSearchAfterChooseOption(item: SelectGeneric) {
    if (this.multisearch()) {
      const foundSearch: SelectGeneric | undefined = this.multisearchArr.find(itemSearch => itemSearch.option === item.option );
      if (!foundSearch) { // ver si el elemento ya está en la lista antes de agregarlo otra vez
        this.multisearchArr.push(item);
      }
      this.searchControl.patchValue('');
      this.isInvisible.set(true);
      this.sendSearchMultisearch();
    } else {
      this.itemSelected.set(item);
      this.searchControl.patchValue(item.option);
      this.isInvisible.set(true);
    }
  }

  deleteMultisearchItem(item: SelectGeneric) {
    this.multisearchArr = this.multisearchArr.filter(s => s !== item);
    this.sendSearchMultisearch(); // enviar evento para actualizar el multisearch vigente
  }

  sendSearchMultisearch() {
    this.outputMultisearch.emit(this.multisearchArr);
  }

  sendSearch() {
    if (!this.showOptionsAutomatically()) {
      this.outputSearch.emit(this.searchControl.value || '');
    } else {
      this.outputSearch.emit([ this.searchControl.value || '', this.itemSelected()||this.emptyItemSelected ]);
      this.itemSelected.set(this.emptyItemSelected);
    }
    if(!this.typeAutoSearch()) this.searchControl.patchValue('');
  }

  keyupSendSearch() {
    if(this.typeAutoSearch()) this.sendSearch();
  }

}
