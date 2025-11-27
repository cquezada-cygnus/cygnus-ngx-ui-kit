import { Component } from '@angular/core';
import { CygnusToggleComponent } from 'ngx-cygnus-ui/components/toggle';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-toggle-content',
  imports: [
    CygnusToggleComponent,
    Highlight, HighlightLineNumbers,
  ],
  templateUrl: './toggle-content.component.html',
  styleUrl: './toggle-content.component.scss'
})
export class ToggleContentComponent {

  cygnusToggleImportTs: string = `
    import { Component } from '@angular/core';
    import { CygnusToggleComponent } from 'ngx-cygnus-ui/components/toggle';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusToggleComponent,
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class AppComponentComponent {}
  `;

  cygnusToggleBasicHtml: string = `
    <cygnus-toggle />
  `;

  cygnusToggleCheckedHtml: string = `
    <cygnus-toggle [inputIsChecked]="true" />
  `;

  cygnusToggleTextHtml: string = `
    <cygnus-toggle [toggleText]="'Modo oscuro'" />
  `;

  cygnusToggleDisabledHtml: string = `
    <cygnus-toggle [inputIsDisabled]="true" />
  `;

  cygnusToggleLinkHtml: string = `
    <cygnus-toggle
      [toggleText]="'Acepto los '"
      [inputlink]="'./'"
      [inputlinkText]="'términos y condiciones'"
    />
  `;

  cygnusToggleDescHtml: string = `
    <cygnus-toggle
      [toggleText]="'Recuérdame'"
      [toggleDescription]="'Podrás iniciar sesión sin contraseña durante 24 horas.'"
    />
  `;

  cygnusToggleColorHtml: string = `
    <cygnus-toggle [checkedCustomColor]="'green'" />
  `;
}
