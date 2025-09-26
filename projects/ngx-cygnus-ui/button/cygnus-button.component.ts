import { Component } from '@angular/core';
// import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';

@Component({
  selector: 'cygnus-button',
  imports: [],
  template: `
      <button
        class="btn text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none "
        type="button">
          <ng-content></ng-content>
      </button>
  `,
  styles: `
  `
})
export class CygnusButtonComponent {

}
