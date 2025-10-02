import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputContentComponent } from './input-content.component';

describe('InputContentComponent', () => {
  let component: InputContentComponent;
  let fixture: ComponentFixture<InputContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
