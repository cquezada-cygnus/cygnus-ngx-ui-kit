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

  cygnusCardIconTextTsExample: string = `
    import { Component } from '@angular/core';
    import {
      CygnusCardIconTextComponent,
    } from 'ngx-cygnus-ui/components/card';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusCardIconTextComponent,
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class AppComponentComponent {}
  `;

  cygnusCardSimpleLinkTsExample: string = `
    import { Component } from '@angular/core';
    import {
      CygnusCardSimpleLinkComponent,
    } from 'ngx-cygnus-ui/components/card';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusCardSimpleLinkComponent,
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class AppComponentComponent {
      cygnusCardSimpleLinkClick() {
        console.log('cygnus-card-simple-link was clicked');
      }
    }
  `;

  cygnusCardMainboardTsExample: string = `
    import { Component } from '@angular/core';
    import {
      CygnusMainboardCardComponent,
    } from 'ngx-cygnus-ui/components/card';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusMainboardCardComponent,
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class AppComponentComponent {
      cygnusMainboardCardClicked() {
        console.log('cygnus-mainboard-card was clicked');
      }
    }
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

  cygnusCardIconTextHTMLExample: string = `
    <cygnus-card-icon-text
      [iconSize]="'40px'"
      [iconColor]="'#528bff'"
      [iconRoute]="'assets/icons/svg/Charts/presentation-chart-01.svg'"
      [cardText]="'Administración de RRHH Cygnus'"
    />
  `;

  cygnusCardSimpleLinkHTMLExample: string = `
    <cygnus-card-simple-link
      [cardTitle]="'Título de la tarjeta'"
      [cardSubtitle]="'Subtítulo de la tarjeta'"
      [cardText]="'Un texto de ejemplo rápido para ampliar el título de la tarjeta y constituir la mayor parte del contenido de la tarjeta.'"
      [cardLinkText]="'Enlace de tarjeta'"
      (clicked)="cygnusCardSimpleLinkClick()"
    />
  `;

  cygnusCardMainboardHTMLExample: string = `
    <cygnus-mainboard-card
      [cardTitle]="'Administración de RRHH'"
      [cardText]="'Optimiza los proyectos de software, los sprints y el seguimiento de errores.'"
      [cardLinkText]="'Ingresar'"
      (cardLinkClicked)="cygnusMainboardCardClicked()"
    />
  `;

  cygnusCardMainboardDefaultHTMLExample: string = `
    <cygnus-mainboard-card
      [cardTitle]="''"
      [cardText]="''"
      [cardLinkText]="'Ingresar'"

      [iconLeftColor]="'#155eef'"
      [iconLeftAsset]="'assets/icons/svg/General/speedometer-04.svg'"
      [iconLeftSize ]="'3rem'"

      [iconRightColor]="'#fdb022'"
      [iconRightAsset]="'assets/icons/svg/General/hearts.svg'"
      [iconRightSize ]="'1.1rem'"

      [iconArrowColor]="'#155eef'"
      [iconArrowAsset]="'assets/icons/svg/Arrows/arrow-narrow-right.svg'"
      [iconArrowSize ]="'1rem'"
    />
  `;

  cygnusCardImageClick() {
    console.log('cygnus-card-image was clicked');
  }

  cygnusCardSimpleLinkClick() {
    console.log('cygnus-card-simple-link was clicked');
  }

  cygnusMainboardCardClicked() {
    console.log('cygnus-mainboard-card was clicked');
  }

}
