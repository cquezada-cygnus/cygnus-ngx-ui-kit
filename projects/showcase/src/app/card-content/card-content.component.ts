import { Component } from '@angular/core';
import {
  CygnusCardIconTextComponent,
  CygnusCardImageComponent,
  CygnusCardLoginComponent,
  CygnusCardShowValidatorsComponent,
  CygnusCardTitleTextComponent,
  CygnusMainboardCardComponent,
} from 'ngx-cygnus-ui/components/card';


@Component({
  selector: 'app-card-content',
  imports: [
    CygnusCardLoginComponent,
    CygnusCardShowValidatorsComponent,
    CygnusCardImageComponent,
    CygnusCardTitleTextComponent,
    CygnusCardIconTextComponent,
    CygnusMainboardCardComponent,
  ],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.scss'
})
export class CardContentComponent {

}
