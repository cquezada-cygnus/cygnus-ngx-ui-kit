import { Component } from '@angular/core';
import { CygnusPaginationComponent } from 'ngx-cygnus-ui/components/pagination';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-pagination-content',
  imports: [
    CygnusPaginationComponent,
    Highlight, HighlightLineNumbers,
  ],
  templateUrl: './pagination-content.component.html',
  styleUrl: './pagination-content.component.scss'
})
export class PaginationContentComponent {
  currentCounter: number = 2;
  currentCounterSimple: number = 2;
  currentCounterCircle: number = 2;

  importCygnusPaginationTs: string = `
    import { Component } from '@angular/core';
    import { CygnusPaginationComponent } from 'ngx-cygnus-ui/components/pagination';

    @Component({
      selector: 'app-pagination-content',
      imports: [
        CygnusPaginationComponent,
      ],
      templateUrl: './pagination-content.component.html',
      styleUrl: './pagination-content.component.scss'
    })
    export class PaginationContentComponent {
      currentCounter: number = 2;
    }
  `;

  importCygnusPaginationCircleTs: string = `
    import { Component } from '@angular/core';
    import { CygnusPaginationComponent } from 'ngx-cygnus-ui/components/pagination';

    @Component({
      selector: 'app-pagination-content',
      imports: [
        CygnusPaginationComponent,
      ],
      templateUrl: './pagination-content.component.html',
      styleUrl: './pagination-content.component.scss'
    })
    export class PaginationContentComponent {
      currentCounterSimple: number = 2;
    }
  `;

  importCygnusPaginationSimpleTs: string = `
    import { Component } from '@angular/core';
    import { CygnusPaginationComponent } from 'ngx-cygnus-ui/components/pagination';

    @Component({
      selector: 'app-pagination-content',
      imports: [
        CygnusPaginationComponent,
      ],
      templateUrl: './pagination-content.component.html',
      styleUrl: './pagination-content.component.scss'
    })
    export class PaginationContentComponent {
      currentCounterCircle: number = 2;
    }
  `;

  cygnusPaginationHtml: string = `
    <!-- COMPONENTE: Paginación normal -->
    <cygnus-pagination
      [paginationType]="'normal'"
      [(currentCounter)]="currentCounter"
      [maxCounter]="5"
    />
  `;

  cygnusPaginationCircleHtml: string = `
    <!-- COMPONENTE: Paginación circular -->
    <cygnus-pagination
      [paginationType]="'circle'"
      [(currentCounter)]="currentCounterCircle"
      [maxCounter]="5"
    />
  `;

  cygnusPaginationSimpleHtml: string = `
    <cygnus-pagination
      [paginationType]="'simple'"
      [(currentCounter)]="currentCounterSimple"
      [maxCounter]="10"
    />
  `;

}
