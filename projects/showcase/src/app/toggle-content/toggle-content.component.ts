import { Component } from '@angular/core';
import { CygnusToggleComponent } from 'ngx-cygnus-ui/components/toggle';

@Component({
  selector: 'app-toggle-content',
  imports: [
    CygnusToggleComponent,
  ],
  templateUrl: './toggle-content.component.html',
  styleUrl: './toggle-content.component.scss'
})
export class ToggleContentComponent {

}
