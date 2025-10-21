import { Component, input } from '@angular/core';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { CygnusButtonLinkComponent } from 'ngx-cygnus-ui/components/button';

@Component({
  selector: 'cygnus-mainboard-card',
  imports: [
    NgxCygnusIconsComponent,
    CygnusButtonLinkComponent
  ],
  templateUrl: './cygnus-mainboard-card.component.html',
})
export class CygnusMainboardCardComponent {
  // assets/icons/svg/General/speedometer-04.svg
  // assets/icons/svg/General/hearts.svg
  iconLeftColor = input<string>('#155eef');
  iconLeftAsset = input<string>('assets/icons/svg/General/speedometer-04.svg');
  iconLeftSize  = input<string>('3rem');

  iconRightColor = input<string>('#fdb022');
  iconRightAsset = input<string>('assets/icons/svg/General/hearts.svg');
  iconRightSize  = input<string>('1.1rem');

  iconArrowColor = input<string>('#155eef');
  iconArrowAsset = input<string>('assets/icons/svg/Arrows/arrow-narrow-right.svg');
  iconArrowSize  = input<string>('1rem');

  cardTitle = input<string>('');
  cardText  = input<string>('');

}
