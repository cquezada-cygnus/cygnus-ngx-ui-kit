import { Component } from '@angular/core';
import { CygnusCheckboxComponent } from 'ngx-cygnus-ui/components/checkbox';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-checkbox-content',
  imports: [
    CygnusCheckboxComponent,
    Highlight, HighlightLineNumbers,
  ],
  templateUrl: './checkbox-content.component.html',
  styleUrl: './checkbox-content.component.scss'
})
export class CheckboxContentComponent {

  cygnusCheckboxTs: string = `
    import { Component } from '@angular/core';
    import { CygnusCheckboxComponent } from 'ngx-cygnus-ui/components/checkbox';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusCheckboxComponent
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class AppComponentComponent {}
  `;

  cygnusCheckboxHtml: string = `
    <cygnus-checkbox [checkboxSize]="'sm'" />
  `;

  cygnusCheckboxHtmlForm: string = `
    ...
    <cygnus-checkbox
      [control]="nameForm.controls.checkboxNameFormControl"
    />
    ...
  `;

  cygnusCheckboxTsForm: string = `
    import { Component, inject } from '@angular/core';
    import { CygnusCheckboxComponent } from 'ngx-cygnus-ui/components/checkbox';
    import { ReactiveFormsModule, Validators, NonNullableFormBuilder } from '@angular/forms';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusCheckboxComponent,
        ReactiveFormsModule,
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class AppComponentComponent {
      nonNullableFb = inject(NonNullableFormBuilder);

      nameForm = this.nonNullableFb.group({
        ...
        checkboxNameFormControl: [false, [Validators.required]],
      });
    }
  `;

  cygnusCheckboxSizeHtml: string = `
    <cygnus-checkbox [checkboxSize]="'sm'" />

    <cygnus-checkbox [checkboxSize]="'lg'" />

  `;

  cygnusCheckboxTextHtml: string = `
    <cygnus-checkbox [checkboxType]="'text'" [checkboxText]="'Recuérdame'" />
  `;

  cygnusCheckboxTextHelpHtml: string = `
    <cygnus-checkbox
      [checkboxType]="'text-hint'"
      [checkboxText]="'Recuérdame'"
      [checkboxHint]="'Recuerda mi datos'"
    />
  `;

}
