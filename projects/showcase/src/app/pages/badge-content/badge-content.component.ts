import { Component } from '@angular/core';
import { CygnusBadgeComponent } from 'ngx-cygnus-ui/components/badge';
import { CygnusButtonComponent } from 'ngx-cygnus-ui/components/button';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-badge-content',
  imports: [
    CygnusBadgeComponent,
    CygnusButtonComponent,
    Highlight, HighlightLineNumbers,
  ],
  templateUrl: './badge-content.component.html',
  styleUrl: './badge-content.component.scss'
})
export class BadgeContentComponent {

  badgeImport: string = `
    import { Component } from '@angular/core';
    import { CygnusBadgeComponent } from 'ngx-cygnus-ui/components/badge';
    import { CygnusButtonComponent } from 'ngx-cygnus-ui/components/button';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusBadgeComponent,
        CygnusButtonComponent,
      ],
      templateUrl: './app-component.component.html',
    })
    export class BadgeContentComponent {}
  `;

  exampleBadgeSimple: string = `
    <!-- COMPONENTE: Badge simple -->
    <cygnus-badge [badgeTypes]="'badge'" [badgeText]="'Badge simple'" />
  `;

  exampleBadgeSizes: string = `
    <!-- COMPONENTE: Badge XS -->
    <cygnus-badge [badgeTypes]="'badge-xs'" [badgeText]="'2'" />

    <!-- COMPONENTE: Badge Small -->
    <cygnus-badge [badgeTypes]="'badge-sm'" [badgeText]="'Small'" />

    <!-- COMPONENTE: Badge Medium -->
    <cygnus-badge [badgeTypes]="'badge'" [badgeText]="'Medium'" />

    <!-- COMPONENTE: Badge Large -->
    <cygnus-badge [badgeTypes]="'badge-lg'" [badgeText]="'Large'" />
  `;

  exampleBadgeBtn: string = `
    <!-- COMPONENTE: Cygnus Button -->
    <cygnus-button
      [btnTypes]="'btn-primary '"
      [btnIconRouteRight]="'assets/icons/svg/Arrows/arrow-narrow-right.svg'"
    >
      Messages
      <!-- COMPONENTE: Badge XS -->
      <cygnus-badge [badgeTypes]="'badge-xs'" [badgeText]="'2'" />
    </cygnus-button>
  `;

  exampleBadgeColors: string = `
    <!-- COMPONENTE: Badge Información -->
    <cygnus-badge [badgeTypes]="'badge badge-primary'" [badgeText]="'Información'" />

    <!-- COMPONENTE: Badge Simple -->
    <cygnus-badge [badgeTypes]="'badge badge-secondary'" [badgeText]="'Simple'" />

    <!-- COMPONENTE: Badge Error -->
    <cygnus-badge [badgeTypes]="'badge badge-error'" [badgeText]="'Error'" />

    <!-- COMPONENTE: Badge Advertencia -->
    <cygnus-badge [badgeTypes]="'badge badge-warning'" [badgeText]="'Advertencia'" />

    <!-- COMPONENTE: Badge Éxito -->
    <cygnus-badge [badgeTypes]="'badge badge-success'" [badgeText]="'Éxito'" />

    <!-- NOTA: Estos estados son para ocasiones que se necesitan colores distintos -->
    <!-- COMPONENTE: Badge Púrpura -->
    <cygnus-badge [badgeTypes]="'badge badge-purple'" [badgeText]="'Púrpura'" />

    <!-- COMPONENTE: Badge Indigo -->
    <cygnus-badge [badgeTypes]="'badge badge-indigo'" [badgeText]="'Indigo'" />

    <!-- COMPONENTE: Badge Rosado -->
    <cygnus-badge [badgeTypes]="'badge badge-pink'" [badgeText]="'Rosado'" />
  `;

  exampleBadgeIcons: string = `
    <cygnus-badge
      [badgeTypes]="'badge-icon-only'"
      [badgeIconAsset]="'assets/icons/svg/General/plus.svg'"
      [badgeText]="''"
    />

    <cygnus-badge
      [badgeTypes]="'badge-icon'"
      [badgeIconAsset]="'assets/icons/svg/General/plus.svg'"
      [badgeIconPosition]="'left'"
      [badgeText]="'Icono a la izquierda'"
    />

    <cygnus-badge
      [badgeTypes]="'badge-icon'"
      [badgeIconAsset]="'assets/icons/svg/General/plus.svg'"
      [badgeIconPosition]="'right'"
      [badgeText]="'Icono a la derecha'"
    />
  `;

  exampleBadgeInadmisible: string = `
    <cygnus-badge
      [badgeTypes]="'badge-btn'"
      [badgeText]="'Inadmisible'"
    />

    <cygnus-badge
      [badgeTypes]="'badge-btn-outlined'"
      [badgeText]="'Inadmisible'"
    />
  `;

  exampleBadgeStatus: string = `
    <!-- COMPONENTE: Estado Online -->
    <cygnus-badge
      [badgeTypes]="'badge-state-success'"
      [badgeText]="'Online'"
    />
    <!-- COMPONENTE: Estado Offline -->
    <cygnus-badge
      [badgeTypes]="'badge-state-error'"
      [badgeText]="'Offline'"
    />
  `;

}
