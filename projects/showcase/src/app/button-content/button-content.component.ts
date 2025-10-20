import { Component } from '@angular/core';
import {
  CygnusButtonComponent,
  CygnusButtonLinkComponent,
  CygnusButtonHoverAnimationComponent
} from 'ngx-cygnus-ui/components/button';

@Component({
  selector: 'app-button-content',
  imports: [
    CygnusButtonComponent,
    CygnusButtonLinkComponent,
    CygnusButtonHoverAnimationComponent,
],
  templateUrl: './button-content.component.html',
  styleUrl: './button-content.component.scss'
})
export class ButtonContentComponent {

}
