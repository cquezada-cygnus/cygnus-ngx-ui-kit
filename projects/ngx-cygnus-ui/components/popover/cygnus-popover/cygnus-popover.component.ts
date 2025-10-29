import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { TooltipService } from 'ngx-cygnus-ui/services';

@Component({
  selector: 'cygnus-popover',
  imports: [],
  templateUrl: './cygnus-popover.component.html',
})
export class CygnusPopoverComponent {
  isVisible:boolean = false;
  message:string = '';

  position = { bottom: 0 };
  private subscription: Subscription = new Subscription();
  private tooltipService = inject(TooltipService);

  ngOnInit(): void {
    this.subscription.add(this.tooltipService.showTooltip$.subscribe(({ message, targetElement }) => {
      this.message = message;
      this.isVisible = true;
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        this.position.bottom = -(rect.top)/1.95 + (window.scrollY) - 30; // Adjust for tooltip height
      }
    }));

    this.subscription.add(this.tooltipService.hideTooltip$.subscribe(() => {
      this.isVisible = false;
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
