import { Component } from '@angular/core';
import { CygnusMenuSearchSelectComponent, CygnusSearchSelectComponent } from 'ngx-cygnus-ui/components/search-select';

@Component({
  selector: 'app-select-search-content',
  imports: [
    CygnusSearchSelectComponent,
    CygnusMenuSearchSelectComponent,
  ],
  templateUrl: './select-search-content.component.html',
  styleUrl: './select-search-content.component.scss'
})
export class SelectSearchContentComponent {

}
