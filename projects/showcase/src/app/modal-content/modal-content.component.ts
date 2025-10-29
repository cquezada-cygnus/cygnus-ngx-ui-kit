import { Component, signal } from '@angular/core';
import { CygnusButtonComponent, } from 'ngx-cygnus-ui/components/button';
import { CygnusModalComponent } from 'ngx-cygnus-ui/components/modal';

@Component({
  selector: 'app-modal-content',
  imports: [
    CygnusButtonComponent,
    CygnusModalComponent
  ],
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.scss'
})
export class ModalContentComponent {
  showModalSimple: boolean = false;
  showModalEquis : boolean = false;

  toggleModalSimple():void {
    this.showModalSimple = !this.showModalSimple;
  }
  toggleModalEquis():void {
    this.showModalEquis = !this.showModalEquis;
  }

}
