import { Component, effect, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CygnusButtonComponent } from 'ngx-cygnus-ui/components/button';
import { SidebarItem } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'cygnus-mainboard-sidebar',
  imports: [
    CygnusButtonComponent,
    RouterLink,
  ],
  templateUrl: './cygnus-mainboard-sidebar.component.html',
})
export class CygnusMainboardSidebarComponent {
  buttonSidebarArr = input<SidebarItem[]>();
  closeMainboardToggle = signal<boolean>(false);
  closeMainboardToggleInput = input<boolean>(false);

  constructor() {
    effect(() => {
      if (this.closeMainboardToggleInput()) { // si se envía una señal para cerrar el sidebar desde otro componente, se ejecutará
        this.closeMainboard();
      }
    });
  }

  closeMainboard() {
    this.closeMainboardToggle.set(!this.closeMainboardToggle());
  }
}
