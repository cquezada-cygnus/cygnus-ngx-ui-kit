import { Component, input } from '@angular/core';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { TW_CLASS } from '../const/tailwind.const';

@Component({
  selector: 'lib-cygnus-alert-contenido',
  imports: [NgxCygnusIconsComponent],
  templateUrl: './cygnus-alert-contenido.component.html',
})
export class CygnusAlertContenidoComponent {
  TW_CLASS = TW_CLASS;

}
