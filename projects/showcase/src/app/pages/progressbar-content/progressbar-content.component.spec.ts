import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarContentComponent } from './progressbar-content.component';

describe('ProgressbarContentComponent', () => {
  let component: ProgressbarContentComponent;
  let fixture: ComponentFixture<ProgressbarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressbarContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressbarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
