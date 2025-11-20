import { Component } from '@angular/core';
import { CygnusAccordionComponent } from 'ngx-cygnus-ui/components/accordion';

@Component({
  selector: 'app-accordion-content',
  imports: [
    CygnusAccordionComponent
  ],
  templateUrl: './accordion-content.component.html',
  styleUrl: './accordion-content.component.scss'
})
export class AccordionContentComponent {

}
