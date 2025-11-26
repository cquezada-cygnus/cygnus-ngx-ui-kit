import { Component, inject } from '@angular/core';
import { TooltipService } from 'ngx-cygnus-ui/services';
import { CygnusButtonComponent } from 'ngx-cygnus-ui/components/button';
import { CygnusPopoverComponent } from 'ngx-cygnus-ui/components/popover';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-popover-content',
  imports: [
    CygnusButtonComponent,
    CygnusPopoverComponent,
    Highlight, HighlightLineNumbers,
  ],
  templateUrl: './popover-content.component.html',
  styleUrl: './popover-content.component.scss'
})
export class PopoverContentComponent {
  private tooltipService = inject(TooltipService);

  popoverMessage: string = `
    <p class="px-4 py-2">Este es un muy hermoso y simple popover</p>
    <p class="px-4 py-2">Se puede personalizar su contenido.</p>
  `;

  showMyTooltip(tooltipInside: string, event: MouseEvent): void {
    this.tooltipService.show(tooltipInside, event.target as HTMLElement);
  }

  hideMyTooltip(): void {
    this.tooltipService.hide();
  }

  cygnusPopoverImportTs: string = `
    import { Component, inject } from '@angular/core';
    import { TooltipService } from 'ngx-cygnus-ui/services';
    import { CygnusButtonComponent } from 'ngx-cygnus-ui/components/button';
    import { CygnusPopoverComponent } from 'ngx-cygnus-ui/components/popover';

    @Component({
      selector: 'app-popover-content',
      imports: [
          CygnusButtonComponent,
          CygnusPopoverComponent,
        ],
      templateUrl: './popover-content.component.html',
      styleUrl: './popover-content.component.scss'
    })
    export class PopoverContentComponent {}
  `;

  cygnusPopoverCodeTs: string = `
    ...
    export class PopoverContentComponent {
      // servicio que ayudará a manejar el comportamiento del popover
      private tooltipService = inject(TooltipService);

      // plantilla que contiene el mensaje que se visualizará al interactuar con el popover en estructura html
      popoverMessage: string = '
        <p class="px-4 py-2">Este es un muy hermoso y simple popover</p>
        <p class="px-4 py-2">Se puede personalizar su contenido.</p>
      ';

      // mostrar popover
      showMyTooltip(tooltipInside: string, event: MouseEvent): void {
        this.tooltipService.show(tooltipInside, event.target as HTMLElement);
      }

      // ocultar popover
      hideMyTooltip(): void {
        this.tooltipService.hide();
      }
    }
  `;

  cygnusPopoverHtml: string = `
    <cygnus-popover />
    <cygnus-button
      [btnTypes]="'btn btn-size-sm'"
      (mouseenter)="showMyTooltip(popoverMessage, $event)"
      (mouseleave)="hideMyTooltip()"
    >
      popover
    </cygnus-button>
  `;

}
