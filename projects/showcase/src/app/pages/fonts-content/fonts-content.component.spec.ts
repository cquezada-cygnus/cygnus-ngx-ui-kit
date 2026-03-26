import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsContentComponent } from './fonts-content.component';

describe('FontsContentComponent', () => {
  let component: FontsContentComponent;
  let fixture: ComponentFixture<FontsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontsContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
