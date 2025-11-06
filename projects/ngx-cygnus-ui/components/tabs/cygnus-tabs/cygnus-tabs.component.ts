import { Component, input, signal } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Tab } from 'ngx-cygnus-ui/interfaces';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'cygnus-tabs',
  imports: [RouterLink],
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
export class CygnusTabsComponent {
  tabsArr = input<Tab[]>([]);

  currentTab = signal<number>(0);

  changeCurrentTab(index: number) {
    this.currentTab.set(index);
  }

}
