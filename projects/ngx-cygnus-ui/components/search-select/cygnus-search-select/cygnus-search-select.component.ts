import { Component, input, OnInit, output, signal } from '@angular/core';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { TW_CLASS } from '../const/tailwind.const';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { SelectGeneric } from 'ngx-cygnus-ui/interfaces';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'cygnus-search-select',
  imports: [
    ReactiveFormsModule,
    NgxCygnusIconsComponent,
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
    this.itemSelected.set(item);
    this.searchControl.patchValue(item.option);
    this.isInvisible.set(true);
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
