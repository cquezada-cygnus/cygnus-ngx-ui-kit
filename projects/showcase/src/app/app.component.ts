import { Component } from '@angular/core';
import { CygnusButtonComponent } from 'ngx-cygnus-ui/button';

@Component({
  selector: 'app-root',
  imports: [CygnusButtonComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'showcase';
}
