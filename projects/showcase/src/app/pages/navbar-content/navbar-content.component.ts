import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  CygnusMainboardHeaderNavbarComponent,
  CygnusMainboardNavbarComponent
} from 'ngx-cygnus-ui/components/navbar';
import { NavbarItem } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'app-navbar-content',
  imports: [
    RouterOutlet,
    CygnusMainboardNavbarComponent,
    CygnusMainboardHeaderNavbarComponent,
  ],
  templateUrl: './navbar-content.component.html',
  styleUrl: './navbar-content.component.scss'
})
export class NavbarContentComponent {

  navbarItems:NavbarItem[] = [
    {option: 'Ver todo', routerLinkText: './card' },
    {option: 'Personas', routerLinkText: './login-01' },
    {option: 'Operaciones', routerLinkText: './' },
    {option: 'Selección', routerLinkText: './' },
    {option: 'Administración', routerLinkText: './' },
    {option: 'Tiendas Entel', routerLinkText: './' },
    {option: 'EST', routerLinkText: './' },
    {option: 'Transversal', routerLinkText: './' },
    {option: 'Contabilidad', routerLinkText: './' },
    {option: 'Cowork', routerLinkText: './' },
  ]

}
