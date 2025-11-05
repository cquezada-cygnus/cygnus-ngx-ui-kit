import { Component, input } from '@angular/core';
import { RouterLink, } from '@angular/router';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { TW_CLASS } from '../const/tailwind.const';
import { CygnusButtonLinkComponent } from 'ngx-cygnus-ui/components/button';
import { BreadcrumbItem } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'cygnus-breadcrumb',
  imports: [
    RouterLink,
    NgxCygnusIconsComponent,
    CygnusButtonLinkComponent,
  ],
  templateUrl: './cygnus-breadcrumb.component.html',
})
export class CygnusBreadcrumbComponent {
  TW_CLASS = TW_CLASS;

  itemsArr = input<BreadcrumbItem[]>([]);

}
