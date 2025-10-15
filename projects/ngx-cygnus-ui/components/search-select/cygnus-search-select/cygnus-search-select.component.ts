import { Component } from '@angular/core';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { TW_CLASS } from '../const/tailwind.const';

@Component({
  selector: 'cygnus-search-select',
  imports: [
    NgxCygnusIconsComponent,
  ],
  templateUrl: './cygnus-search-select.component.html',
})
export class CygnusSearchSelectComponent {
  TW_CLASS = TW_CLASS;

}
