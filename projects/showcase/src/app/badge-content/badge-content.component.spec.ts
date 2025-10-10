import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeContentComponent } from './badge-content.component';

describe('BadgeContentComponent', () => {
  let component: BadgeContentComponent;
  let fixture: ComponentFixture<BadgeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
