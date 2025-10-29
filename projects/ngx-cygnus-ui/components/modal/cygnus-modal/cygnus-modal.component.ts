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
  modalTitle = input<string>('');
  modalContent = input<string>('');
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

}
