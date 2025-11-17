import { Component, input, OnInit, signal } from '@angular/core';
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

  placeholder = input<string>('Escribe aquí...');

  ngOnInit(): void {
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

}
