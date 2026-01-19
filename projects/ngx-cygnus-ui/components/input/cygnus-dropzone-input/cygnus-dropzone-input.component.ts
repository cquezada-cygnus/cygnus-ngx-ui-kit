import { Component, input } from '@angular/core';

import { CygnusButtonComponent } from 'ngx-cygnus-ui/components/button';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';

@Component({
  selector: 'cygnus-dropzone-input',
  imports: [
    CygnusButtonComponent,
    NgxCygnusIconsComponent,
  ],
  templateUrl: './cygnus-dropzone-input.component.html',
})
export class CygnusDropzoneInputComponent {

  titleText = input<string>('');
  firstText = input<string>('');
  secondText = input<string>('');
  thirdText = input<string>('');
  btnText = input<string>('');
  onlyBtn = input<boolean>(false);

}
