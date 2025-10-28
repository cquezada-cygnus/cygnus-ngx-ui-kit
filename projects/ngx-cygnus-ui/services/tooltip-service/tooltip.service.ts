import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  private showTooltipSubject = new Subject<{ targetElement: HTMLElement | null }>();
  private hideTooltipSubject = new Subject<void>();

  showTooltip$: Observable<{ targetElement: HTMLElement | null }> = this.showTooltipSubject.asObservable();
  hideTooltip$: Observable<void> = this.hideTooltipSubject.asObservable();

  show(targetElement: HTMLElement | null = null): void {
    this.showTooltipSubject.next({ targetElement });
  }

  hide(): void {
    this.hideTooltipSubject.next();
  }
}
