import { Component, input, OnInit, signal } from '@angular/core';
import { RouterLink, } from '@angular/router';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { TW_CLASS } from '../const/tailwind.const';
import { BreadcrumbItem, DropdownItemData } from 'ngx-cygnus-ui/interfaces';
import { CygnusDropdownComponent } from 'ngx-cygnus-ui/components/dropdown';

@Component({
  selector: 'cygnus-breadcrumb',
  imports: [
    RouterLink,
    NgxCygnusIconsComponent,
    CygnusDropdownComponent,
  ],
  templateUrl: './cygnus-breadcrumb.component.html',
})
export class CygnusBreadcrumbComponent implements OnInit {
  TW_CLASS = TW_CLASS;

  itemsArr = input<BreadcrumbItem[]>([]);
  setBlock = input<boolean>(false);
  setMoreIcon = input<boolean>(false);
  iconColor = signal<string>('#344054');

  moreIconArrLeft: BreadcrumbItem[] = [];
  moreIconArrDropdown: DropdownItemData[] = [];
  moreIconArrRight: BreadcrumbItem[] = [];

  iconColorOnMouseEnter() {
    this.iconColor.set('#1447e6'); // azul
  }

  iconColorOnMouseLeave() {
    this.iconColor.set('#344054'); // gris oscuro
  }

  ngOnInit(): void {
    if (this.setMoreIcon()) {
      for (let i = 0; i < this.itemsArr().length; i++) {
        const elem = this.itemsArr()[i];
        if (elem.notDropdownLeft) {
          this.moreIconArrLeft.push(elem);
        } else if (elem.notDropdownRight) {
          this.moreIconArrRight.push(elem);
        } else if (elem.dropdownMenu) {
          const elemDropdownMenu: DropdownItemData = {itemText: elem.itemText || '', iconAssetText: elem.iconAssetText || '', routerLinkText: elem.routerLinkText || './' }
          this.moreIconArrDropdown.push(elemDropdownMenu);
        }
      }
    }
  }

}
