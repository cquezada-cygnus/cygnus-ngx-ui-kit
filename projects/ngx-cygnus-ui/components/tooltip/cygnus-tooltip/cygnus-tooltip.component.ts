import { Component, ElementRef, inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { TooltipService } from 'ngx-cygnus-ui/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cygnus-tooltip',
  imports: [],
  templateUrl: './cygnus-tooltip.component.html',
})
export class CygnusTooltipComponent implements OnInit, OnDestroy {

  isVisible = false;

  position = { left: 0, top: 0 };
  private subscription: Subscription = new Subscription();

  private tooltipService = inject(TooltipService);
  private renderer = inject(Renderer2);
  private el = inject(ElementRef);

  ngOnInit(): void {
    this.subscription.add(this.tooltipService.showTooltip$.subscribe(({ targetElement }) => {
      this.isVisible = true;
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        this.position.left = rect.left + window.scrollX;
        this.position.top = rect.top + window.scrollY - 30; // Adjust for tooltip height
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
