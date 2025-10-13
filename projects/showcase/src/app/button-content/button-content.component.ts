import { Component } from '@angular/core';
import { CygnusButtonComponent, CygnusButtonLinkComponent, CygnusButtonHoverAnimationComponent } from 'ngx-cygnus-ui/components/button';
import { RouterLink } from '@angular/router';
import { CygnusBadgeComponent } from 'ngx-cygnus-ui/components/badge';

@Component({
  selector: 'app-button-content',
  imports: [
    CygnusButtonComponent,
    CygnusButtonLinkComponent,
    CygnusButtonHoverAnimationComponent,
    RouterLink,
    CygnusBadgeComponent,
],
  templateUrl: './button-content.component.html',
  styleUrl: './button-content.component.scss'
})
export class ButtonContentComponent {

}
