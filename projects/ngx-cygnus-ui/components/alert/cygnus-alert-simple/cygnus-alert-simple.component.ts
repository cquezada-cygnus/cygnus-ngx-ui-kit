import { Component, input, OnInit, signal } from '@angular/core';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { TW_CLASS } from '../const/tailwind.const';
import { IconAlertColor } from 'ngx-cygnus-ui/types';

@Component({
  selector: 'cygnus-alert-simple',
  imports: [NgxCygnusIconsComponent],
  templateUrl: './cygnus-alert-simple.component.html',
  styles: `
    :host { // By default, Angular components behave like inline elements. To allow them to occupy the full width of their parent container, you need to change their display property to block.
      display: block;
      width: 100%;
    }
  `,
})
export class CygnusAlertSimpleComponent implements OnInit {
  TW_CLASS = TW_CLASS;

  alertIcon  = input<boolean>(false);
  alertEquis = input<boolean>(false);
  alertIconColor: IconAlertColor = '#193cb8';
  alertTitle = input<string>('');
  alertContent = input<string>('');

  alertTypes = input<string>('');
  alertAllClasses = signal<string>('');

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
      if (this.alertEquis()) {
        stringClasses = stringClasses + (this.addTailwindEquisClasses(elem) + ' ');
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
        return this.TW_CLASS.ALERT_SIMPLE_PRIMARY;
      case 'alert-red':
        this.alertIconColor = '#c10007';
        return this.TW_CLASS.ALERT_SIMPLE_RED;
      case 'alert-green':
        this.alertIconColor = '#008236';
        return this.TW_CLASS.ALERT_SIMPLE_GREEN;
      case 'alert-yellow':
        this.alertIconColor = '#a65f00';
        return this.TW_CLASS.ALERT_SIMPLE_YELLOW;
      case 'alert-gray':
        this.alertIconColor = '#364153';
        return this.TW_CLASS.ALERT_SIMPLE_GRAY;
      default:
        this.alertIconColor = '#193cb8';
        return this.TW_CLASS.ALERT_SIMPLE_PRIMARY;
    }
  }

  addTailwindEquisClasses(customClass: string): string {
    switch (customClass) {
      case 'alert-primary':
        this.alertIconColor = '#193cb8';
        return this.TW_CLASS.ALERT_SIMPLE_EQUIS_PRIMARY;
      case 'alert-red':
        this.alertIconColor = '#c10007';
        return this.TW_CLASS.ALERT_SIMPLE_EQUIS_RED;
      case 'alert-green':
        this.alertIconColor = '#008236';
        return this.TW_CLASS.ALERT_SIMPLE_EQUIS_GREEN;
      case 'alert-yellow':
        this.alertIconColor = '#a65f00';
        return this.TW_CLASS.ALERT_SIMPLE_EQUIS_YELLOW;
      case 'alert-gray':
        this.alertIconColor = '#364153';
        return this.TW_CLASS.ALERT_SIMPLE_EQUIS_GRAY;
      default:
        this.alertIconColor = '#193cb8';
        return this.TW_CLASS.ALERT_SIMPLE_EQUIS_PRIMARY;
    }
  }
}
