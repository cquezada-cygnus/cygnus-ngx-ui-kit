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

}
