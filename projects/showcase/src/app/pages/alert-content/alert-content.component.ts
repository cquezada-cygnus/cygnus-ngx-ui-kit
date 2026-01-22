import { Component } from '@angular/core';

import {
  CygnusAlertContenidoComponent,
  CygnusAlertCounterBlockedComponent,
  CygnusAlertSimpleComponent,
  CygnusAlertModalComponent,
} from 'ngx-cygnus-ui/components/alert';

import { CygnusButtonComponent, } from 'ngx-cygnus-ui/components/button';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-alert-content',
  imports: [
    CygnusAlertSimpleComponent,
    CygnusAlertContenidoComponent,
    CygnusAlertCounterBlockedComponent,
    CygnusAlertModalComponent,
    CygnusButtonComponent,
    Highlight, HighlightLineNumbers,
  ],
  templateUrl: './alert-content.component.html',
  styleUrl: './alert-content.component.scss'
})
export class AlertContentComponent {

  showModalAlert: boolean = false;

  importCygnusAlertSimple: string = `
    import { Component } from '@angular/core';
    import {
      CygnusAlertSimpleComponent
    } from 'ngx-cygnus-ui/components/alert';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusAlertSimpleComponent,
      ],
      templateUrl: './app-component.component.html',
    })
    export class AppComponentComponent {}
  `;

  importCygnusAlertContenido: string = `
    import { Component } from '@angular/core';
    import {
      CygnusAlertContenidoComponent
    } from 'ngx-cygnus-ui/components/alert';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusAlertContenidoComponent,
      ],
      templateUrl: './app-component.component.html',
    })
    export class AppComponentComponent {}
  `;

  importCygnusAlertCounterBlocked: string = `
    import { Component } from '@angular/core';
    import {
      CygnusAlertCounterBlockedComponent
    } from 'ngx-cygnus-ui/components/alert';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusAlertCounterBlockedComponent,
      ],
      templateUrl: './app-component.component.html',
    })
    export class AppComponentComponent {}
  `;

  exampleAlert: string = `
    <!-- COMPONENTE: Alerta de información -->
    <cygnus-alert-simple
      [alertTypes]="'alert-primary'"
      [alertTitle]="'¡Alerta de información!'"
      [alertContent]="'Cambie algunas cosas e intente enviar de nuevo.'"
    />
  `;

  exampleAlertContenido: string = `
    <cygnus-alert-contenido
      [btnIsFull]="true"
      [alertTypes]="'alert-primary'"
      [alertTitle]="'Esto es una alerta informativa'"
      [alertContent]="'
        Más información sobre este éxito informativo aquí. Este texto de ejemplo va a ser un poco más largo para que puedas ver cómo funciona el espaciado dentro de una alerta con este tipo de contenido.
      '"
    />
  `;

  exampleAlertCounterBlocked: string = `
    <cygnus-alert-counter-blocked
      [tryCounter]="0"
    />
  `;

  exampleAlertCounterBlockedEvent() {
    console.log('AlertCounterBlocked click event');
  }

  alertSimple: string = `
    <!-- COMPONENTE: Alerta de información -->
    <cygnus-alert-simple
      [alertTypes]="'alert-primary'"
      [alertTitle]="'¡Alerta de información!'"
      [alertContent]="'Cambie algunas cosas e intente enviar de nuevo.'"
    />

    <!-- COMPONENTE: Alerta de error -->
      <cygnus-alert-simple
      [alertTypes]="'alert-red'"
      [alertTitle]="'¡Alerta de error!'"
      [alertContent]="'Cambie algunas cosas e intente enviar de nuevo.'"
    />

    <!-- COMPONENTE: Alerta de éxito -->
      <cygnus-alert-simple
      [alertTypes]="'alert-green'"
      [alertTitle]="'¡Alerta de éxito!'"
      [alertContent]="'Cambie algunas cosas e intente enviar de nuevo.'"
    />

    <!-- COMPONENTE: Alerta de advertencia -->
      <cygnus-alert-simple
      [alertTypes]="'alert-yellow'"
      [alertTitle]="'¡Alerta de advertencia!'"
      [alertContent]="'Cambie algunas cosas e intente enviar de nuevo.'"
    />

    <!-- COMPONENTE: Alerta simple -->
      <cygnus-alert-simple
      [alertTypes]="'alert-gray'"
      [alertTitle]="'¡Alerta simple!'"
      [alertContent]="'Cambie algunas cosas e intente enviar de nuevo.'"
    />
  `;

