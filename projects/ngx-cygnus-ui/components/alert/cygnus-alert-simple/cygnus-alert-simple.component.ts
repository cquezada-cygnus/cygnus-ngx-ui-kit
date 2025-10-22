import { Component, input, OnInit, signal } from '@angular/core';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { TW_CLASS } from '../const/tailwind.const';

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
      stringClasses = stringClasses + (this.addTailwindClasses(elem) + ' ');
    }
    return stringClasses;
  }

  addTailwindClasses(customClass: string): string {
    switch (customClass) {
      case 'alert-primary':
        return this.TW_CLASS.ALERT_SIMPLE_PRIMARY;
      case 'alert-red':
        return this.TW_CLASS.ALERT_SIMPLE_RED;
      case 'alert-green':
        return this.TW_CLASS.ALERT_SIMPLE_GREEN;
      case 'alert-yellow':
        return this.TW_CLASS.ALERT_SIMPLE_YELLOW;
      case 'alert-gray':
        return this.TW_CLASS.ALERT_SIMPLE_GRAY;
      default:
        return this.TW_CLASS.ALERT_SIMPLE_PRIMARY;
    }
  }
}
