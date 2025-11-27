import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import {
  CygnusRadioButtonComponent,
  CygnusRadioGroupComponent
} from 'ngx-cygnus-ui/components/radio-button';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-radio-button-content',
  imports: [
    CygnusRadioButtonComponent,
    CygnusRadioGroupComponent,
    Highlight, HighlightLineNumbers,
  ],
  templateUrl: './radio-button-content.component.html',
  styleUrl: './radio-button-content.component.scss'
})
export class RadioButtonContentComponent {

  nonNullableFb = inject(NonNullableFormBuilder);

  radioForm = this.nonNullableFb.group({
    radioExample: ['', [Validators.required]],
  });

  radioLinkForm = this.nonNullableFb.group({
    radioExample: ['', [Validators.required]],
  });

  cygnusRadioButtonImportTs: string = `
    import { Component, inject } from '@angular/core';
    import { NonNullableFormBuilder, Validators } from '@angular/forms';
    import {
      CygnusRadioButtonComponent,
      CygnusRadioGroupComponent
    } from 'ngx-cygnus-ui/components/radio-button';

    @Component({
      selector: 'app-radio-button-content',
      imports: [
        CygnusRadioButtonComponent,
        CygnusRadioGroupComponent,
      ],
      templateUrl: './radio-button-content.component.html',
      styleUrl: './radio-button-content.component.scss'
    })
    export class RadioButtonContentComponent {}
  `;

  cygnusRadioButtonFormTs: string = `
    ...
    export class RadioButtonContentComponent {
      nonNullableFb = inject(NonNullableFormBuilder);

      radioForm = this.nonNullableFb.group({
        radioExample: ['', [Validators.required]],
      });
    }
  `;

  cygnusRadioLinkFormTs: string = `
    ...
    export class RadioButtonContentComponent {
      nonNullableFb = inject(NonNullableFormBuilder);

      radioLinkForm = this.nonNullableFb.group({
        radioExample: ['', [Validators.required]],
      });
    }
  `;

  cygnusRadioButtonHtml: string = `
    <cygnus-radio-group [control]="radioForm.controls.radioExample">
      <cygnus-radio-button [control]="radioForm.controls.radioExample" [labelText]="'Chile'" />
      <cygnus-radio-button [control]="radioForm.controls.radioExample" [labelText]="'Perú'" />
      <cygnus-radio-button [control]="radioForm.controls.radioExample" [labelText]="'Argentina'" />
      <cygnus-radio-button [control]="radioForm.controls.radioExample" [labelText]="'Brasil'" [isDisabled]="true" />
    </cygnus-radio-group>
  `;

  cygnusRadioLinkHtml: string = `
    <cygnus-radio-group [control]="radioLinkForm.controls.radioExample">
      <cygnus-radio-button
        [control]="radioLinkForm.controls.radioExample"
        [labelText]="'Estoy de acuerdo con los '"
        [linkText]="'términos y condiciones'"
        [linkUrl]="'./'"
      />
      <cygnus-radio-button
        [control]="radioLinkForm.controls.radioExample"
        [labelText]="'No estoy de acuerdo con los '"
        [linkText]="'términos y condiciones'"
        [linkUrl]="'./'"
      />
    </cygnus-radio-group>
  `;
}
