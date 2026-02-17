import { Component, input, model } from '@angular/core';

import { CygnusButtonComponent, } from 'ngx-cygnus-ui/components/button';

@Component({
  selector: 'cygnus-modal-two-ng-content',
  imports: [
    CygnusButtonComponent,
  ],
  templateUrl: './cygnus-modal-two-ng-content.component.html',
})
export class CygnusModalTwoNgContentComponent {
  withX = input<boolean>(false);
  showModal = model<boolean>(false);

  toggleModal():void {
    this.showModal.update( current => !current );
  }

  handleBlurClick(event: MouseEvent): void {
    // Check if the element that was clicked is the one with the event listener
    if (event.target === event.currentTarget) { //Blur div clicked directly!
      this.toggleModal();
    } // else Click originated from a child element, Blur handler ignored.
  }
}