  alertIconSimple: string = `
    <!-- COMPONENTE: Alerta de información -->
    <cygnus-alert-simple
      [alertTypes]="'alert-primary'"
      [alertIcon]="true"
      [alertTitle]="'¡Alerta de información!'"
      [alertContent]="'Cambie algunas cosas e intente enviar de nuevo.'"
    />

    <!-- COMPONENTE: Alerta de error -->
      <cygnus-alert-simple
      [alertTypes]="'alert-red'"
      [alertIcon]="true"
      [alertTitle]="'¡Alerta de error!'"
      [alertContent]="'Cambie algunas cosas e intente enviar de nuevo.'"
    />

    <!-- COMPONENTE: Alerta de éxito -->
      <cygnus-alert-simple
      [alertTypes]="'alert-green'"
      [alertIcon]="true"
      [alertTitle]="'¡Alerta de éxito!'"
      [alertContent]="'Cambie algunas cosas e intente enviar de nuevo.'"
    />

    <!-- COMPONENTE: Alerta de advertencia -->
      <cygnus-alert-simple
      [alertTypes]="'alert-yellow'"
      [alertIcon]="true"
      [alertTitle]="'¡Alerta de advertencia!'"
      [alertContent]="'Cambie algunas cosas e intente enviar de nuevo.'"
    />

    <!-- COMPONENTE: Alerta simple -->
      <cygnus-alert-simple
      [alertTypes]="'alert-gray'"
      [alertIcon]="true"
      [alertTitle]="'¡Alerta simple!'"
      [alertContent]="'Cambie algunas cosas e intente enviar de nuevo.'"
    />
  `;

  alertIconXSimple: string = `
    <!-- COMPONENTE: Alerta de información -->
    <cygnus-alert-simple
      [alertTypes]="'alert-primary'"
      [alertIcon]="true"
      [alertEquis]="true"
      [alertTitle]="'¡Alerta de información!'"
      [alertContent]="'Cambie algunas cosas e intente enviar de nuevo.'"
    />

    <!-- COMPONENTE: Alerta de error -->
      <cygnus-alert-simple
      [alertTypes]="'alert-red'"
      [alertIcon]="true"
      [alertEquis]="true"
      [alertTitle]="'¡Alerta de error!'"
      [alertContent]="'Cambie algunas cosas e intente enviar de nuevo.'"
    />

    <!-- COMPONENTE: Alerta de éxito -->
      <cygnus-alert-simple
      [alertTypes]="'alert-green'"
      [alertIcon]="true"
      [alertEquis]="true"
      [alertTitle]="'¡Alerta de éxito!'"
      [alertContent]="'Cambie algunas cosas e intente enviar de nuevo.'"
    />

    <!-- COMPONENTE: Alerta de advertencia -->
      <cygnus-alert-simple
      [alertTypes]="'alert-yellow'"
      [alertIcon]="true"
      [alertEquis]="true"
      [alertTitle]="'¡Alerta de advertencia!'"
      [alertContent]="'Cambie algunas cosas e intente enviar de nuevo.'"
    />

    <!-- COMPONENTE: Alerta simple -->
      <cygnus-alert-simple
      [alertTypes]="'alert-gray'"
      [alertIcon]="true"
      [alertEquis]="true"
      [alertTitle]="'¡Alerta simple!'"
      [alertContent]="'Cambie algunas cosas e intente enviar de nuevo.'"
    />
  `;

  alertContenidoTs: string = `
    ...
    export class AlertContentComponent {
      btnClickedEvent(event: boolean) {
        console.log('cygnus-alert-contenido btnClickedEvent:',event);
      }
    }
  `;

  alertContenidoPrimary: string = `
    <cygnus-alert-contenido
      [alertTypes]="'alert-primary'"
      [alertTitle]="'Esto es una alerta informativa'"
      [alertContent]="'
        Más información sobre este éxito informativo aquí. Este texto de ejemplo va a ser un poco más largo para que puedas ver cómo funciona el espaciado dentro de una alerta con este tipo de contenido.
      '"
      (btnClickedEvent)="btnClickedEvent($event)"
    />

    <cygnus-alert-contenido
      [btnIsFull]="true"
      [alertTypes]="'alert-primary'"
      [alertTitle]="'Esto es una alerta informativa'"
      [alertContent]="'
        Más información sobre este éxito informativo aquí. Este texto de ejemplo va a ser un poco más largo para que puedas ver cómo funciona el espaciado dentro de una alerta con este tipo de contenido.
      '"
      (btnClickedEvent)="btnClickedEvent($event)"
    />
  `;

