import { Component } from '@angular/core';
import { CygnusButtonComponent } from 'ngx-cygnus-ui/button';

@Component({
  selector: 'app-root',
  imports: [CygnusButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'showcase';
}
