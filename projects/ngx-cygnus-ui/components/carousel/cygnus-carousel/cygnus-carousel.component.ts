import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CarouselItem } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'cygnus-carousel',
  imports: [],
  templateUrl: './cygnus-carousel.component.html',
})
export class CygnusCarouselComponent {
  // Input estático (se asume que no cambia tras el render inicial)
  seconds = input<number>(5);
  itemsInput = input.required<CarouselItem[]>();

  private sanitizer = inject(DomSanitizer);

  // 2. Transformamos los items para que el SVG sea seguro
  // Esto se ejecuta solo cuando 'itemsInput' cambia
  items = computed(() => {
    const rawItems = this.itemsInput().map(item => ({
      ...item,
      trustedSvg: this.sanitizer.bypassSecurityTrustHtml(item.svg)
    }));
    // Agregamos el clon al final
    return rawItems.length > 0 ? [...rawItems, { ...rawItems[0], id: 'clone' }] : [];
  });

  currentIndex = signal(0);
  isTransitioning = signal(true); // Controla si la animación CSS está activa


  constructor() {
    // El effect rastrea automáticamente seconds()
    // Cuando el input cambie, la función de limpieza (onCleanup) se ejecuta
    // y luego se vuelve a ejecutar el código del effect.
    effect((onCleanup) => {
      const intervalMs = this.seconds() * 1000;

      const timer = setInterval(() => {
        this.next();
      }, intervalMs);

      // Limpieza automática si el componente se destruye o el input cambia
      onCleanup(() => {
        clearInterval(timer);
      });
    });
  }

  next() {
    // Si estamos en el clon (última posición), no hacemos nada hasta que el reset termine
    if (this.currentIndex() === this.items().length - 1) return;

    this.isTransitioning.set(true);
    this.currentIndex.update(i => i + 1);
  }

  handleTransitionEnd() {
    // Cuando la transición termina y estamos en el clon (último elemento)
    if (this.currentIndex() === this.items().length - 1) {
      this.isTransitioning.set(false); // Quitamos la animación
      this.currentIndex.set(0);       // Saltamos al inicio real
    }
  }

}
