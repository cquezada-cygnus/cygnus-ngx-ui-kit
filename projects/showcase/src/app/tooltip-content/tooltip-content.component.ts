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
  styleUrl: './tooltip-content.component.scss'
})
export class TooltipContentComponent {

  private tooltipService = inject(TooltipService);

  showMyTooltip(event: MouseEvent): void {
    this.tooltipService.show(event.target as HTMLElement);
  }

  hideMyTooltip(): void {
    this.tooltipService.hide();
  }

}
