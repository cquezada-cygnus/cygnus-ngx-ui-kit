import { Component, input } from '@angular/core';
import { ButtonContentComponent } from './button-content/button-content.component';
import { CygnusInputComponent } from 'ngx-cygnus-ui/components/input';
import { InputContentComponent } from "./input-content/input-content.component";

@Component({
  selector: 'app-root',
  imports: [
    CygnusInputComponent,
    ButtonContentComponent,
    InputContentComponent,
],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'showcase';
}
