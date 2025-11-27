import { Component } from '@angular/core';
import { CygnusTextareaComponent } from 'ngx-cygnus-ui/components/textarea';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-textarea-content',
  imports: [
    CygnusTextareaComponent,
    Highlight, HighlightLineNumbers,
  ],
  templateUrl: './textarea-content.component.html',
  styleUrl: './textarea-content.component.scss'
})
export class TextareaContentComponent {

  cygnusTextareaImportTs: string = `
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
    export class TextareaContentComponent {}
  `;

  cygnusTextareaHtml: string = `
    <cygnus-textarea
      [textareaPlaceholder]="'Escribe un comentario...'"
      [textareaType]="'simple'"
    />
  `;
  cygnusTextareaLabelHtml: string = `
    <cygnus-textarea
      [textareaLabel]="'Comentario'"
      [textareaPlaceholder]="'Escribe un comentario...'"
      [textareaType]="'label'"
    />
  `;
  cygnusTextareaDLHtml: string = `
    <cygnus-textarea
      [textareaPlaceholder]="'Escribe un comentario...'"
      [textareaType]="'dynamic-label'"
    />
  `;
}
