import { Component } from '@angular/core';
import { CygnusMainboardSidebarComponent } from 'ngx-cygnus-ui/components/sidebar';
import { SidebarItem } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'app-sidebar-content',
  imports: [CygnusMainboardSidebarComponent],
  templateUrl: './sidebar-content.component.html',
  styleUrl: './sidebar-content.component.scss'
})
export class SidebarContentComponent {
  buttonSidebarArr:SidebarItem[] = [
    { itemName: 'Registro de solicitudes', iconAsset: 'assets/icons/svg/General/save-01.svg', routerLinkText: './' },
    { itemName: 'Formulario de rendiciones', iconAsset: 'assets/icons/svg/General/speedometer-01.svg', routerLinkText: './' },
  ];

}
