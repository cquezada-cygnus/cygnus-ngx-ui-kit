import { Component } from '@angular/core';
import { CygnusProgressbarComponent } from 'ngx-cygnus-ui/components/progressbar';

@Component({
  selector: 'app-progressbar-content',
  imports: [
    CygnusProgressbarComponent,
  ],
  templateUrl: './progressbar-content.component.html',
  styleUrl: './progressbar-content.component.scss'
})
export class ProgressbarContentComponent {

}
