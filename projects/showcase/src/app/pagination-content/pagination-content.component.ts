import { Component } from '@angular/core';
import { CygnusPaginationComponent } from 'ngx-cygnus-ui/components/pagination';

@Component({
  selector: 'app-pagination-content',
  imports: [
    CygnusPaginationComponent,
  ],
  templateUrl: './pagination-content.component.html',
  styleUrl: './pagination-content.component.scss'
})
export class PaginationContentComponent {
  currentCounter: number = 2;
  currentCounterCircle: number = 2;

}
