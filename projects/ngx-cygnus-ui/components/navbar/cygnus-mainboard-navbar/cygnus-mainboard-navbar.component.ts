import { Component, input } from '@angular/core';
import { NavbarItem } from 'ngx-cygnus-ui/interfaces';
import { CygnusButtonLinkComponent } from 'ngx-cygnus-ui/components/button';

@Component({
  selector: 'cygnus-mainboard-navbar',
  imports: [CygnusButtonLinkComponent],
  templateUrl: './cygnus-mainboard-navbar.component.html',
})
export class CygnusMainboardNavbarComponent {
  arrBtnLinkText = input<NavbarItem[]>();
}
