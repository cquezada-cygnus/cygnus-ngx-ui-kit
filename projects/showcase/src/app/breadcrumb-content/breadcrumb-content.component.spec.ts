import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbContentComponent } from './breadcrumb-content.component';

describe('BreadcrumbContentComponent', () => {
  let component: BreadcrumbContentComponent;
  let fixture: ComponentFixture<BreadcrumbContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
