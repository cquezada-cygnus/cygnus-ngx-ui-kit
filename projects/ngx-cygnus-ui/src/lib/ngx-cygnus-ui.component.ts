import { Component } from '@angular/core';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';

@Component({
  selector: 'lib-ngx-cygnus-ui',
  imports: [NgxCygnusIconsComponent],
  template: `
      <h1 class="text-3xl font-bold underline">
        Hello ngx-cygnus-ui!
      </h1>

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
export class NgxCygnusUiComponent {

}
