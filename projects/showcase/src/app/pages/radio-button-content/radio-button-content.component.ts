import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
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
export class RadioButtonContentComponent {

  nonNullableFb = inject(NonNullableFormBuilder);

  radioForm = this.nonNullableFb.group({
    radioExample: ['', [Validators.required]],
  });

  radioLinkForm = this.nonNullableFb.group({
    radioExample: ['', [Validators.required]],
  });


}
