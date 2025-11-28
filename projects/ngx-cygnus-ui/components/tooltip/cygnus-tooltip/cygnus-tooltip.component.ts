import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TooltipService } from 'ngx-cygnus-ui/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cygnus-tooltip',
  imports: [],
  templateUrl: './cygnus-tooltip.component.html',
})
export class CygnusTooltipComponent implements OnInit, OnDestroy {

  isVisible:boolean = false;
  message:string = '';

  position = { top: 0, left: 0 };
  showBelow: boolean = false; // Para saber si mostrar arriba o abajo

  get tooltipClasses(): string {
    return this.showBelow
      ? '-translate-x-1/2'
      : '-translate-x-1/2 -translate-y-full';
  }

  private subscription: Subscription = new Subscription();
  private tooltipService = inject(TooltipService);

  ngOnInit(): void {
    this.subscription.add(this.tooltipService.showTooltip$.subscribe(({ message, targetElement }) => {
      this.message = message;
      this.isVisible = true;

      if (targetElement) {
        this.calculatePosition(targetElement);
      }
    }));

    this.subscription.add(this.tooltipService.hideTooltip$.subscribe(() => {
      this.isVisible = false;
    }));
  }

  private calculatePosition(targetElement: HTMLElement): void {

    const rect = targetElement.getBoundingClientRect();
    const tooltipHeight = 10; // Altura aproximada del tooltip (ajusta según tu diseño)
    const spacing = 5; // Espacio entre el botón y el tooltip

    // Calcular posición horizontal (centrado respecto al botón)
    this.position.left = rect.left + (rect.width / 2);

    // Determinar si hay espacio arriba del botón
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;

    if (spaceAbove >= tooltipHeight + spacing) {
      // Mostrar arriba
      this.showBelow = false;
      this.position.top = rect.top - spacing;
    } else if (spaceBelow >= tooltipHeight + spacing) {
      // Mostrar abajo
      this.showBelow = true;
      this.position.top = rect.bottom + spacing;
    } else {
      // Si no hay espacio suficiente en ningún lado, mostrar donde haya más espacio
      this.showBelow = spaceBelow > spaceAbove;
      this.position.top = this.showBelow ? rect.bottom + spacing : rect.top - spacing;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
