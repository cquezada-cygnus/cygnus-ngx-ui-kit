import { Component } from '@angular/core';

import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';

import { TW_CLASS } from '../const/tailwind.const';

@Component({
  selector: 'cygnus-cat-section-search-select-disabled',
  imports: [
    NgxCygnusIconsComponent,
  ],
  templateUrl: './cygnus-cat-section-search-select-disabled.component.html',
})
export class CygnusCatSectionSearchSelectDisabledComponent {
  TW_CLASS = TW_CLASS;
}
