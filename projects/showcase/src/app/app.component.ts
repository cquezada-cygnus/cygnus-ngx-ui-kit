import { Component, input } from '@angular/core';
import { ButtonContentComponent } from './button-content/button-content.component';
import { CygnusInputComponent } from 'ngx-cygnus-ui/components/input';
import { InputContentComponent } from "./input-content/input-content.component";
import { CardContentComponent } from './card-content/card-content.component';
import { SelectContentComponent } from './select-content/select-content.component';
import { BadgeContentComponent } from './badge-content/badge-content.component';
import { CygnusCardSelectsComponent } from 'ngx-cygnus-ui/components/card';

@Component({
  selector: 'app-root',
  imports: [
    CygnusInputComponent,
    ButtonContentComponent,
    InputContentComponent,
    CardContentComponent,
    SelectContentComponent,
    BadgeContentComponent,
    CygnusCardSelectsComponent,
],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'showcase';
}
