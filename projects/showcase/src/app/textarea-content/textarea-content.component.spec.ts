import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaContentComponent } from './textarea-content.component';

describe('TextareaContentComponent', () => {
  let component: TextareaContentComponent;
  let fixture: ComponentFixture<TextareaContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
