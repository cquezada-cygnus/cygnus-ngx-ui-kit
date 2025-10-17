import { Component } from '@angular/core';
import { CygnusInputComponent } from 'ngx-cygnus-ui/components/input';
import { CygnusCheckboxComponent } from 'ngx-cygnus-ui/components/checkbox';

@Component({
  selector: 'cygnus-login-01',
  imports: [
    CygnusInputComponent,
    CygnusCheckboxComponent,
  ],
  templateUrl: './cygnus-login-01.component.html',
})
export class CygnusLogin01Component {
  // assets/icons/svg/General/eye.svg
  // assets/icons/heroicons-outline/eye-slash.svg
  // assets/icons/svg/General/eye-off.svg

}
