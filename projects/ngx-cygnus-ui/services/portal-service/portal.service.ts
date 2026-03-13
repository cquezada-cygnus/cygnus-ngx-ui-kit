import { inject, Injectable, RendererFactory2, signal } from '@angular/core';
import { Portal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  private renderer = inject(RendererFactory2).createRenderer(null, null);

  // Guardamos el portal activo
  activePortal = signal<Portal<any> | null>(null);

  open(portal: Portal<any>) {
    this.activePortal.set(portal);
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  close() {
    this.activePortal.set(null);
    this.renderer.removeStyle(document.body, 'overflow');
  }
}
