import { Component } from '@angular/core';
import {
  CygnusCardIconTextComponent,
  CygnusCardImageComponent,
  CygnusCardSimpleLinkComponent,
  CygnusCardLoginComponent,
  CygnusCardShowValidatorsComponent,
  CygnusCardTitleTextComponent,
  CygnusMainboardCardComponent,
  CygnusCardSelectsComponent,
} from 'ngx-cygnus-ui/components/card';


@Component({
  selector: 'app-card-content',
  imports: [
    CygnusCardImageComponent,
    CygnusCardTitleTextComponent,
    CygnusCardIconTextComponent,
    CygnusCardSimpleLinkComponent,
    CygnusMainboardCardComponent,
    CygnusCardLoginComponent,
    CygnusCardShowValidatorsComponent,
    CygnusCardSelectsComponent,
  ],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.scss'
})
export class CardContentComponent {

}
