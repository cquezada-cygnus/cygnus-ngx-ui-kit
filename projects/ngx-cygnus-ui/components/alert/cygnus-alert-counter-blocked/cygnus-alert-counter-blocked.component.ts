import { Component, effect, input, OnInit, signal } from '@angular/core';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { TW_CLASS } from '../const/tailwind.const';
import { IconAlertColor } from 'ngx-cygnus-ui/types';
import { CygnusButtonComponent, } from 'ngx-cygnus-ui/components/button';

@Component({
  selector: 'cygnus-alert-counter-blocked',
  imports: [
    NgxCygnusIconsComponent,
    CygnusButtonComponent,
  ],
  templateUrl: './cygnus-alert-counter-blocked.component.html',
})
export class CygnusAlertCounterBlockedComponent {
  TW_CLASS = TW_CLASS;
  showAlert  = signal<boolean>(false);

  alertWithBtn = signal<boolean>(false);
  alertIconColor: IconAlertColor = '#193cb8';

  alertIconAsset = input<string>('assets/icons/svg/Alerts&Feedback/alert-circle.svg');
  alertTitle = signal<string>('');
  alertContent = signal<string>('');
  btnFullText = signal<string>('Aceptar');

  alertTypes = signal<string>('');
  alertAllClasses = signal<string>('');
  buttonType = signal<string>('');

  maxCounter: number = 3;
  tryCounter = input<number>(0);
  errorTitle = 'Bloqueo de cuenta';
  errorContent = '';
  warningTitle = 'Alerta de bloqueo de cuenta';
  warningContent = '';

  constructor() {
    effect(() => { // actualizar color y contenido del alert cuando se indique

      this.errorContent = `
        Tu cuenta ha sido bloqueada por “${this.tryCounter()}” cantidad de intentos fallidos. Espera 30 minutos o comunícate con recursos humanos.
      `;
      this.warningContent = `
        Has hecho “${this.tryCounter()}” ${this.customIntentoText(this.tryCounter())} de inicio de sesión.
        Tienes ${this.maxCounter - this.tryCounter()} ${this.customIntentoText(this.maxCounter - this.tryCounter())} más, si no, se bloqueará tu cuenta y tendrás que esperar 30 minutos.
      `;

      if (this.tryCounter()===0) {
        this.showAlert.set(false);
      } else if (this.tryCounter()>0 && this.tryCounter()<3) {
        this.alertTypes.set('alert-yellow');
        this.alertWithBtn.set(false);
        this.alertTitle.set(this.warningTitle);
        this.alertContent.set(this.warningContent);
        this.showAlert.set(true);
      } else {
        this.alertTypes.set('alert-red');
        this.alertWithBtn.set(true);
        this.alertTitle.set(this.errorTitle);
        this.alertContent.set(this.errorContent);
        this.showAlert.set(true);
      }

      const setClasses = this.setAlertClasses(this.getAlertClasses(this.alertTypes()));
      this.alertAllClasses.set(setClasses);

    });
  }

  customIntentoText(num: number):string {
    if (num===1) {
      return 'intento';
    } else {
      return 'intentos';
    }
  }

  getAlertClasses(stringClasses: string): string[] {
    return stringClasses.split(' ');
  }

  setAlertClasses(arrStringClasses: string[]): string {
    let stringClasses = '';
    for (let i = 0; i < arrStringClasses.length; i++) {
      const elem = arrStringClasses[i];
      if (this.alertWithBtn()) {
        stringClasses = stringClasses + (this.addTailwindIsFullClasses(elem) + ' ');
      } else {
        stringClasses = stringClasses + (this.addTailwindClasses(elem) + ' ');
      }
    }
    return stringClasses;
  }

  addTailwindClasses(customClass: string): string {
    switch (customClass) {
      case 'alert-red':
        this.alertIconColor = '#c10007';
        this.buttonType.set('btn-error');
        return this.TW_CLASS.ALERT_CONTENT_RED;
      case 'alert-yellow':
        this.alertIconColor = '#a65f00';
        this.buttonType.set('btn-warning');
        return this.TW_CLASS.ALERT_CONTENT_YELLOW;
      default:
        this.alertIconColor = '#a65f00';
        this.buttonType.set('btn-warning');
        return this.TW_CLASS.ALERT_CONTENT_YELLOW;
    }
  }

  addTailwindIsFullClasses(customClass: string): string {
    switch (customClass) {
      case 'alert-red':
        this.alertIconColor = '#c10007';
        this.buttonType.set('btn-error');
        return this.TW_CLASS.ALERT_CONTENT_FULL_RED;
      case 'alert-yellow':
        this.alertIconColor = '#a65f00';
        this.buttonType.set('btn-warning');
        return this.TW_CLASS.ALERT_CONTENT_FULL_YELLOW;
      default:
        this.alertIconColor = '#a65f00';
        this.buttonType.set('btn-warning');
        return this.TW_CLASS.ALERT_CONTENT_FULL_PRIMARY;
    }
  }
}
