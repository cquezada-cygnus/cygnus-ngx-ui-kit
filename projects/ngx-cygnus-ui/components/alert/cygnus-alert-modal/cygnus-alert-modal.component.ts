import { Component, HostListener, input, model, OnInit, signal } from '@angular/core';

import { IconColorText, NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';

import { CygnusButtonComponent, } from 'ngx-cygnus-ui/components/button';

import { TW_CLASS } from '../const/tailwind.const';


@Component({
  selector: 'cygnus-alert-modal',
  imports: [
    NgxCygnusIconsComponent,
    CygnusButtonComponent,
  ],
  templateUrl: './cygnus-alert-modal.component.html',
})
export class CygnusAlertModalComponent implements OnInit {
  TW_CLASS = TW_CLASS;

  modalTitle = input<string>('');
  btnFullText = input<string>('Aceptar');
  alertBtnClose = input<boolean>(false);

  showModal = model<boolean>(false);
  alertTypes = input<string>('');
  alertAllClasses = signal<string>('');

  alertWithBtn = input<boolean>(true);
  alertIconColor = model<IconColorText | null>(null);
  alertIconAsset = input<string>('');
  buttonType = signal<string>('');

  alertConfirm: boolean = false;
  closeOnBlur = input<boolean>(true); // si es true, se puede cerrar al hacer click afuera del modal
  closeOnEscape = input<boolean>(true); // permitir/bloquear el cierre con tecla Escape

  ngOnInit(){
    const setClasses = this.setAlertClasses(this.getAlertClasses(this.alertTypes()));
    this.alertAllClasses.set(setClasses);
  }

  getAlertClasses(stringClasses: string): string[] {
    return stringClasses.split(' ');
  }

  setAlertClasses(arrStringClasses: string[]): string {
    let stringClasses = '';
    for (let i = 0; i < arrStringClasses.length; i++) {
      const elem = arrStringClasses[i];
      stringClasses = stringClasses + (this.addTailwindIsFullClasses(elem) + ' ');
    }
    return stringClasses;
  }

  addTailwindIsFullClasses(customClass: string): string {
    switch (customClass) {
      case 'alert-primary':
        this.alertIconColor.set('blue');
        this.buttonType.set('btn-primary');
        return this.TW_CLASS.ALERT_CONTENT_FULL_PRIMARY;
      case 'alert-red':
        this.alertIconColor.set('red');
        this.buttonType.set('btn-error');
        return this.TW_CLASS.ALERT_CONTENT_FULL_RED;
      case 'alert-green':
        this.alertIconColor.set('green');
        this.buttonType.set('btn-success');
        return this.TW_CLASS.ALERT_CONTENT_FULL_GREEN;
      case 'alert-confirm':
        this.alertIconColor.set('green');
        this.buttonType.set('btn-success');
        this.alertConfirm = true;
        return this.TW_CLASS.ALERT_CONTENT_CONFIRM;
      case 'alert-yellow':
        this.alertIconColor.set('amber');
        this.buttonType.set('btn-warning');
        return this.TW_CLASS.ALERT_CONTENT_FULL_YELLOW;
      case 'alert-gray':
        this.alertIconColor.set('secgray');
        this.buttonType.set('btn-full-gray');
        return this.TW_CLASS.ALERT_CONTENT_FULL_GRAY;
      default:
        this.alertIconColor.set('blue');
        this.buttonType.set('btn-primary');
        return this.TW_CLASS.ALERT_CONTENT_FULL_PRIMARY;
    }
  }

  toggleModal():void {
    this.showModal.update( current => !current );
  }

  handleBlurClick(event: MouseEvent): void {
    // Check if the element that was clicked is the one with the event listener
    if (event.target === event.currentTarget && this.closeOnBlur()) { //Blur div clicked directly!
      this.toggleModal();
    } // else Click originated from a child element, Blur handler ignored.
  }

  @HostListener('document:keydown.escape') // Escucha eventos de teclado en todo el documento
  handleEscapeKey() {
    if (this.showModal() && this.closeOnEscape()) { // Si el modal está abierto y la opción está habilitada, cerramos
      this.toggleModal();
    }
  }
}
