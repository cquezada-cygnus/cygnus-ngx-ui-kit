import { Component } from '@angular/core';
import { NgxCygnusUiComponent } from 'ngx-cygnus-ui';

@Component({
  selector: 'app-root',
  imports: [NgxCygnusUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'showcase';
}
