import { Component, effect, signal } from '@angular/core';
import { CygnusLogin01Component } from 'ngx-cygnus-ui/pages';

@Component({
  selector: 'app-login-content',
  imports: [
    CygnusLogin01Component
  ],
  templateUrl: './login-content.component.html',
  styleUrl: './login-content.component.scss'
})
export class LoginContentComponent {
  getOutputInfo = signal<any>({});
  maxCounter:number = 3;
  counter = signal<number>(0);

  updateInfo($event: any) {
    if ($event) {
      this.getOutputInfo.set($event);
      console.log('this.counter(): ', this.counter());
      this.counter.update( current => current+= 1 );
      console.log('this.counter(): ', this.counter());
    }
  }

}
