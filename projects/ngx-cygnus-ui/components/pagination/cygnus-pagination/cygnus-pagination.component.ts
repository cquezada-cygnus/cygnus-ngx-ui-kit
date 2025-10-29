import { Component, input, model } from '@angular/core';
import { CygnusButtonComponent, } from 'ngx-cygnus-ui/components/button';

@Component({
  selector: 'cygnus-pagination',
  imports: [
    CygnusButtonComponent,
  ],
  templateUrl: './cygnus-pagination.component.html',
})
export class CygnusPaginationComponent {
  maxCounter     = input<number>(0);
  currentCounter = model<number>(0);
  paginationType = input<string>('');

  goToLeft() {
    if (this.currentCounter() > 1) {
      this.currentCounter.update( current => current-=1 );
    }
  }

  goToRight() {
    if (this.currentCounter() < this.maxCounter()) {
      this.currentCounter.update( current => current+=1 );
    }
  }
}
