import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[autoWidthSelectDirective]'
})
export class AutoWidthSelectDirective {

  @Input('autoWidthSelectDirective') autoWidthSelectActive: boolean = false;

  constructor(private elementRef: ElementRef) { }

  @HostListener('change')
  onChange() {
    if (this.autoWidthSelectActive) this.adjustWidth();
  }

  private adjustWidth() {
    const selectElement: HTMLSelectElement = this.elementRef.nativeElement;
    const selectedOptionText = selectElement.options[selectElement.selectedIndex]?.text || '';

    // Create a temporary element to measure text width
    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    tempSpan.style.whiteSpace = 'nowrap';
    tempSpan.style.font = getComputedStyle(selectElement).font; // Match font styles
    tempSpan.textContent = selectedOptionText;
    document.body.appendChild(tempSpan);

    const calculatedWidth = tempSpan.offsetWidth;
    document.body.removeChild(tempSpan);

    selectElement.style.width = `${calculatedWidth + 56}px`; // Add some padding
  }
}
