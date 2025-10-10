import { Component, input, OnInit, signal, WritableSignal } from '@angular/core';
import { TW_CLASS } from '../const/tailwind.const';
import { IconBtnColor, IconBtnSize, IconPosition } from 'ngx-cygnus-ui/types';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';

@Component({
  selector: 'cygnus-badge',
  imports: [NgxCygnusIconsComponent],
  templateUrl: './cygnus-badge.component.html',
})
export class CygnusBadgeComponent implements OnInit {
  TW_CLASS = TW_CLASS; // esto fue creado para reemplazar @apply de tailwind, ya la documentación de tailwind 4 recomienda no usar @apply y se dice que no funciona muy bien en angular.

  badgeTypes = input<string>('');
  badgeText = input<string>('');
  badgeAllClasses:WritableSignal<string> = signal<string>('');
  badgeIconAsset = input<string>('');
  badgeIconPosition = input<IconPosition>('right');
  badgeIconColor = input<IconBtnColor>('#344054');
  badgeIconOnly: boolean = false;
  badgeIconSize: IconBtnSize = '1.25rem';


  ngOnInit(){
    const setClasses = this.setBadgeClasses(this.getBadgeClasses(this.badgeTypes()));
    this.badgeAllClasses.set(setClasses);
  }

  getBadgeClasses(stringClasses: string): string[] {
    return stringClasses.split(' ');
  }

  setBadgeClasses(arrStringClasses: string[]): string {
    let stringClasses = '';
    for (let i = 0; i < arrStringClasses.length; i++) {
      const elem = arrStringClasses[i];
      stringClasses = stringClasses + (this.addTailwindClasses(elem) + ' ');
    }
    return stringClasses;
  }

  addTailwindClasses(customClass: string): string {
    this.badgeIconOnly = false;
    switch (customClass) {
      case 'badge-xs':
        return this.TW_CLASS.BADGE_XS;
      case 'badge-sm':
        return this.TW_CLASS.BADGE_SM;
      case 'badge':
        return this.TW_CLASS.BADGE;
      case 'badge-lg':
        return this.TW_CLASS.BADGE_LG;
      case 'badge-primary':
        return this.TW_CLASS.BADGE_PRIMARY;
      case 'badge-gray':
        return this.TW_CLASS.BADGE_GRAY;
      case 'badge-error':
        return this.TW_CLASS.BADGE_ERROR;
      case 'badge-warning':
        return this.TW_CLASS.BADGE_WARNING;
      case 'badge-success':
        return this.TW_CLASS.BADGE_SUCCESS;
      case 'badge-pink':
        return this.TW_CLASS.BADGE_PINK;
      case 'badge-purple':
        return this.TW_CLASS.BADGE_PURPLE;
      case 'badge-indigo':
        return this.TW_CLASS.BADGE_INDIGO;
      case 'badge-icon':
        return this.TW_CLASS.BADGE_ICON;
      case 'badge-icon-only':
        this.badgeIconOnly = true;
        return this.TW_CLASS.BADGE_ICON_ONLY;
      default:
        return '';
    }
  }

}
