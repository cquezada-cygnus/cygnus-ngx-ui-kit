import { Component, input, OnInit, signal } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Tab } from 'ngx-cygnus-ui/interfaces';
import { RouterLink } from "@angular/router";
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';

@Component({
  selector: 'cygnus-tabs',
  imports: [
    RouterLink,
    NgxCygnusIconsComponent,
  ],
  templateUrl: './cygnus-tabs.component.html',
  animations: [
    trigger('tabContent', [
      state('inactive', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      state('active', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('inactive <=> active', animate('300ms ease-in-out'))
    ])
  ],
})
export class CygnusTabsComponent implements OnInit {
  tabsArr = input<Tab[]>([]);
  showIcon = input<boolean>(false);
  showTabInnerHTML = input<boolean>(false);
  tabInnerHTML = signal<string>('');

  currentTab = signal<number>(0);

  ngOnInit(): void {
    this.tabInnerHTML.set(this.tabsArr()[0]?.tabInnerHTML ? (this.tabsArr()[0]?.tabInnerHTML || '') : '');
  }

  changeCurrentTab(index: number, innerHTML?: string) {
    this.currentTab.set(index);
    if (this.showTabInnerHTML()) {
      this.tabInnerHTML.set(innerHTML || '');
    }
  }

}
