import { Component, inject } from '@angular/core';
import { CygnusButtonComponent } from 'ngx-cygnus-ui/components/button';
import { CygnusTooltipComponent } from 'ngx-cygnus-ui/components/tooltip';
import { TooltipService } from 'ngx-cygnus-ui/services';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-tooltip-content',
  imports: [
    CygnusButtonComponent,
    CygnusTooltipComponent,
    Highlight, HighlightLineNumbers,
  ],
  templateUrl: './tooltip-content.component.html',
  styleUrl: './tooltip-content.component.scss',
})
export class TooltipContentComponent {

  private tooltipService = inject(TooltipService);

  firstTooltip: string = `
    Este es un tooltip
  `;

  secondTooltip: string = `
    <h5 class="text-sm font-medium">Cygnus UI</h5>
    <p class="text-xs text-white opacity-80">
      Cygnus UI es una biblioteca de componentes fácil de usar para Tailwind CSS y Material Design..
    </p>
  `;

  showMyTooltip(tooltipInside: string, event: MouseEvent): void {
    this.tooltipService.show(tooltipInside, event.target as HTMLElement);
  }

  hideMyTooltip(): void {
    this.tooltipService.hide();
  }

  cygnusTooltipImportTs: string = `
    import { Component, inject } from '@angular/core';
    import { CygnusButtonComponent } from 'ngx-cygnus-ui/components/button';
    import { CygnusTooltipComponent } from 'ngx-cygnus-ui/components/tooltip';
    import { TooltipService } from 'ngx-cygnus-ui/services';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusButtonComponent,
        CygnusTooltipComponent,
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss',
    })
    export class AppComponentComponent {}
  `;

  cygnusTooltipCodeTs: string = `
    ...
    export class AppComponentComponent {
      private tooltipService = inject(TooltipService);

      firstTooltip: string = 'Este es un tooltip';

      showMyTooltip(tooltipInside: string, event: MouseEvent): void {
        this.tooltipService.show(tooltipInside, event.target as HTMLElement);
      }

      hideMyTooltip(): void {
        this.tooltipService.hide();
      }
    }
  `;

  cygnusTooltipComplexCodeTs: string = `
    ...
    export class AppComponentComponent {
      private tooltipService = inject(TooltipService);

      secondTooltip: string = '
        <h5 class="text-sm font-medium">Cygnus UI</h5>
        <p class="text-xs text-white opacity-80">
          Cygnus UI es una biblioteca de componentes fácil de usar para Tailwind CSS y Material Design..
        </p>
      ';

      showMyTooltip(tooltipInside: string, event: MouseEvent): void {
        this.tooltipService.show(tooltipInside, event.target as HTMLElement);
      }

      hideMyTooltip(): void {
        this.tooltipService.hide();
      }
    }
  `;

  cygnusTooltipSimpleHtml: string = `
    <cygnus-tooltip />
    <!-- en showMyTooltip debes entregar la variable con el contenido del tooltip y el resultado del evento -->
    <cygnus-button
      [btnTypes]="'btn btn-size-sm'"
      (mouseenter)="showMyTooltip(firstTooltip, $event)"
      (mouseleave)="hideMyTooltip()"
    >
      Hover
    </cygnus-button>
  `;

  cygnusTooltipComplexHtml: string = `
    <cygnus-tooltip />
    <cygnus-button
      [btnTypes]="'btn-gray btn-circle btn-icon-only'"
      [btnIconRouteRight]="'assets/icons/svg/Users/face-smile.svg'"
      (mouseenter)="showMyTooltip(secondTooltip, $event)"
      (mouseleave)="hideMyTooltip()"
    >
    </cygnus-button>
  `;

}
