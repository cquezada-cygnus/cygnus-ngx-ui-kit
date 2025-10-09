import { Component } from '@angular/core';
import { CygnusCardLoginComponent, CygnusCardShowValidatorsComponent } from 'ngx-cygnus-ui/components/card';


@Component({
  selector: 'app-login-form',
  imports: [
    CygnusCardLoginComponent,
    CygnusCardShowValidatorsComponent,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

}
