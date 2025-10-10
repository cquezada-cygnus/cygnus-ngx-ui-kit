import { Component, input } from '@angular/core';
import { ButtonContentComponent } from './button-content/button-content.component';
import { CygnusInputComponent } from 'ngx-cygnus-ui/components/input';
import { InputContentComponent } from "./input-content/input-content.component";
import { LoginFormComponent } from './login-form/login-form.component';
import { SelectContentComponent } from './select-content/select-content.component';
import { BadgeContentComponent } from './badge-content/badge-content.component';

@Component({
  selector: 'app-root',
  imports: [
    CygnusInputComponent,
    ButtonContentComponent,
    InputContentComponent,
    LoginFormComponent,
    SelectContentComponent,
    BadgeContentComponent,
],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'showcase';
}
