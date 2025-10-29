import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  private showTooltipSubject = new Subject<{ message: string, targetElement: HTMLElement | null }>();
  private hideTooltipSubject = new Subject<void>();

  showTooltip$: Observable<{ message: string, targetElement: HTMLElement | null }> = this.showTooltipSubject.asObservable();
  hideTooltip$: Observable<void> = this.hideTooltipSubject.asObservable();

  show(message: string, targetElement: HTMLElement | null = null): void {
    this.showTooltipSubject.next({ message, targetElement });
  }

  hide(): void {
    this.hideTooltipSubject.next();
  }
}
