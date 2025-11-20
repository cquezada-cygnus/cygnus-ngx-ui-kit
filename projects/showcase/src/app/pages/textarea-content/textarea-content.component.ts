import { Component } from '@angular/core';
import { CygnusTextareaComponent } from 'ngx-cygnus-ui/components/textarea';

@Component({
  selector: 'app-textarea-content',
  imports: [
    CygnusTextareaComponent,
  ],
  templateUrl: './textarea-content.component.html',
  styleUrl: './textarea-content.component.scss'
})
export class TextareaContentComponent {

}
