import { Component } from '@angular/core';

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

}
