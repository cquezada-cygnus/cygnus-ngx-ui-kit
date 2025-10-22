import { Component, input, OnInit, signal } from '@angular/core';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { TW_CLASS } from '../const/tailwind.const';
import { IconAlertColor } from 'ngx-cygnus-ui/types';
import { CygnusButtonComponent, } from 'ngx-cygnus-ui/components/button';

@Component({
  selector: 'cygnus-alert-contenido',
  imports: [
    NgxCygnusIconsComponent,
    CygnusButtonComponent,
  ],
  templateUrl: './cygnus-alert-contenido.component.html',
})
export class CygnusAlertContenidoComponent implements OnInit {
  TW_CLASS = TW_CLASS;
  alertWithBtn = input<boolean>(true);
  btnIsFull = input<boolean>(false);
  alertIconColor: IconAlertColor = '#193cb8';

  alertIconAsset = input<string>('assets/icons/svg/Alerts&Feedback/alert-circle.svg');
  alertTitle = input<string>('');
  alertContent = input<string>('');
  btnFullText = input<string>('Aceptar');

  alertTypes = input<string>('');
  alertAllClasses = signal<string>('');
  buttonType = signal<string>('');
  buttonOutlinedType = signal<string>('');

  ngOnInit(){
    const setClasses = this.setAlertClasses(this.getAlertClasses(this.alertTypes()));
    this.alertAllClasses.set(setClasses);
  }

  getAlertClasses(stringClasses: string): string[] {
    return stringClasses.split(' ');
  }

  setAlertClasses(arrStringClasses: string[]): string {
    let stringClasses = '';
    for (let i = 0; i < arrStringClasses.length; i++) {
      const elem = arrStringClasses[i];
      if (this.btnIsFull()) {
        stringClasses = stringClasses + (this.addTailwindIsFullClasses(elem) + ' ');
      } else {
        stringClasses = stringClasses + (this.addTailwindClasses(elem) + ' ');
      }
    }
    return stringClasses;
  }

  addTailwindClasses(customClass: string): string {
    switch (customClass) {
      case 'alert-primary':
        this.alertIconColor = '#193cb8';
        this.buttonType.set('btn-primary');
        this.buttonOutlinedType.set('btn-outlined');
        return this.TW_CLASS.ALERT_CONTENT_PRIMARY;
      case 'alert-red':
        this.alertIconColor = '#c10007';
        this.buttonType.set('btn-error');
        this.buttonOutlinedType.set('btn-outlined-red');
        return this.TW_CLASS.ALERT_CONTENT_RED;
      case 'alert-green':
        this.alertIconColor = '#008236';
        this.buttonType.set('btn-success');
        this.buttonOutlinedType.set('btn-outlined-green');
        return this.TW_CLASS.ALERT_CONTENT_GREEN;
      case 'alert-yellow':
        this.alertIconColor = '#a65f00';
        this.buttonType.set('btn-warning');
        this.buttonOutlinedType.set('btn-outlined-amber');
        return this.TW_CLASS.ALERT_CONTENT_YELLOW;
      case 'alert-gray':
        this.alertIconColor = '#364153';
        this.buttonType.set('btn-full-gray');
        this.buttonOutlinedType.set('btn-outlined-gray');
        return this.TW_CLASS.ALERT_CONTENT_GRAY;
      default:
        this.alertIconColor = '#193cb8';
        this.buttonType.set('btn-primary');
        this.buttonOutlinedType.set('btn-outlined');
        return this.TW_CLASS.ALERT_CONTENT_PRIMARY;
    }
  }

  addTailwindIsFullClasses(customClass: string): string {
    switch (customClass) {
      case 'alert-primary':
        this.alertIconColor = '#193cb8';
        this.buttonType.set('btn-primary');
        return this.TW_CLASS.ALERT_CONTENT_FULL_PRIMARY;
      case 'alert-red':
        this.alertIconColor = '#c10007';
        this.buttonType.set('btn-error');
        return this.TW_CLASS.ALERT_CONTENT_FULL_RED;
      case 'alert-green':
        this.alertIconColor = '#008236';
        this.buttonType.set('btn-success');
        return this.TW_CLASS.ALERT_CONTENT_FULL_GREEN;
      case 'alert-yellow':
        this.alertIconColor = '#a65f00';
        this.buttonType.set('btn-warning');
        return this.TW_CLASS.ALERT_CONTENT_FULL_YELLOW;
      case 'alert-gray':
        this.alertIconColor = '#364153';
        this.buttonType.set('btn-full-gray');
        return this.TW_CLASS.ALERT_CONTENT_FULL_GRAY;
      default:
        this.alertIconColor = '#193cb8';
        this.buttonType.set('btn-primary');
        return this.TW_CLASS.ALERT_CONTENT_FULL_PRIMARY;
    }
  }
}
