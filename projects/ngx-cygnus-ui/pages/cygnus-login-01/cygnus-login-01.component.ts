import { Component, signal } from '@angular/core';
import { CygnusInputComponent } from 'ngx-cygnus-ui/components/input';
import { CygnusCheckboxComponent } from 'ngx-cygnus-ui/components/checkbox';
import { CygnusButtonComponent, CygnusButtonLinkComponent } from 'ngx-cygnus-ui/components/button';
import { CygnusAlertContenidoComponent, } from 'ngx-cygnus-ui/components/alert';

@Component({
  selector: 'cygnus-login-01',
  imports: [
    CygnusInputComponent,
    CygnusCheckboxComponent,
    CygnusButtonComponent,
    CygnusButtonLinkComponent,
    CygnusAlertContenidoComponent,
  ],
  templateUrl: './cygnus-login-01.component.html',
})
export class CygnusLogin01Component {
  // assets/icons/svg/General/eye.svg
  // assets/icons/heroicons-outline/eye-slash.svg
  // assets/icons/svg/General/eye-off.svg

  openEye: string = 'assets/icons/svg/General/eye.svg';
  closedEye: string = 'assets/icons/heroicons-outline/eye-slash.svg';
  passPlaceholderHide: string = '••••••••';
  passPlaceholderShow: string = '-----';
  eyeIcon = signal<string>(this.closedEye);
  hidePassword = signal<boolean>(true);
  passPlaceholder = signal<string>(this.passPlaceholderHide);

  alertCondition = signal<boolean>(false);
  alertBlocked = signal<boolean>(true);

  toggleEyeIcon($event: string) {
    if ($event==='iconClicked') {
      if (this.eyeIcon()===this.closedEye) {
        this.hidePassword.set(false);
        this.passPlaceholder.set(this.passPlaceholderShow);
        this.eyeIcon.set(this.openEye);
      }
      else {
        this.hidePassword.set(true);
        this.passPlaceholder.set(this.passPlaceholderHide);
        this.eyeIcon.set(this.closedEye);
      }
    }
  }

}
