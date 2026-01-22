import { Component, input, model, output } from '@angular/core';
import { CygnusButtonComponent, } from 'ngx-cygnus-ui/components/button';

@Component({
  selector: 'cygnus-modal',
  imports: [
    CygnusButtonComponent,
  ],
  templateUrl: './cygnus-modal.component.html',
})
export class CygnusModalComponent {
  private static idCounter = 0;

  modalTitle = input<string>('');
  withX = input<boolean>(false);
  showModal = model<boolean>(false);
  confirmarData = output<any>();

  toggleModal():void {
    this.showModal.update( current => !current );
  }

  sendData():void {
    this.confirmarData.emit(`custom data`);
    this.toggleModal();
  }

  handleBlurClick(event: MouseEvent): void {
    // Check if the element that was clicked is the one with the event listener
    if (event.target === event.currentTarget) { //Blur div clicked directly!
      this.toggleModal();
    } // else Click originated from a child element, Blur handler ignored.
  }

}
