import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonContentComponent } from './radio-button-content.component';

describe('RadioButtonContentComponent', () => {
  let component: RadioButtonContentComponent;
  let fixture: ComponentFixture<RadioButtonContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioButtonContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioButtonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
