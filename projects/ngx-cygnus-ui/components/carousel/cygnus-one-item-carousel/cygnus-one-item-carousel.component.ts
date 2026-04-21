import { Component, computed, effect, inject, input, signal, untracked } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CarouselItem } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'cygnus-one-item-carousel',
  imports: [],
  templateUrl: './cygnus-one-item-carousel.component.html',
  styleUrl: './cygnus-one-item-carousel.component.css'
})
export class CygnusOneItemCarouselComponent {
  // En lugar de manejar un array y un índice, el carousel recibe un item a la vez y anima la transición entre el anterior y el nuevo.

  item = input.required<CarouselItem>();

  private sanitizer = inject(DomSanitizer);

  // Item visible actualmente
  currentItem = signal<(CarouselItem & { trustedSvg: any }) | null>(null);
  // Item que está saliendo
  previousItem = signal<(CarouselItem & { trustedSvg: any }) | null>(null);

  isTransitioning = signal(false);

  // Cola por si llegan items mientras se anima
  private pendingItem: (CarouselItem & { trustedSvg: any }) | null = null;

  constructor() {
    effect(() => {
      const newItem = this.item();

      untracked(() => {
        const sanitized = {
          ...newItem,
          trustedSvg: this.sanitizer.bypassSecurityTrustHtml(newItem.svg)
        };

        if (!this.currentItem()) {
          // Primera vez, sin animación
          this.currentItem.set(sanitized);
          return;
        }

        if (this.isTransitioning()) {
          // Llego mientras animaba, encolar
          this.pendingItem = sanitized;
          return;
        }

        this.startTransition(sanitized);
      });
    });
  }

  private startTransition(incoming: CarouselItem & { trustedSvg: any }) {
    this.previousItem.set(this.currentItem());
    this.currentItem.set(incoming);
    this.isTransitioning.set(true);
  }

  handleAnimationEnd() {
    this.previousItem.set(null);
    this.isTransitioning.set(false);

    // Si llegó algo mientras animaba, procesarlo
    if (this.pendingItem) {
      const next = this.pendingItem;
      this.pendingItem = null;
      this.startTransition(next);
    }
  }

}