  alertContenidoRed: string = `
    <cygnus-alert-contenido
      [alertTypes]="'alert-red'"
      [alertTitle]="'Esto es una alerta informativa'"
      [alertContent]="'
        Más información sobre este éxito informativo aquí. Este texto de ejemplo va a ser un poco más largo para que puedas ver cómo funciona el espaciado dentro de una alerta con este tipo de contenido.
      '"
      (btnClickedEvent)="btnClickedEvent($event)"
    />

    <cygnus-alert-contenido
      [btnIsFull]="true"
      [alertTypes]="'alert-red'"
      [alertTitle]="'Esto es una alerta informativa'"
      [alertContent]="'
        Más información sobre este éxito informativo aquí. Este texto de ejemplo va a ser un poco más largo para que puedas ver cómo funciona el espaciado dentro de una alerta con este tipo de contenido.
      '"
      (btnClickedEvent)="btnClickedEvent($event)"
    />
  `;

  alertContenidoGreen: string = `
    <cygnus-alert-contenido
      [alertTypes]="'alert-green'"
      [alertTitle]="'Esto es una alerta informativa'"
      [alertContent]="'
        Más información sobre este éxito informativo aquí. Este texto de ejemplo va a ser un poco más largo para que puedas ver cómo funciona el espaciado dentro de una alerta con este tipo de contenido.
      '"
      (btnClickedEvent)="btnClickedEvent($event)"
    />

    <cygnus-alert-contenido
      [btnIsFull]="true"
      [alertTypes]="'alert-green'"
      [alertTitle]="'Esto es una alerta informativa'"
      [alertContent]="'
        Más información sobre este éxito informativo aquí. Este texto de ejemplo va a ser un poco más largo para que puedas ver cómo funciona el espaciado dentro de una alerta con este tipo de contenido.
      '"
      (btnClickedEvent)="btnClickedEvent($event)"
    />
  `;

  alertContenidoYellow: string = `
    <cygnus-alert-contenido
      [alertTypes]="'alert-yellow'"
      [alertTitle]="'Esto es una alerta informativa'"
      [alertContent]="'
        Más información sobre este éxito informativo aquí. Este texto de ejemplo va a ser un poco más largo para que puedas ver cómo funciona el espaciado dentro de una alerta con este tipo de contenido.
      '"
      (btnClickedEvent)="btnClickedEvent($event)"
    />

    <cygnus-alert-contenido
      [btnIsFull]="true"
      [alertTypes]="'alert-yellow'"
      [alertTitle]="'Esto es una alerta informativa'"
      [alertContent]="'
        Más información sobre este éxito informativo aquí. Este texto de ejemplo va a ser un poco más largo para que puedas ver cómo funciona el espaciado dentro de una alerta con este tipo de contenido.
      '"
      (btnClickedEvent)="btnClickedEvent($event)"
    />
  `;

  alertContenidoGray: string = `
    <cygnus-alert-contenido
      [alertTypes]="'alert-gray'"
      [alertTitle]="'Esto es una alerta informativa'"
      [alertContent]="'
        Más información sobre este éxito informativo aquí. Este texto de ejemplo va a ser un poco más largo para que puedas ver cómo funciona el espaciado dentro de una alerta con este tipo de contenido.
      '"
      (btnClickedEvent)="btnClickedEvent($event)"
    />

    <cygnus-alert-contenido
      [btnIsFull]="true"
      [alertTypes]="'alert-gray'"
      [alertTitle]="'Esto es una alerta informativa'"
      [alertContent]="'
        Más información sobre este éxito informativo aquí. Este texto de ejemplo va a ser un poco más largo para que puedas ver cómo funciona el espaciado dentro de una alerta con este tipo de contenido.
      '"
      (btnClickedEvent)="btnClickedEvent($event)"
    />
  `;

  alertCounterBlockedExample: string = `
    <cygnus-alert-counter-blocked
      [tryCounter]="0"
    />
    <cygnus-alert-counter-blocked
      [tryCounter]="1"
    />
    <cygnus-alert-counter-blocked
      [tryCounter]="2"
    />
    <cygnus-alert-counter-blocked
      [tryCounter]="3"
      (btnAlertIsClickedEvent)="exampleAlertCounterBlockedEvent()"
    />
  `;

  alertCounterBlockedExampleTs: string = `
    ...
    export class AppComponentComponent {
      exampleAlertCounterBlockedEvent() {
        console.log('AlertCounterBlocked click event');
      }
    }
  `;

  btnClickedEvent(event: boolean) {
    console.log('cygnus-alert-contenido btnClickedEvent:',event);
  }

  showAlertClosed(event: any) {
    console.log('showAlertClosed:', JSON.stringify(event));
  }

  openAlertModal() {
    this.showModalAlert = !this.showModalAlert;
  }

}
