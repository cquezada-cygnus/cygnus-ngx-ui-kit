import { Component, inject } from '@angular/core';
import { CygnusButtonComponent } from 'ngx-cygnus-ui/components/button';
import { CygnusTooltipComponent } from 'ngx-cygnus-ui/components/tooltip';
import { TooltipService } from 'ngx-cygnus-ui/services';

@Component({
  selector: 'app-tooltip-content',
  imports: [
    CygnusButtonComponent,
    CygnusTooltipComponent,
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

}
