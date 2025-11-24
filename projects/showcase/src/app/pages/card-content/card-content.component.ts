import { Component } from '@angular/core';
import {
  CygnusCardIconTextComponent,
  CygnusCardImageComponent,
  CygnusCardSimpleLinkComponent,
  CygnusCardLoginComponent,
  CygnusCardShowValidatorsComponent,
  CygnusCardTitleTextComponent,
  CygnusMainboardCardComponent,
  CygnusCardSelectsComponent,
} from 'ngx-cygnus-ui/components/card';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';


@Component({
  selector: 'app-card-content',
  imports: [
    CygnusCardImageComponent,
    CygnusCardTitleTextComponent,
    CygnusCardIconTextComponent,
    CygnusCardSimpleLinkComponent,
    CygnusMainboardCardComponent,
    CygnusCardLoginComponent,
    CygnusCardShowValidatorsComponent,
    CygnusCardSelectsComponent,
    Highlight, HighlightLineNumbers,
  ],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.scss'
})
export class CardContentComponent {

  cygnusCardExample: string = `
    import { Component } from '@angular/core';
    import {
      CygnusCardIconTextComponent,
      CygnusCardImageComponent,
      CygnusCardSimpleLinkComponent,
      CygnusCardLoginComponent,
      CygnusCardShowValidatorsComponent,
      CygnusCardTitleTextComponent,
      CygnusMainboardCardComponent,
      CygnusCardSelectsComponent,
    } from 'ngx-cygnus-ui/components/card';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusCardImageComponent,
        CygnusCardTitleTextComponent,
        CygnusCardIconTextComponent,
        CygnusCardSimpleLinkComponent,
        CygnusMainboardCardComponent,
        CygnusCardLoginComponent,
        CygnusCardShowValidatorsComponent,
        CygnusCardSelectsComponent,
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class AppComponentComponent {}
  `;

  cygnusCardImageTsExample: string = `
    import { Component } from '@angular/core';
    import {
      CygnusCardImageComponent,
    } from 'ngx-cygnus-ui/components/card';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusCardImageComponent,
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class AppComponentComponent {
      cygnusCardImageClick() {
        console.log('cygnus-card-image was clicked');
      }
    }
  `;

  cygnusCardTitleTextTsExample: string = `
    import { Component } from '@angular/core';
    import {
      CygnusCardTitleTextComponent,
    } from 'ngx-cygnus-ui/components/card';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusCardTitleTextComponent,
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class AppComponentComponent {}
  `;

  cygnusCardImageHTMLExample: string = `
    <cygnus-card-image
      [imgSrc]="'https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80'"
      [imgAlt]="'Card Image'"
      [cardTitle]="'Titulo de la tarjeta'"
      [cardText]="'Un texto de ejemplo rápido que se basa en el título de la tarjeta y constituye el grueso de su contenido.'"
      [cardButtonText]="'Ir a alguna parte'"
      (clicked)="cygnusCardImageClick()"
    />
  `;

  cygnusCardTitleTextHTMLExample: string = `
    <cygnus-card-title-text
      [cardTitle]="'Cygnus - gestión de equipos colaborativos'"
      [cardText]="'Este es un texto dentro del cuerpo de una tarjeta.'"
    />
  `;

  cygnusCardImageClick() {
    console.log('cygnus-card-image was clicked');
  }

}
