import { Component } from '@angular/core';
import { HeaderCygnusUiComponent } from './header-cygnus-ui/header-cygnus-ui.component';
import { SidebarLeftCygnusUiComponent } from './sidebar-left-cygnus-ui/sidebar-left-cygnus-ui.component';
import { FooterCygnusUiComponent } from './footer-cygnus-ui/footer-cygnus-ui.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    HeaderCygnusUiComponent,
    SidebarLeftCygnusUiComponent,
    FooterCygnusUiComponent,
    RouterOutlet,

],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'showcase';
}
