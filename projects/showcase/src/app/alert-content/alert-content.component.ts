import { Component } from '@angular/core';
import {
  CygnusAlertContenidoComponent,
  CygnusAlertSimpleComponent
} from 'ngx-cygnus-ui/components/alert';

@Component({
  selector: 'app-alert-content',
  imports: [
    CygnusAlertSimpleComponent,
    CygnusAlertContenidoComponent,
  ],
  templateUrl: './alert-content.component.html',
  styleUrl: './alert-content.component.scss'
})
export class AlertContentComponent {

}
