import { Component } from '@angular/core';
import { CygnusButtonComponent, CygnusButtonLinkComponent } from 'ngx-cygnus-ui/components/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-content',
  imports: [
    CygnusButtonComponent,
    CygnusButtonLinkComponent,
    RouterLink
],
  templateUrl: './button-content.component.html',
  styleUrl: './button-content.component.scss'
})
export class ButtonContentComponent {

}
