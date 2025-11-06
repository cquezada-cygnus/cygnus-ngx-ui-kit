import { Component } from '@angular/core';
import { CygnusTabsComponent } from 'ngx-cygnus-ui/components/tabs';
import { Tab } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'app-tabs-content',
  imports: [
    CygnusTabsComponent
  ],
  templateUrl: './tabs-content.component.html',
  styleUrl: './tabs-content.component.scss'
})
export class TabsContentComponent {
  tabsArr: Tab[] = [
    {option: 'Dashboard', routerLinkText: './' },
    {option: 'Perfil', routerLinkText: './' },
    {option: 'Configuración', routerLinkText: './' },
  ];

}
