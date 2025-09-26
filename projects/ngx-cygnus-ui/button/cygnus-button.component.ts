import { Component } from '@angular/core';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';

@Component({
  selector: 'cygnus-button',
  imports: [NgxCygnusIconsComponent],
  template: `
      <button><ng-content></ng-content></button>

      <section>
        <h1>cygnus icons</h1>
        <lib-ngx-cygnus-icons
          [width]="'20px'"
          [height]="'20px'"
          [color]="'purple'"
          [route]="'assets/icons/svg/Users/user-square.svg'"
        />
      </section>
  `,
  styles: ``
})
export class CygnusButtonComponent {

}
