import { Component } from '@angular/core';
import { CygnusBadgeComponent } from 'ngx-cygnus-ui/components/badge';
import { CygnusButtonComponent } from 'ngx-cygnus-ui/components/button';

@Component({
  selector: 'app-badge-content',
  imports: [
    CygnusBadgeComponent,
    CygnusButtonComponent,
  ],
  templateUrl: './badge-content.component.html',
  styleUrl: './badge-content.component.scss'
})
export class BadgeContentComponent {

}
