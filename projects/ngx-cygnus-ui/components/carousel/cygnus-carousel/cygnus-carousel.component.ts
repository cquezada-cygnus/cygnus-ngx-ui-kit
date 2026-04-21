import { Component, computed, effect, inject, input, signal, untracked  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CarouselItem } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'cygnus-carousel',
  imports: [],
  templateUrl: './cygnus-carousel.component.html',
})
export class CygnusCarouselComponent {

  // CONFIGURACIÓN
  // 'auto' para temporizador, 'manual' para esperar la señal
  mode = input<'auto' | 'manual'>('auto');

  seconds = input<number>(5);

  // Esta es la señal que viene de fuera.
  // Cada vez que el padre cambie este valor (ej. un timestamp o un contador), el carousel rotará.
  triggerNext = input<any>(null);

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

  // Guardamos el último valor procesado para comparar
  private lastTriggerValue: any = null;


  constructor() {
    // El effect rastrea automáticamente seconds()
    // Cuando el input cambie, la función de limpieza (onCleanup) se ejecuta
    // y luego se vuelve a ejecutar el código del effect.
    effect((onCleanup) => {
      if (this.mode()==='auto') {

        const intervalMs = this.seconds() * 1000;

        const timer = setInterval(() => {
          this.next();
        }, intervalMs);

        // Limpieza automática si el componente se destruye o el input cambia
        onCleanup(() => {
          clearInterval(timer);
        });
      }
    });

    // EFECTO 2: Reacciona a la señal externa (triggerNext)
    effect(() => {
      // Al "leer" triggerNext, este bloque se ejecuta cada vez que cambie
      const trigger = this.triggerNext();

      // Solo avanza si:
      // 1. El modo es manual
      // 2. El trigger no es el valor inicial (null)
      // 3. El valor cambió respecto al último procesado
      if (
        this.mode() === 'manual' &&
        trigger !== null &&
        trigger !== undefined &&
        trigger !== this.lastTriggerValue  // <-- evita disparos duplicados
      ) {
        this.lastTriggerValue = trigger;
        // untracked para que el next() no cree dependencias reactivas inesperadas
        untracked(() => this.next());
      }
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
