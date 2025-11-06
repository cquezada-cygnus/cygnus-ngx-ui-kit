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
    {option: 'Dashboard', routerLinkText: './', iconAsset: 'assets/icons/svg/Alerts&Feedback/announcement-03.svg', tabInnerHTML: `
      <div data-tab-content="" class="p-5">
        <p class="font-light text-slate-400">
            Porque se trata de motivar a los que hacen. Porque estoy aquí para
            seguir mis sueños e inspirar a otras personas para
            que también sigan los suyos.
        </p>
      </div>
      ` },
    {option: 'Perfil', routerLinkText: './', iconAsset: 'assets/icons/svg/Users/user-circle.svg', tabInnerHTML: `
      <div data-tab-content="" class="p-5">
        <p class="font-light text-slate-400">
            La lectura de todos los buenos libros es como una conversación con las
            mejores mentes de los siglos pasados.
            mentes más brillantes de siglos pasados.
        </p>
      </div>
      ` },
    {option: 'Configuración', routerLinkText: './', iconAsset: 'assets/icons/svg/General/tool-02.svg', tabInnerHTML: `
      <div data-tab-content="" class="p-5">
        <p class="font-light text-slate-400">
            Compararse con los demás es el ladrón de la alegría.
        </p>
      </div>
      ` },
  ];

}
