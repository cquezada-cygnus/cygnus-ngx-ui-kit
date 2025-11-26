import { Component } from '@angular/core';
import { CygnusTabsComponent } from 'ngx-cygnus-ui/components/tabs';
import { Tab } from 'ngx-cygnus-ui/interfaces';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-tabs-content',
  imports: [
    CygnusTabsComponent,
    Highlight, HighlightLineNumbers,
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


  importCygnusTabTs: string = `
    import { Component } from '@angular/core';
    import { CygnusTabsComponent } from 'ngx-cygnus-ui/components/tabs';
    import { Tab } from 'ngx-cygnus-ui/interfaces';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusTabsComponent
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class AppComponentComponent {}
  `;

  cygnusTabsTs: string = `
    ...
    export class AppComponentComponent {
      tabsArr: Tab[] = [
        {option: 'Dashboard', routerLinkText: './', iconAsset: 'assets/icons/svg/Alerts&Feedback/announcement-03.svg',
          tabInnerHTML: '
          <div data-tab-content="" class="p-5">
            <p class="font-light text-slate-400">
                Porque se trata de motivar a los que hacen. Porque estoy aquí para
                seguir mis sueños e inspirar a otras personas para
                que también sigan los suyos.
            </p>
          </div>
          ' },
        {option: 'Perfil', routerLinkText: './', iconAsset: 'assets/icons/svg/Users/user-circle.svg',
          tabInnerHTML: '
          <div data-tab-content="" class="p-5">
            <p class="font-light text-slate-400">
                La lectura de todos los buenos libros es como una conversación con las
                mejores mentes de los siglos pasados.
                mentes más brillantes de siglos pasados.
            </p>
          </div>
          ' },
        {option: 'Configuración', routerLinkText: './', iconAsset: 'assets/icons/svg/General/tool-02.svg',
          tabInnerHTML: '
          <div data-tab-content="" class="p-5">
            <p class="font-light text-slate-400">
                Compararse con los demás es el ladrón de la alegría.
            </p>
          </div>
          ' },
      ];
    }
  `;

  cygnusTabInterfaz: string = `
    export interface Tab {
      routerLinkText?: string, // string que indica alguna ruta a la que redireccionar si se hace click en el tab
      option: string, // texto que será visible en el tab
      iconAsset?: string, // url dentro de la biblioteca ngx-cygnus-icons que indica la dirección del ícono que se va a mostrar
      tabInnerHTML?: string, // texto que representa una estructura HTML que se posicionará en la pantalla según el tab seleccionado.
    }
  `;

  cygnusTabSimpleHtml: string = `
    <cygnus-tabs [tabsArr]="tabsArr" />
  `;

  cygnusTabIconsHtml: string = `
    <cygnus-tabs [tabsArr]="tabsArr" [showIcon]="true" />
  `;

  cygnusTabInnerHtmlHtml: string = `
    <cygnus-tabs [tabsArr]="tabsArr" [showIcon]="true" [showTabInnerHTML]="true" />
  `;

}
