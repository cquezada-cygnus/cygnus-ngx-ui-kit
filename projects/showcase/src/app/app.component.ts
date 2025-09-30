import { Component } from '@angular/core';
import { CygnusButtonComponent } from 'ngx-cygnus-ui/button';
import { ButtonContentComponent } from './button-content/button-content.component';

@Component({
  selector: 'app-root',
  imports: [
    CygnusButtonComponent,
    ButtonContentComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'showcase';
}
