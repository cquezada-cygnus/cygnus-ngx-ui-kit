import { Component, signal } from '@angular/core';
import { CygnusInputComponent } from 'ngx-cygnus-ui/components/input';
import { CygnusCheckboxComponent } from 'ngx-cygnus-ui/components/checkbox';
import { CygnusButtonComponent, CygnusButtonLinkComponent } from 'ngx-cygnus-ui/components/button';

@Component({
  selector: 'cygnus-login-01',
  imports: [
    CygnusInputComponent,
    CygnusCheckboxComponent,
    CygnusButtonComponent,
    CygnusButtonLinkComponent,
  ],
  templateUrl: './cygnus-login-01.component.html',
})
export class CygnusLogin01Component {
  // assets/icons/svg/General/eye.svg
  // assets/icons/heroicons-outline/eye-slash.svg
  // assets/icons/svg/General/eye-off.svg

  openEye: string = 'assets/icons/svg/General/eye.svg';
  closedEye: string = 'assets/icons/heroicons-outline/eye-slash.svg';
  eyeIcon = signal<string>(this.closedEye);

  toggleEyeIcon($event: string) {
    if ($event==='iconClicked') {
      if (this.eyeIcon()===this.closedEye) this.eyeIcon.set(this.openEye);
      else this.eyeIcon.set(this.closedEye);
    }
  }

}
