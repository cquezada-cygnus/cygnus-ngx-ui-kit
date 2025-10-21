import { Component } from '@angular/core';
import { CygnusMainboardNavbarComponent } from 'ngx-cygnus-ui/components/navbar';
import { NavbarItem } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'app-navbar-content',
  imports: [CygnusMainboardNavbarComponent],
  templateUrl: './navbar-content.component.html',
  styleUrl: './navbar-content.component.scss'
})
export class NavbarContentComponent {

  navbarItems:NavbarItem[] = [
    {option: 'Ver todo', routerLinkText: '' },
    {option: 'Personas', routerLinkText: '' },
    {option: 'Operaciones', routerLinkText: '' },
    {option: 'Selección', routerLinkText: '' },
    {option: 'Administración', routerLinkText: '' },
    {option: 'Tiendas Entel', routerLinkText: '' },
    {option: 'EST', routerLinkText: '' },
    {option: 'Transversal', routerLinkText: '' },
    {option: 'Contabilidad', routerLinkText: '' },
    {option: 'Cowork', routerLinkText: '' },
  ]

}
