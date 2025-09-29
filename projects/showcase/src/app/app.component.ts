import { Component } from '@angular/core';
import { CygnusButtonComponent } from 'ngx-cygnus-ui/button';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';

@Component({
  selector: 'app-root',
  imports: [CygnusButtonComponent, NgxCygnusIconsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'showcase';
}
