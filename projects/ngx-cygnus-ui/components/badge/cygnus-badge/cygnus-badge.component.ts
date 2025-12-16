import { Component, input, OnInit, signal, WritableSignal } from '@angular/core';
import { TW_CLASS } from '../const/tailwind.const';
import { IconPosition } from 'ngx-cygnus-ui/types';
import { IconColorText, IconTextSize, NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';

@Component({
  selector: 'cygnus-badge',
  imports: [
    NgxCygnusIconsComponent,
  ],
  templateUrl: './cygnus-badge.component.html',
})
export class CygnusBadgeComponent implements OnInit {
  TW_CLASS = TW_CLASS; // esto fue creado para reemplazar @apply de tailwind, ya la documentación de tailwind 4 recomienda no usar @apply y se dice que no funciona muy bien en angular.

  badgeTypes = input<string>('');
  badgeText = input<string>('');
  badgeAllClasses:WritableSignal<string> = signal<string>('');
  badgeIconAsset = input<string>('');
  badgeIconPosition = input<IconPosition>('right');
  badgeIconColor = input<IconColorText>('thrgray');
  badgeIconOnly: boolean = false;
  badgeIconSize: IconTextSize = 'lg';
  btnBadge: boolean = false;
  badgeState: boolean = false;
  btnBadgeOutlined: boolean = false;
  badgeStateClassesIcon: string = '';
  badgeIsClosed = signal<boolean>(false);
  xBGColor = signal<IconColorText>('white');

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
    this.btnBadge = false;
    this.badgeState = false;
    this.btnBadgeOutlined = false;
    this.badgeStateClassesIcon = '';
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
        return this.TW_CLASS.BADGE_RED;
      case 'badge-warning':
        return this.TW_CLASS.BADGE_YELLOW;
      case 'badge-success':
        return this.TW_CLASS.BADGE_GREEN;
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
      case 'badge-btn':
        this.btnBadge = true;
        return this.TW_CLASS.BADGE_BTN;
      case 'badge-btn-outlined':
        this.btnBadge = true;
        this.btnBadgeOutlined = true;
        this.xBGColor.set('mediumblue');
        return this.TW_CLASS.BADGE_BTN_OUTLINED;
      case 'badge-state-success':
        this.badgeState = true;
        this.badgeStateClassesIcon = this.TW_CLASS.BADGE_STATE_ICON_GREEN;
        return this.TW_CLASS.BADGE_STATE_GREEN;
      case 'badge-state-error':
        this.badgeState = true;
        this.badgeStateClassesIcon = this.TW_CLASS.BADGE_STATE_ICON_RED;
        return this.TW_CLASS.BADGE_STATE_RED;
      default:
        return '';
    }
  }

  badgeClose() {
    this.badgeIsClosed.set(true);
  }

  xColorOnMouseEnter() {
    if (this.btnBadgeOutlined) {
      this.xBGColor.set('white');
    }
  }

  xColorOnMouseLeave() {
    if (this.btnBadgeOutlined) {
      this.xBGColor.set('mediumblue');
    }
  }

}
