import { Component } from '@angular/core';
import { CygnusCollapsibleComponent } from 'ngx-cygnus-ui/components/collapsible';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-collapsible-content',
  imports: [
    CygnusCollapsibleComponent,
    Highlight, HighlightLineNumbers,
  ],
  templateUrl: './collapsible-content.component.html',
  styleUrl: './collapsible-content.component.scss'
})
export class CollapsibleContentComponent {

  cygnusCollapsibleTs: string = `
    import { Component } from '@angular/core';
    import { CygnusCollapsibleComponent } from 'ngx-cygnus-ui/components/collapsible';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusCollapsibleComponent
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class CollapsibleComponentComponent {}
  `;

  cygnusCollapsibleHtml: string = `
    <cygnus-collapsible
      [collapsableTitle]="'Abrir Colapsable'"
    >
      Utilice este colapsable hecho en Tailwind. Puedes utilizarlo para acordeón, elementos plegables y mucho más.
    </cygnus-collapsible>
  `;

}
